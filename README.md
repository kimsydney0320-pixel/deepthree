# Deep Three

Daily NBA rare-answer trivia. 7 prompts, 25 seconds each. The rarer your answer, the deeper the shot.

Play: https://playdeepthree.com

A static site on GitHub Pages. There is no build step and no dependencies: pushing to `main` deploys.
Deep Three shares Moonball's Firebase project; every collection it uses is prefixed `d3_`.

## Files

- `index.html`: the whole game — UI, scoring, the pixel court, the owner-only tester tools
- `data.source.js`: **the question bank you edit.** Prompts and their answers, in plain text
- `scramble.js`: encodes `data.source.js` into `data.js`
- `data.js`: generated. Do not edit by hand — the next `scramble.js` run overwrites it
- `config.js`: Firebase web config + the owner list that unlocks the tester tools
- `fb-shim.js`: Google/guest sign-in and Firestore access, all collections prefixed `d3_`
- `firestore.rules`: database rules for **both** games (see below)

## Editing questions

```sh
# edit data.source.js, then:
node scramble.js
```

`scramble.js` re-encodes every answer, checks the rotation for the mistakes that quietly break it
(duplicate ids, ids that name no prompt, a schedule whose length is not a multiple of 7) and prints
how many days of fresh questions remain.

The daily rotation is `PROMPT_ORDER`: day N after `DEEPBALL_LAUNCH` deals entries `7N` through `7N+6`,
and a prompt only returns once the whole list is spent. **Keep its length a multiple of 7** — anything
past the last full day is never dealt. `ROTATION_RESERVE` holds prompts kept out of rotation entirely.

Appending to the end of `PROMPT_ORDER` never disturbs days that have already been played.

## Firestore rules

`firestore.rules` covers Deep Three *and* Moonball, and is kept identical in both repos. One live
ruleset in the Firebase console serves both games, so deploying a copy that covers only one of them
silently deletes the other game's rules. Edit it in either repo, copy it to the other, then paste it
into Firebase console > Firestore > Rules.
