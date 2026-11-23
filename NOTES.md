# Working notes — Deep Three

Context that lives in conversations and gets lost with them. Keep it short; update it when a
decision is made or an open question is settled.

Last updated: 2026-11-22

## Where things stand

Live since Nov 19, 2026, as an NBA port of Moonball, and now at full feature parity with it —
all 33 internal modules match, and the only wording difference is "beat my score" against
Moonball's "beat my drive".

289 prompts, 12,797 answers — a wider field of accepted answers per prompt than Moonball has.
287 are scheduled across 41 days; the last fresh day is **Dec 29, 2026**. After that the rotation
wraps to day one and replays the same sequence.

## The content problem

Deep Three has **no reserve pool**. Moonball banks spare prompts it can move into rotation;
every Deep Three prompt is already scheduled. Extending past Dec 29 means writing new ones —
there is nothing to promote. This is the main thing to plan for.

The bank is also softer than Moonball's: 204 easy to 85 hard, against Moonball's 249 to 186.
New prompts should probably lean harder to keep the rarity tiers meaningful.

## Decisions worth remembering

- **Shares Moonball's Firebase project.** Every collection is prefixed `d3_`. That prefix is the
  only thing separating the two games' data, which is why one `firestore.rules` file has to cover
  both and is kept identical in both repos.
- **Every tier is shot from where its name says (Nov 22).** The six spots live in `SHOTS` in
  the scene code, and the shooter now walks out to his spot before he rises. Distances from the
  rim run 1.7, 2.7, 3.9, 5.0, 6.6 and 14.0; the arc sits 4.2 out, so layup, floater and mid-range
  are inside it and the three tiers above are behind it. The corner three is wide (lat 4.9) and
  near the baseline, which is the corner. On a narrow screen the spot is pulled in far enough to
  stay in frame, keeping the corner the widest of the six. The same file drives both games.
- **Tier names translate Moonball's throw-depth metaphor to shot distance** — Layup, Floater,
  Mid-Range, Corner Three, Deep Three, Logo Shot — with identical point values.
- **Answers are obfuscated, not secured.** Same XOR scheme as Moonball; the decoder ships in
  `index.html`.
- **Kept at feature parity with Moonball**, usually in the same sitting with matching commits.

## Open questions

- Who writes the next batch of prompts, and when? Dec 29 is the deadline.
- Should the two games share a streak or leaderboard, or stay fully separate?

## Watch out for

- `firestore.rules` covers **both** games. Deploying a copy that is missing the unprefixed half
  silently breaks Moonball.
- Keep `PROMPT_ORDER` a multiple of 7. Two prompts (`chicago`, `team-sixers`) were stranded past
  the last full day until Nov 20 and are now parked in `ROTATION_RESERVE`. `scramble.js` warns
  about this now.
- Never edit `data.js` by hand; edit `data.source.js` and run `node scramble.js`.
