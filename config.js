/* Deep Three site config, on the same Firebase project as Moonball. These values come from
   Firebase console > Project settings > Your apps. A Firebase web API key is public by design
   and safe to commit; what actually protects the data is firestore.rules. */
window.DEEPBALL_CONFIG = {
  firebase: {
    apiKey: "AIzaSyCJB5zhzYQOIJqx57laWPP1C1pZR3CpdcY",
    authDomain: "deep-ball-331a4.firebaseapp.com",
    projectId: "deep-ball-331a4",
    storageBucket: "deep-ball-331a4.firebasestorage.app",
    messagingSenderId: "976692363437",
    appId: "1:976692363437:web:e89ff14c2a716438568624"
  },
  // Google accounts that get the tester tools + Question Studio. Must match firestore.rules.
  owners: ["kimsydney0320@gmail.com"]
};
