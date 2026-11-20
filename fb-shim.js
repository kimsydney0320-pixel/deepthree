/* Deep Three standalone (shares Moonball's Firebase project; every collection is prefixed d3_): implements the small storage + user API the game uses, on Firebase.
   Guests get an anonymous Firebase account so their scores count toward rarity and the leaderboard;
   "Continue with Google" upgrades that same account, so nothing is lost. */
(function(){
  var cfg = window.DEEPBALL_CONFIG || {};
  var owners = (cfg.owners || []).map(function(e){ return String(e).toLowerCase(); });
  if (!window.firebase || !cfg.firebase || /REPLACE_ME/.test(cfg.firebase.apiKey || "REPLACE_ME")) {
    console.warn("Deep Three: Firebase not configured; running offline (local progress only).");
    return;
  }
  firebase.initializeApp(cfg.firebase);
  var auth = firebase.auth(), fs = firebase.firestore();
  var WEEK = 8 * 24 * 3600 * 1000;

  var ready = new Promise(function(res){
    var done = false;
    auth.onAuthStateChanged(function(u){
      if (done) return;
      if (u) { done = true; res(u); return; }
      auth.signInAnonymously().catch(function(){ done = true; res(null); });
    });
  });

  function mapPath(p){ var m = String(p).match(/^data\/users\/([^/]+)\/profile$/); return m ? "profiles/" + m[1] : p; }
  // Deep Three keeps its own scores, nicknames, flags and profiles apart from Moonball's
  function pre(p){ return "d3_" + p; }
  // Firestore can't store arrays inside arrays, so each day's picks [[promptId, answer], ...]
  // are saved as [{p, a}, ...] and turned back into pairs when read.
  function packDays(days){
    var out = {};
    Object.keys(days || {}).forEach(function(k){
      var d = Object.assign({}, days[k]);
      if (Array.isArray(d.picks)) d.picks = d.picks.map(function(x){ return Array.isArray(x) ? { p: String(x[0] || ""), a: x[1] == null ? null : String(x[1]) } : x; });
      out[k] = d;
    });
    return out;
  }
  function unpack(data){
    if (!data || !data.days) return data;
    Object.keys(data.days).forEach(function(k){
      var d = data.days[k];
      if (d && Array.isArray(d.picks)) d.picks = d.picks.map(function(x){ return x && typeof x === "object" && !Array.isArray(x) ? [x.p, x.a == null ? null : x.a] : x; });
    });
    return data;
  }
  function snap(s){ return { id: s.id, exists: s.exists, data: function(){ return unpack(s.data()); }, metadata: {} }; }
  function stamp(path, body){
    // scores carry a top-level "last" time so readers only fetch players active this week
    if (/^scores\//.test(path)) { body = Object.assign({}, body, { last: Date.now() }); if (body.days) body.days = packDays(body.days); }
    return body;
  }
  function docApi(path){
    path = mapPath(path); var r = fs.doc(pre(path));
    return {
      get: function(){ return r.get().then(snap); },
      set: function(b){ return r.set(stamp(path, b)); },
      update: function(b){ return r.set(stamp(path, b), { merge: true }); },
      "delete": function(){ return r.delete(); }
    };
  }
  function colApi(c){
    var r = fs.collection(pre(c));
    return {
      doc: function(id){ return docApi(c + "/" + id); },
      add: function(b){ return r.add(b).then(function(d){ return docApi(c + "/" + d.id); }); },
      get: function(){
        var q = c === "scores" ? r.where("last", ">=", Date.now() - WEEK) : r;
        return q.get().then(function(qs){ return { docs: qs.docs.map(snap) }; });
      }
    };
  }
  var db = { doc: docApi, collection: colApi };
  function isGuest(){ var u = auth.currentUser; return !u || u.isAnonymous; }
  function shortName(n){ var p = String(n || "").trim().split(/\s+/); return p.length > 1 ? p[0] + " " + p[p.length-1].charAt(0) + "." : (p[0] || ""); }
  var user = {
    id: function(){ return ready.then(function(u){ return u ? u.uid : null; }); },
    me: function(){ return ready.then(function(){ var u = auth.currentUser; return u && !u.isAnonymous ? { name: u.displayName || (u.email || "").split("@")[0] } : null; }); },
    isOwner: function(){ return ready.then(function(){ var u = auth.currentUser; return !!(u && !u.isAnonymous && u.emailVerified && u.email && owners.indexOf(u.email.toLowerCase()) >= 0); }); },
    profiles: function(ids){
      return Promise.all(ids.map(function(id){
        return fs.doc("names/" + id).get().then(function(s){ return [id, { name: s.exists ? (s.data().name || "") : "" }]; }, function(){ return [id, { name: "" }]; });
      })).then(function(pairs){ var o = {}; pairs.forEach(function(p){ o[p[0]] = p[1]; }); return o; });
    }
  };
  window.claude = { use: function(n){ return ready.then(function(){ return n === "db" ? db : n === "user" ? user : null; }); } };

  window.DEEPBALL_AUTH = {
    isGuest: isGuest,
    google: function(){
      var prov = new firebase.auth.GoogleAuthProvider();
      var u = auth.currentUser;
      var p = (u && u.isAnonymous) ? u.linkWithPopup(prov) : auth.signInWithPopup(prov);
      return p.then(function(){ return true; }, function(e){
        if (e && e.code === "auth/credential-already-in-use" && e.credential) {
          // this Google account already has Deep Three progress: switch to it (this device's local progress merges in on load)
          return auth.signInWithCredential(e.credential).then(function(){ return true; });
        }
        if (e && (e.code === "auth/popup-closed-by-user" || e.code === "auth/cancelled-popup-request")) return false;
        if (e && e.code === "auth/popup-blocked") return auth.signInWithRedirect(prov).then(function(){ return false; });
        alert("Sign-in didn't work: " + (e && e.message || e)); return false;
      });
    },
    signOut: function(){ return auth.signOut().then(function(){ location.reload(); }); },
    saveName: function(n){ var u = auth.currentUser; if (!u || u.isAnonymous) return; return fs.doc("names/" + u.uid).set({ name: shortName(n).slice(0, 24) }); }
  };
})();
