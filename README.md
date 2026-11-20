# Deep Three

Daily NBA rare-answer trivia. 7 prompts, 25 seconds each. The rarer your answer, the deeper the shot.

Play: https://playdeepthree.com

- `index.html`, `data.js`: the game (answers are encoded in data.js)
- `config.js`: Firebase web config + owner email (shared project with Moonball)
- `fb-shim.js`: Google/guest sign-in and database on Firebase (all collections prefixed `d3_`)
- `firestore.rules`: database rules for BOTH games (live copy: Firebase console > Firestore > Rules)
