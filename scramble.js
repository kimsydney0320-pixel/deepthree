#!/usr/bin/env node
/* Regenerates data.js from data.source.js.

   The game loads data.js, where every prompt's answers are encoded so they are not
   sitting in plain text in the page source. The encoding is a keyed XOR, symmetric:
   this script encodes, and the short decoder at the top of index.html decodes. If you
   change kb() here you must change it there too, or every answer stops matching.

   Usage:  node scramble.js          (from the repo root) */

const fs = require("path") && require("fs");
const path = require("path");
const src = require(path.join(__dirname, "data.source.js"));

/* Same key schedule as the decoder in index.html: FNV-1a over "db:<prompt id>:k7". */
function kb(id) {
  let h = 2166136261 >>> 0, out = [], s = "db:" + id + ":k7";
  for (let i = 0; i < 32; i++) { h ^= s.charCodeAt(i % s.length) + i; h = Math.imul(h, 16777619) >>> 0; out.push(h & 255); }
  return out;
}
function encode(tiers, id) {
  const bytes = Buffer.from(JSON.stringify(tiers), "utf8"), k = kb(id), u = Buffer.alloc(bytes.length);
  for (let i = 0; i < bytes.length; i++) u[i] = bytes[i] ^ k[i % 32] ^ (i * 31 & 255);
  return u.toString("base64");
}

const seen = new Set();
const prompts = src.PROMPTS.map(function (p) {
  if (!p.id) throw new Error("a prompt has no id");
  if (seen.has(p.id)) throw new Error("duplicate prompt id: " + p.id);
  seen.add(p.id);
  if (!p.tiers || !Object.keys(p.tiers).length) throw new Error("prompt has no answers: " + p.id);
  const out = { id: p.id, cat: p.cat, diff: p.diff, prompt: p.prompt, note: p.note };
  if (p.strictJr !== undefined) out.strictJr = p.strictJr;
  out.z = encode(p.tiers, p.id);
  return out;
});

/* Guard rails: these are the mistakes that quietly break the daily rotation. */
const ids = new Set(prompts.map(p => p.id));
const reserve = src.ROTATION_RESERVE || [];
src.PROMPT_ORDER.forEach(function (id) { if (!ids.has(id)) throw new Error("PROMPT_ORDER names a prompt that does not exist: " + id); });
reserve.forEach(function (id) { if (!ids.has(id)) throw new Error("ROTATION_RESERVE names a prompt that does not exist: " + id); });
if (new Set(src.PROMPT_ORDER).size !== src.PROMPT_ORDER.length) throw new Error("PROMPT_ORDER has duplicate ids");

/* What the game will actually deal, mirroring rotationOrder() in index.html. */
const dealt = src.PROMPT_ORDER.filter(id => !reserve.includes(id))
  .concat(src.PROMPTS.map(p => p.id).filter(id => !src.PROMPT_ORDER.includes(id) && !reserve.includes(id)));
const days = Math.floor(dealt.length / 7), spare = dealt.length % 7;

const out = [
  "/* " + src.BANK_NAME + " answer bank (generated - edit data.source.js, then run scramble.js). Answers are encoded. */",
  "const PROMPTS = " + JSON.stringify(prompts) + ";",
  "const TIERS = " + JSON.stringify(src.TIERS) + ";",
  "const DEEPBALL_LAUNCH = " + JSON.stringify(src.DEEPBALL_LAUNCH) + ";",
  "const PROMPT_ORDER = " + JSON.stringify(src.PROMPT_ORDER) + ";",
  "const ROTATION_RESERVE = " + JSON.stringify(reserve) + ";",
  ""
].join("\n");
fs.writeFileSync(path.join(__dirname, "data.js"), out);

const last = new Date(Date.parse(src.DEEPBALL_LAUNCH + "T00:00:00Z") + (days - 1) * 864e5).toISOString().slice(0, 10);
console.log("data.js written: " + prompts.length + " prompts, " + reserve.length + " in reserve");
console.log(days + " days of fresh questions, last one " + last + (spare ? "  (WARNING: " + spare + " prompt(s) past the last full day are never dealt)" : ""));
