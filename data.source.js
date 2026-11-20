/* MOONBALL answer bank — SOURCE OF TRUTH. Edit this file, then run:  node scramble.js
   That regenerates data.js, which is what the game actually loads. Never edit data.js by hand:
   its answers are encoded, and the next run of scramble.js overwrites it. */

const BANK_NAME = "DEEP THREE";

/* The day each game went live. Day N of the rotation = this date + N. */
const DEEPBALL_LAUNCH = "2026-11-19";

/* Scoring tiers, rarest last. pts is what an answer in that tier is worth. */
const TIERS = [
  {"key":"chalk","label":"Layup","pts":3,"blurb":"Uncontested. Everybody makes that one."},
  {"key":"bandwagon","label":"Floater","pts":8,"blurb":"Soft touch in the lane. Plenty saw it coming."},
  {"key":"starter","label":"Mid-Range","pts":15,"blurb":"A real hooper answer. Pull-up from the elbow."},
  {"key":"film","label":"Corner Three","pts":30,"blurb":"Spotted up in the corner. Now you're cooking."},
  {"key":"deep","label":"Deep Three","pts":45,"blurb":"Way beyond the arc. Nobody closed out."},
  {"key":"hail","label":"Logo Shot","pts":60,"blurb":"From the half-court logo. One in a krillion."}
];

/* The prompts. tiers holds the accepted answers, grouped by how rare each one is.
   An answer missing from every tier is simply not accepted. */
const PROMPTS = [
  {
    id: "nba-teams", cat: "franchise", diff: "easy",
    prompt: "Name an NBA team.",
    note: "All 30 count. The obvious one costs you.",
    tiers: {
      chalk: ["Los Angeles Lakers|lakers|la lakers","Boston Celtics|celtics|boston","Golden State Warriors|warriors|golden state|dubs","Chicago Bulls|bulls|chicago"],
      bandwagon: ["New York Knicks|knicks|new york","Miami Heat|heat|miami","San Antonio Spurs|spurs|san antonio","Dallas Mavericks|mavericks|mavs|dallas","Philadelphia 76ers|76ers|sixers|philadelphia|philly","Brooklyn Nets|nets|brooklyn|new jersey nets","Cleveland Cavaliers|cavaliers|cavs|cleveland","Milwaukee Bucks|bucks|milwaukee"],
      starter: ["Denver Nuggets|nuggets|denver","Phoenix Suns|suns|phoenix","Los Angeles Clippers|clippers|la clippers|clips","Houston Rockets|rockets|houston","Oklahoma City Thunder|thunder|okc|oklahoma city","Toronto Raptors|raptors|toronto","Detroit Pistons|pistons|detroit","Minnesota Timberwolves|timberwolves|wolves|minnesota|t-wolves"],
      film: ["Utah Jazz|jazz|utah","Orlando Magic|magic|orlando","Indiana Pacers|pacers|indiana","Portland Trail Blazers|trail blazers|blazers|portland","Sacramento Kings|kings|sacramento","Atlanta Hawks|hawks|atlanta"],
      deep: ["Memphis Grizzlies|grizzlies|memphis|grizz","New Orleans Pelicans|pelicans|new orleans|pels","Washington Wizards|wizards|washington|bullets|washington bullets","Charlotte Hornets|hornets|charlotte|bobcats|charlotte bobcats"],
      hail: []
    }
  },
  {
    id: "east-teams", cat: "franchise", diff: "easy",
    prompt: "Name a team in the Eastern Conference.",
    note: "Current conference alignment.",
    tiers: {
      chalk: ["Boston Celtics|celtics|boston","New York Knicks|knicks|new york","Miami Heat|heat|miami","Chicago Bulls|bulls|chicago"],
      bandwagon: ["Philadelphia 76ers|76ers|sixers|philadelphia|philly","Milwaukee Bucks|bucks|milwaukee","Cleveland Cavaliers|cavaliers|cavs|cleveland","Brooklyn Nets|nets|brooklyn|new jersey nets"],
      starter: ["Toronto Raptors|raptors|toronto","Detroit Pistons|pistons|detroit","Orlando Magic|magic|orlando","Indiana Pacers|pacers|indiana"],
      film: ["Atlanta Hawks|hawks|atlanta","Washington Wizards|wizards|washington|bullets|washington bullets"],
      deep: ["Charlotte Hornets|hornets|charlotte|bobcats|charlotte bobcats"],
      hail: []
    }
  },
  {
    id: "west-teams", cat: "franchise", diff: "easy",
    prompt: "Name a team in the Western Conference.",
    note: "Current conference alignment.",
    tiers: {
      chalk: ["Los Angeles Lakers|lakers|la lakers","Golden State Warriors|warriors|golden state|dubs","San Antonio Spurs|spurs|san antonio","Dallas Mavericks|mavericks|mavs|dallas"],
      bandwagon: ["Denver Nuggets|nuggets|denver","Phoenix Suns|suns|phoenix","Oklahoma City Thunder|thunder|okc|oklahoma city","Los Angeles Clippers|clippers|la clippers|clips","Houston Rockets|rockets|houston"],
      starter: ["Minnesota Timberwolves|timberwolves|wolves|minnesota|t-wolves","Utah Jazz|jazz|utah","Portland Trail Blazers|trail blazers|blazers|portland","Sacramento Kings|kings|sacramento"],
      film: ["Memphis Grizzlies|grizzlies|memphis|grizz","New Orleans Pelicans|pelicans|new orleans|pels"],
      deep: [],
      hail: []
    }
  },
  {
    id: "animal-teams", cat: "franchise", diff: "easy",
    prompt: "Name an NBA team named after an animal.",
    note: "Real animals only — dinosaurs count.",
    tiers: {
      chalk: ["Chicago Bulls|bulls|chicago","Toronto Raptors|raptors|toronto"],
      bandwagon: ["Milwaukee Bucks|bucks|milwaukee","Atlanta Hawks|hawks|atlanta"],
      starter: ["Memphis Grizzlies|grizzlies|memphis|grizz","Minnesota Timberwolves|timberwolves|wolves|minnesota|t-wolves"],
      film: ["New Orleans Pelicans|pelicans|new orleans|pels","Charlotte Hornets|hornets|charlotte|bobcats|charlotte bobcats"],
      deep: [],
      hail: []
    }
  },
  {
    id: "no-s-teams", cat: "franchise", diff: "easy",
    prompt: "Name an NBA team whose nickname doesn't end in \"s\".",
    note: "Singular team names.",
    tiers: {
      chalk: ["Miami Heat|heat|miami","Orlando Magic|magic|orlando"],
      bandwagon: ["Utah Jazz|jazz|utah","Oklahoma City Thunder|thunder|okc|oklahoma city"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "moved-teams", cat: "franchise", diff: "easy",
    prompt: "Name a franchise that has played in a different city.",
    note: "Current franchises that relocated at some point.",
    tiers: {
      chalk: ["Los Angeles Lakers|lakers|la lakers","Oklahoma City Thunder|thunder|okc|oklahoma city","Golden State Warriors|warriors|golden state|dubs"],
      bandwagon: ["Brooklyn Nets|nets|brooklyn|new jersey nets","Los Angeles Clippers|clippers|la clippers|clips","Memphis Grizzlies|grizzlies|memphis|grizz","Sacramento Kings|kings|sacramento","Philadelphia 76ers|76ers|sixers|philadelphia|philly"],
      starter: ["Utah Jazz|jazz|utah","Houston Rockets|rockets|houston","Atlanta Hawks|hawks|atlanta","New Orleans Pelicans|pelicans|new orleans|pels","Washington Wizards|wizards|washington|bullets|washington bullets","Detroit Pistons|pistons|detroit"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "never-won", cat: "franchise", diff: "easy",
    prompt: "Name an NBA team that has never won a championship.",
    note: "NBA titles only, through the 2025 Finals.",
    tiers: {
      chalk: ["Phoenix Suns|suns|phoenix","Los Angeles Clippers|clippers|la clippers|clips","Utah Jazz|jazz|utah"],
      bandwagon: ["Minnesota Timberwolves|timberwolves|wolves|minnesota|t-wolves","Indiana Pacers|pacers|indiana","Brooklyn Nets|nets|brooklyn|new jersey nets","Orlando Magic|magic|orlando"],
      starter: ["Memphis Grizzlies|grizzlies|memphis|grizz","New Orleans Pelicans|pelicans|new orleans|pels","Charlotte Hornets|hornets|charlotte|bobcats|charlotte bobcats"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "nba-cities", cat: "franchise", diff: "easy",
    prompt: "Name a city that has an NBA team.",
    note: "Where a team plays today.",
    tiers: {
      chalk: ["Los Angeles","Boston","Chicago","New York"],
      bandwagon: ["Miami","San Antonio","Dallas","Golden State|san francisco|oakland","Philadelphia","Brooklyn","Cleveland","Milwaukee"],
      starter: ["Denver","Phoenix","Houston","Oklahoma City|okc","Toronto","Detroit","Minneapolis|minnesota"],
      film: ["Salt Lake City|utah","Orlando","Indianapolis","Portland","Sacramento","Atlanta"],
      deep: ["Memphis","New Orleans","Washington|dc","Charlotte"],
      hail: []
    }
  },
  {
    id: "title-teams", cat: "finals", diff: "easy",
    prompt: "Name a team that has won an NBA championship.",
    note: "Through the 2025 Finals.",
    tiers: {
      chalk: ["Los Angeles Lakers|lakers|la lakers","Boston Celtics|celtics|boston","Golden State Warriors|warriors|golden state|dubs","Chicago Bulls|bulls|chicago"],
      bandwagon: ["San Antonio Spurs|spurs|san antonio","Miami Heat|heat|miami","Detroit Pistons|pistons|detroit","Philadelphia 76ers|76ers|sixers|philadelphia|philly","New York Knicks|knicks|new york"],
      starter: ["Houston Rockets|rockets|houston","Cleveland Cavaliers|cavaliers|cavs|cleveland","Dallas Mavericks|mavericks|mavs|dallas","Milwaukee Bucks|bucks|milwaukee","Toronto Raptors|raptors|toronto","Denver Nuggets|nuggets|denver","Oklahoma City Thunder|thunder|okc|oklahoma city"],
      film: ["Portland Trail Blazers|trail blazers|blazers|portland","Atlanta Hawks|hawks|atlanta","Washington Wizards|wizards|washington|bullets|washington bullets","Sacramento Kings|kings|sacramento"],
      deep: [],
      hail: []
    }
  },
  {
    id: "champs-2010s", cat: "finals", diff: "easy",
    prompt: "Name a team that won the NBA title in the 2010s.",
    note: "The 2010 through 2019 Finals.",
    tiers: {
      chalk: ["Golden State Warriors|warriors|golden state|dubs","Miami Heat|heat|miami"],
      bandwagon: ["Los Angeles Lakers|lakers|la lakers","San Antonio Spurs|spurs|san antonio","Cleveland Cavaliers|cavaliers|cavs|cleveland"],
      starter: ["Dallas Mavericks|mavericks|mavs|dallas","Toronto Raptors|raptors|toronto"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "champs-2000s", cat: "finals", diff: "easy",
    prompt: "Name a team that won the NBA title in the 2000s.",
    note: "The 2000 through 2009 Finals.",
    tiers: {
      chalk: ["Los Angeles Lakers|lakers|la lakers","San Antonio Spurs|spurs|san antonio"],
      bandwagon: ["Boston Celtics|celtics|boston","Miami Heat|heat|miami"],
      starter: ["Detroit Pistons|pistons|detroit"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "champs-2020s", cat: "finals", diff: "easy",
    prompt: "Name a team that won the NBA title in the 2020s.",
    note: "The 2020 through 2025 Finals.",
    tiers: {
      chalk: ["Los Angeles Lakers|lakers|la lakers","Golden State Warriors|warriors|golden state|dubs","Boston Celtics|celtics|boston"],
      bandwagon: ["Denver Nuggets|nuggets|denver","Milwaukee Bucks|bucks|milwaukee"],
      starter: ["Oklahoma City Thunder|thunder|okc|oklahoma city"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "champs-90s", cat: "finals", diff: "easy",
    prompt: "Name a team that won the NBA title in the 1990s.",
    note: "The 1990 through 1999 Finals.",
    tiers: {
      chalk: ["Chicago Bulls|bulls|chicago"],
      bandwagon: ["Houston Rockets|rockets|houston","San Antonio Spurs|spurs|san antonio"],
      starter: ["Detroit Pistons|pistons|detroit"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "finals-mvp", cat: "finals", diff: "easy",
    prompt: "Name an NBA Finals MVP.",
    note: "Any year, through 2025.",
    tiers: {
      chalk: ["Michael Jordan|mj","LeBron James|lebron|king james","Kobe Bryant|kobe","Magic Johnson"],
      bandwagon: ["Stephen Curry|steph curry|steph","Kevin Durant|kd","Tim Duncan","Shaquille O'Neal|shaq","Larry Bird","Kareem Abdul-Jabbar|kareem","Giannis Antetokounmpo|giannis|greek freak","Nikola Jokic|jokic|joker","Kawhi Leonard|kawhi","Dirk Nowitzki|dirk","Dwyane Wade|d-wade|dwade","Hakeem Olajuwon|hakeem|the dream","Shai Gilgeous-Alexander|sga|shai"],
      starter: ["Tony Parker","Paul Pierce","Andre Iguodala|iggy","Jaylen Brown","Chauncey Billups","Isiah Thomas","Bill Walton","Moses Malone","James Worthy","Joe Dumars","Rick Barry","Willis Reed","Jerry West","Wilt Chamberlain"],
      film: ["Cedric Maxwell","Dennis Johnson","Jo Jo White","Wes Unseld","John Havlicek"],
      deep: [],
      hail: []
    }
  },
  {
    id: "mvp", cat: "awards", diff: "easy",
    prompt: "Name an NBA MVP.",
    note: "Regular-season MVP, any year through 2025.",
    tiers: {
      chalk: ["Michael Jordan|mj","LeBron James|lebron|king james","Stephen Curry|steph curry|steph","Nikola Jokic|jokic|joker"],
      bandwagon: ["Kobe Bryant|kobe","Kevin Durant|kd","Giannis Antetokounmpo|giannis|greek freak","Shai Gilgeous-Alexander|sga|shai","Joel Embiid|embiid","James Harden|harden","Russell Westbrook|westbrook|russ","Derrick Rose|d-rose","Magic Johnson","Larry Bird","Shaquille O'Neal|shaq","Tim Duncan","Dirk Nowitzki|dirk","Steve Nash|nash","Allen Iverson|iverson|ai","Kareem Abdul-Jabbar|kareem"],
      starter: ["Kevin Garnett|kg","Charles Barkley|barkley","Karl Malone|the mailman","Hakeem Olajuwon|hakeem|the dream","David Robinson|the admiral","Wilt Chamberlain|wilt","Bill Russell","Moses Malone","Julius Erving|dr j"],
      film: ["Oscar Robertson|the big o","Bob Pettit","Bob Cousy","Willis Reed","Wes Unseld","Dave Cowens","Bob McAdoo","Bill Walton"],
      deep: [],
      hail: []
    }
  },
  {
    id: "mvp-modern", cat: "awards", diff: "easy",
    prompt: "Name an NBA MVP from 2010 to 2025.",
    note: "The last 16 MVP winners.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Stephen Curry|steph curry|steph","Nikola Jokic|jokic|joker"],
      bandwagon: ["Giannis Antetokounmpo|giannis|greek freak","Kevin Durant|kd","Shai Gilgeous-Alexander|sga|shai"],
      starter: ["Derrick Rose|d-rose","Russell Westbrook|westbrook|russ","James Harden|harden","Joel Embiid|embiid"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "roy-modern", cat: "awards", diff: "easy",
    prompt: "Name a Rookie of the Year from 2010 to 2025.",
    note: "The last 16 winners.",
    tiers: {
      chalk: ["Victor Wembanyama|wemby|wembanyama","Luka Doncic|luka","Kyrie Irving|kyrie"],
      bandwagon: ["Ja Morant|ja","LaMelo Ball|melo ball","Paolo Banchero|paolo","Blake Griffin|blake","Karl-Anthony Towns|kat","Ben Simmons","Stephon Castle|steph castle"],
      starter: ["Andrew Wiggins|wiggins","Damian Lillard|dame|dame time","Malcolm Brogdon|brogdon","Scottie Barnes|scottie","Michael Carter-Williams|mcw","Tyreke Evans|tyreke"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "dpoy", cat: "awards", diff: "easy",
    prompt: "Name a Defensive Player of the Year.",
    note: "Any year through 2025.",
    tiers: {
      chalk: ["Rudy Gobert|gobert","Dwight Howard|dwight","Ben Wallace","Dikembe Mutombo|mutombo"],
      bandwagon: ["Kawhi Leonard|kawhi","Giannis Antetokounmpo|giannis|greek freak","Draymond Green|draymond","Hakeem Olajuwon|hakeem|the dream","Evan Mobley|mobley","Jaren Jackson Jr.|jaren jackson|jjj","Kevin Garnett|kg","Dennis Rodman|the worm","Alonzo Mourning|zo","David Robinson|the admiral","Marcus Smart|smart"],
      starter: ["Gary Payton|the glove","Ron Artest|metta world peace","Tyson Chandler","Marc Gasol","Joakim Noah","Marcus Camby|camby","Sidney Moncrief","Mark Eaton","Michael Cooper","Michael Jordan|mj","Alvin Robertson"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "no1-picks", cat: "draft", diff: "easy",
    prompt: "Name a No. 1 overall pick since 2000.",
    note: "The first pick of every draft from 2000 to 2025.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Victor Wembanyama|wemby|wembanyama","Anthony Davis|ad","Cooper Flagg|flagg"],
      bandwagon: ["Zion Williamson|zion","Kyrie Irving|kyrie","Derrick Rose|d-rose","Yao Ming|yao","Dwight Howard|dwight","Karl-Anthony Towns|kat","Paolo Banchero|paolo","John Wall","Blake Griffin|blake","Ben Simmons","Andrew Wiggins|wiggins","Anthony Edwards|ant|ant-man"],
      starter: ["Markelle Fultz","Deandre Ayton|ayton","Cade Cunningham|cade","Andrew Bogut","Greg Oden","Andrea Bargnani","Kwame Brown","Anthony Bennett","Zaccharie Risacher|risacher","Kenyon Martin"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "prep-to-pro", cat: "draft", diff: "easy",
    prompt: "Name a player drafted straight out of high school (like LeBron).",
    note: "Prep-to-pro picks, any era.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Kobe Bryant|kobe","Kevin Garnett|kg","Tracy McGrady|t-mac"],
      bandwagon: ["Dwight Howard|dwight","Amar'e Stoudemire|amare stoudemire|stat","Moses Malone","Jermaine O'Neal","Tyson Chandler","Andrew Bynum","J.R. Smith|jr smith","Josh Smith","Monta Ellis","Rashard Lewis","Kendrick Perkins"],
      starter: ["Al Jefferson","Eddy Curry","Kwame Brown","Darius Miles","Shaun Livingston","Sebastian Telfair","Lou Williams|sweet lou","Gerald Green","Martell Webster","DeSagana Diop","Amir Johnson","C.J. Miles|cj miles","Andray Blatche","Darryl Dawkins","Bill Willoughby"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "dream-team", cat: "culture", diff: "easy",
    prompt: "Name a member of the 1992 Dream Team.",
    note: "Team USA's 12-man roster at the 1992 Olympics.",
    tiers: {
      chalk: ["Michael Jordan|mj","Magic Johnson","Larry Bird"],
      bandwagon: ["Scottie Pippen|pippen","Charles Barkley|barkley","Karl Malone|the mailman","Patrick Ewing|ewing"],
      starter: ["John Stockton|stockton","David Robinson|the admiral","Clyde Drexler|drexler"],
      film: ["Chris Mullin|mullin"],
      deep: ["Christian Laettner|laettner"],
      hail: []
    }
  },
  {
    id: "redeem-team", cat: "culture", diff: "easy",
    prompt: "Name a member of the 2008 \"Redeem Team.\"",
    note: "Team USA's 12-man roster at the 2008 Olympics.",
    tiers: {
      chalk: ["Kobe Bryant|kobe","LeBron James|lebron|king james","Dwyane Wade|d-wade|dwade"],
      bandwagon: ["Carmelo Anthony|melo","Chris Paul|cp3","Dwight Howard|dwight","Chris Bosh|bosh"],
      starter: ["Jason Kidd|kidd","Deron Williams|d-will","Carlos Boozer|boozer"],
      film: ["Tayshaun Prince|tayshaun"],
      deep: ["Michael Redd|redd"],
      hail: []
    }
  },
  {
    id: "usa-2024", cat: "culture", diff: "easy",
    prompt: "Name a player on Team USA's 2024 Olympic gold-medal team.",
    note: "Team USA's 12-man roster at the 2024 Olympics.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Stephen Curry|steph curry|steph","Kevin Durant|kd"],
      bandwagon: ["Joel Embiid|embiid","Jayson Tatum|tatum","Anthony Edwards|ant|ant-man","Anthony Davis|ad","Devin Booker|book"],
      starter: ["Jrue Holiday|jrue","Tyrese Haliburton|haliburton","Bam Adebayo|bam"],
      film: ["Derrick White"],
      deep: [],
      hail: []
    }
  },
  {
    id: "dunk-champs", cat: "culture", diff: "easy",
    prompt: "Name a Slam Dunk Contest winner.",
    note: "NBA All-Star Weekend winners, any year through 2025.",
    tiers: {
      chalk: ["Michael Jordan|mj","Vince Carter|vinsanity","Zach LaVine|lavine"],
      bandwagon: ["Dominique Wilkins|nique","Kobe Bryant|kobe","Blake Griffin|blake","Dwight Howard|dwight","Nate Robinson|kryptonate","Spud Webb|spud","Mac McClung|mcclung","Donovan Mitchell|spida"],
      starter: ["Jason Richardson|j-rich","Derrick Jones Jr.|airplane mode|derrick jones","Obi Toppin|toppin","Gerald Green","Josh Smith","John Wall","Terrence Ross","Isaiah Rider|j.r. rider","Harold Miner|baby jordan","Dee Brown","Larry Nance"],
      film: ["Kenny Walker|sky walker","Cedric Ceballos","Brent Barry","Desmond Mason","Fred Jones","Jeremy Evans","Glenn Robinson III","Hamidou Diallo","Anfernee Simons"],
      deep: [],
      hail: []
    }
  },
  {
    id: "three-champs", cat: "culture", diff: "easy",
    prompt: "Name a 3-Point Contest winner.",
    note: "NBA All-Star Weekend winners, any year through 2025.",
    tiers: {
      chalk: ["Stephen Curry|steph curry|steph","Larry Bird","Klay Thompson|klay"],
      bandwagon: ["Damian Lillard|dame|dame time","Ray Allen","Dirk Nowitzki|dirk","Kyrie Irving|kyrie","Devin Booker|book","Karl-Anthony Towns|kat","Paul Pierce","Kevin Love|k-love","Steve Kerr|kerr","Tyler Herro|herro"],
      starter: ["Peja Stojakovic|peja","Craig Hodges","Mark Price","Glen Rice","Jeff Hornacek","Eric Gordon","Buddy Hield|buddy","Joe Harris","Marco Belinelli","James Jones","Jason Kapono","Dale Ellis"],
      film: ["Tim Legler","Voshon Lenard","Quentin Richardson","Daequan Cook"],
      deep: [],
      hail: []
    }
  },
  {
    id: "nicknames", cat: "culture", diff: "easy",
    prompt: "Name a famous NBA nickname.",
    note: "Answer with the nickname itself.",
    tiers: {
      chalk: ["King James|the king","Black Mamba|mamba","Greek Freak","The Mailman|mailman"],
      bandwagon: ["Air Jordan|his airness","Shaq Diesel|the big aristotle|diesel","The Answer","The Dream","The Admiral","Big Fundamental","The Joker","Chef Curry|baby faced assassin","Slim Reaper","Dame Time","Uncle Drew","The Beard","Magic","Dr. J|doctor j","The Glove","Sir Charles|round mound of rebound","Pistol Pete","The Worm","Big Ticket","Spida","Ant-Man|ant man","Wemby|alien"],
      starter: ["The Truth","Agent Zero","Vinsanity|half man half amazing","Penny","Zo","Mutombo|mount mutombo","Big O|the big o","Iceman","Clyde|clyde the glide","Sweet Lou","Process|the process","Brodie","Hoodie Melo","Air Canada","Point God","Splash Brothers","Big Shot Rob","Big Shot Bob","Microwave","Chocolate Thunder","White Chocolate","Mr. Big Shot","The Logo"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "movie-hoopers", cat: "culture", diff: "easy",
    prompt: "Name an NBA player who acted in a movie (like LeBron in Space Jam).",
    note: "Real NBA players in real movie roles or cameos.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Michael Jordan|mj","Shaquille O'Neal|shaq"],
      bandwagon: ["Kareem Abdul-Jabbar|kareem","Ray Allen","Kevin Garnett|kg","Kyrie Irving|kyrie","Anthony Edwards|ant|ant-man","Charles Barkley|barkley","Larry Bird"],
      starter: ["Dennis Rodman|the worm","Wilt Chamberlain|wilt","Julius Erving|dr j","Rick Fox","Patrick Ewing|ewing","Muggsy Bogues|muggsy","Larry Johnson|grandmama","Shawn Bradley","Anthony Davis|ad","Damian Lillard|dame","Klay Thompson|klay","Juancho Hernangomez|juancho","Chris Webber|c-webb","Penny Hardaway|penny"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "arenas", cat: "venues", diff: "easy",
    prompt: "Name a current NBA arena.",
    note: "2025-26 arena names.",
    tiers: {
      chalk: ["Madison Square Garden|msg|the garden","Crypto.com Arena|crypto|crypto arena|staples center","Chase Center|chase","TD Garden|td garden"],
      bandwagon: ["United Center","Kaseya Center|kaseya","Barclays Center|barclays","Ball Arena","American Airlines Center|aac","Wells Fargo Center|xfinity mobile arena","Intuit Dome|intuit","Paycom Center|paycom","Mortgage Matchup Center|footprint center|footprint","Frost Bank Center|frost bank"],
      starter: ["Toyota Center","Golden 1 Center|golden 1","Moda Center|moda","Delta Center","Scotiabank Arena|scotiabank","Fiserv Forum|fiserv","Target Center","Smoothie King Center|smoothie king","FedExForum|fedex forum","Spectrum Center","State Farm Arena","Little Caesars Arena|little caesars","Rocket Arena|rocket mortgage fieldhouse","Gainbridge Fieldhouse|gainbridge","Kia Center|kia","Capital One Arena|capital one"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "pts-25k", cat: "records", diff: "easy",
    prompt: "Name a player with 25,000 or more career points (like LeBron).",
    note: "Through the 2024-25 season.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Kareem Abdul-Jabbar|kareem","Michael Jordan|mj","Kobe Bryant|kobe"],
      bandwagon: ["Karl Malone|the mailman","Dirk Nowitzki|dirk","Wilt Chamberlain|wilt","Kevin Durant|kd","Shaquille O'Neal|shaq","Carmelo Anthony|melo","James Harden|harden","Stephen Curry|steph curry|steph","Tim Duncan","Russell Westbrook|westbrook|russ"],
      starter: ["Moses Malone","Elvin Hayes","Hakeem Olajuwon|hakeem|the dream","Oscar Robertson|the big o","Dominique Wilkins|nique","Paul Pierce","John Havlicek","Kevin Garnett|kg","Vince Carter|vinsanity","Alex English","Reggie Miller","Jerry West"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-2", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NBA player who wore No. 2.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Kawhi Leonard|kawhi","Shai Gilgeous-Alexander|sga|shai"],
      bandwagon: ["Kyrie Irving|kyrie","John Wall","Moses Malone"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-13", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NBA player who wore No. 13.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Wilt Chamberlain|wilt","Steve Nash|nash","James Harden|harden"],
      bandwagon: ["Paul George|pg13","Bam Adebayo|bam"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "finals-losers", cat: "finals", diff: "easy",
    prompt: "Name a team that lost the NBA Finals since 2000.",
    note: "Runner-up in the 2000 through 2025 Finals.",
    tiers: {
      chalk: ["Cleveland Cavaliers|cavaliers|cavs|cleveland","Miami Heat|heat|miami","Golden State Warriors|warriors|golden state|dubs"],
      bandwagon: ["Boston Celtics|celtics|boston","Los Angeles Lakers|lakers|la lakers","Dallas Mavericks|mavericks|mavs|dallas","Brooklyn Nets|nets|brooklyn|new jersey nets","Oklahoma City Thunder|thunder|okc|oklahoma city","San Antonio Spurs|spurs|san antonio","Phoenix Suns|suns|phoenix"],
      starter: ["Indiana Pacers|pacers|indiana","Philadelphia 76ers|76ers|sixers|philadelphia|philly","Detroit Pistons|pistons|detroit","Orlando Magic|magic|orlando"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "atl-central", cat: "franchise", diff: "easy",
    prompt: "Name a team in the Atlantic or Central Division.",
    note: "Current divisions.",
    tiers: {
      chalk: ["Boston Celtics|celtics|boston","New York Knicks|knicks|new york","Chicago Bulls|bulls|chicago"],
      bandwagon: ["Philadelphia 76ers|76ers|sixers|philadelphia|philly","Brooklyn Nets|nets|brooklyn|new jersey nets","Milwaukee Bucks|bucks|milwaukee","Cleveland Cavaliers|cavaliers|cavs|cleveland"],
      starter: ["Toronto Raptors|raptors|toronto","Detroit Pistons|pistons|detroit","Indiana Pacers|pacers|indiana"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "se-sw", cat: "franchise", diff: "easy",
    prompt: "Name a team in the Southeast or Southwest Division.",
    note: "Current divisions.",
    tiers: {
      chalk: ["Miami Heat|heat|miami","San Antonio Spurs|spurs|san antonio","Dallas Mavericks|mavericks|mavs|dallas"],
      bandwagon: ["Houston Rockets|rockets|houston","Orlando Magic|magic|orlando","Atlanta Hawks|hawks|atlanta"],
      starter: ["Memphis Grizzlies|grizzlies|memphis|grizz","New Orleans Pelicans|pelicans|new orleans|pels","Washington Wizards|wizards|washington|bullets|washington bullets","Charlotte Hornets|hornets|charlotte|bobcats|charlotte bobcats"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "nw-pac", cat: "franchise", diff: "easy",
    prompt: "Name a team in the Northwest or Pacific Division.",
    note: "Current divisions.",
    tiers: {
      chalk: ["Los Angeles Lakers|lakers|la lakers","Golden State Warriors|warriors|golden state|dubs","Denver Nuggets|nuggets|denver"],
      bandwagon: ["Phoenix Suns|suns|phoenix","Los Angeles Clippers|clippers|la clippers|clips","Oklahoma City Thunder|thunder|okc|oklahoma city"],
      starter: ["Minnesota Timberwolves|timberwolves|wolves|minnesota|t-wolves","Utah Jazz|jazz|utah","Portland Trail Blazers|trail blazers|blazers|portland","Sacramento Kings|kings|sacramento"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "expansion", cat: "franchise", diff: "easy",
    prompt: "Name an NBA expansion team added since 1980.",
    note: "Teams that joined the league in 1980 or later.",
    tiers: {
      chalk: ["Miami Heat|heat|miami","Dallas Mavericks|mavericks|mavs|dallas"],
      bandwagon: ["Orlando Magic|magic|orlando","Toronto Raptors|raptors|toronto","Minnesota Timberwolves|timberwolves|wolves|minnesota|t-wolves"],
      starter: ["Charlotte Hornets|hornets|charlotte|bobcats|charlotte bobcats","Memphis Grizzlies|grizzlies|memphis|grizz"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "title-coaches", cat: "coaches", diff: "easy",
    prompt: "Name a head coach who won an NBA championship (like Phil Jackson).",
    note: "Any year through 2025.",
    tiers: {
      chalk: ["Phil Jackson|zen master","Gregg Popovich|pop","Pat Riley","Steve Kerr|kerr"],
      bandwagon: ["Red Auerbach","Erik Spoelstra|spo","Doc Rivers","Tyronn Lue|ty lue","Nick Nurse","Rick Carlisle","Chuck Daly","Larry Brown","Rudy Tomjanovich|rudy t","Joe Mazzulla|mazzulla","Michael Malone","Mike Budenholzer|bud","Frank Vogel"],
      starter: ["Mark Daigneault","K.C. Jones|kc jones","Bill Russell","Tom Heinsohn","Red Holzman","Bill Fitch","Lenny Wilkens","Al Attles","Jack Ramsay","Dick Motta","Billy Cunningham","Alex Hannum","Bill Sharman","John Kundla"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "player-coaches", cat: "coaches", diff: "easy",
    prompt: "Name an NBA player who later became an NBA head coach (like Steve Kerr).",
    note: "Played in the NBA, then was a head coach.",
    tiers: {
      chalk: ["Steve Kerr|kerr","Doc Rivers","Jason Kidd|kidd"],
      bandwagon: ["Tyronn Lue|ty lue","Steve Nash|nash","Larry Bird","Isiah Thomas","Kevin McHale|mchale","Derek Fisher|fisher","Mark Jackson","Monty Williams","Pat Riley","Phil Jackson|zen master","Bill Russell"],
      starter: ["Avery Johnson","Lenny Wilkens","Jerry Sloan","Rick Carlisle","Mike D'Antoni|dantoni","Byron Scott","Magic Johnson","Willis Reed","Wes Unseld","Jerry West","Paul Westphal","Kurt Rambis","Sam Mitchell","Nate McMillan","Terry Porter","Maurice Cheeks|mo cheeks","J.J. Redick|jj redick","Chauncey Billups|mr. big shot","Darvin Ham"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "tv-analysts", cat: "culture", diff: "easy",
    prompt: "Name a former NBA player who works (or worked) as a TV analyst (like Charles Barkley).",
    note: "National studio shows and game broadcasts.",
    tiers: {
      chalk: ["Charles Barkley|barkley","Shaquille O'Neal|shaq","Kenny Smith|the jet"],
      bandwagon: ["Reggie Miller","Grant Hill","Chris Webber|c-webb","Jalen Rose","Kendrick Perkins|perk","Magic Johnson","Kevin Garnett|kg","Paul Pierce","Vince Carter|vinsanity","Jamal Crawford|crawford","Draymond Green|draymond","Dwyane Wade|d-wade|dwade","Tracy McGrady|t-mac","J.J. Redick|jj redick"],
      starter: ["Richard Jefferson","Stephen Jackson|jack","Steve Kerr|kerr","Isiah Thomas","Steve Smith","Robert Horry|big shot rob","Brendan Haywood","Udonis Haslem","Chauncey Billups|mr. big shot","Kevin McHale|mchale","Bill Walton","Doug Collins","Mark Jackson","Brian Scalabrine|scal","Austin Rivers","Matt Barnes"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "fifty-forty-ninety", cat: "records", diff: "easy",
    prompt: "Name a member of the 50-40-90 club (like Steph Curry).",
    note: "A full season shooting 50% FG, 40% from three and 90% FT.",
    tiers: {
      chalk: ["Stephen Curry|steph curry|steph","Kevin Durant|kd","Larry Bird"],
      bandwagon: ["Steve Nash|nash","Dirk Nowitzki|dirk","Kyrie Irving|kyrie"],
      starter: ["Reggie Miller","Mark Price"],
      film: ["Malcolm Brogdon|brogdon"],
      deep: [],
      hail: []
    }
  },
  {
    id: "seventy-points", cat: "records", diff: "easy",
    prompt: "Name a player who scored 70 or more points in a game (like Kobe).",
    note: "Through the 2024-25 season.",
    tiers: {
      chalk: ["Kobe Bryant|kobe","Wilt Chamberlain|wilt"],
      bandwagon: ["Devin Booker|book","Damian Lillard|dame|dame time","Joel Embiid|embiid","Donovan Mitchell|spida"],
      starter: ["David Robinson|the admiral","David Thompson","Elgin Baylor"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "scoring-champs", cat: "awards", diff: "easy",
    prompt: "Name an NBA scoring champion since 2000.",
    note: "The league's points-per-game leader, 2000 through 2025.",
    tiers: {
      chalk: ["Kobe Bryant|kobe","Kevin Durant|kd","Stephen Curry|steph curry|steph","James Harden|harden"],
      bandwagon: ["Allen Iverson|iverson|ai","Shai Gilgeous-Alexander|sga|shai","Luka Doncic|luka","Joel Embiid|embiid","Russell Westbrook|westbrook|russ","Carmelo Anthony|melo"],
      starter: ["Tracy McGrady|t-mac","Dwyane Wade|d-wade|dwade","Shaquille O'Neal|shaq","LeBron James|lebron|king james"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "canadians", cat: "players", diff: "easy",
    prompt: "Name an NBA player from Canada (like SGA).",
    note: "Born or raised in Canada.",
    tiers: {
      chalk: ["Shai Gilgeous-Alexander|sga|shai","Steve Nash|nash","Jamal Murray|murray"],
      bandwagon: ["Andrew Wiggins|wiggins","RJ Barrett|rj","Dillon Brooks","Tristan Thompson","Kelly Olynyk|olynyk","Luguentz Dort|lu dort|dort","Bennedict Mathurin|mathurin","Shaedon Sharpe","Andrew Nembhard","Zach Edey|edey","Nickeil Alexander-Walker|naw"],
      starter: ["Cory Joseph","Dwight Powell","Chris Boucher","Trey Lyles","Khem Birch","Anthony Bennett","Rick Fox","Jamaal Magloire","Bill Wennington","Joel Anthony","Samuel Dalembert","Nik Stauskas","Tyler Ennis","Oshae Brissett","Dalano Banton","Olivier-Maxence Prosper","Leonard Miller","Todd MacCulloch","Kyle Wiltjer","Ryan Nembhard"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "french", cat: "players", diff: "easy",
    prompt: "Name an NBA player from France (like Wemby).",
    note: "French players, any era.",
    tiers: {
      chalk: ["Victor Wembanyama|wemby|wembanyama","Rudy Gobert|gobert","Tony Parker"],
      bandwagon: ["Boris Diaw","Nicolas Batum|batum","Evan Fournier|fournier","Zaccharie Risacher|risacher","Alex Sarr|sarr","Bilal Coulibaly|coulibaly","Joakim Noah"],
      starter: ["Frank Ntilikina","Ian Mahinmi","Mickael Pietrus","Ronny Turiaf","Nando De Colo","Timothe Luwawu-Cabarrot|tlc","Killian Hayes","Guerschon Yabusele|yabusele","Theo Maledon","Tidjane Salaun","Moussa Diabate","Johan Petro","Alexis Ajinca","Sekou Doumbouya","Axel Toupane","Joel Ayayi"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "german", cat: "players", diff: "easy",
    prompt: "Name an NBA player from Germany (like Dirk).",
    note: "German players, any era.",
    tiers: {
      chalk: ["Dirk Nowitzki|dirk","Dennis Schroder|schroder|schroeder","Franz Wagner"],
      bandwagon: ["Moritz Wagner|moe wagner","Detlef Schrempf","Daniel Theis","Maxi Kleber|kleber"],
      starter: ["Isaac Bonga","Paul Zipser","Tristan da Silva","Uwe Blab","Christian Welp","Ariel Hukporti"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "mascots", cat: "culture", diff: "easy",
    prompt: "Name an NBA mascot.",
    note: "Current team mascots.",
    tiers: {
      chalk: ["Benny the Bull|benny","Rocky|rocky the mountain lion","Go the Gorilla|gorilla"],
      bandwagon: ["Hugo|hugo the hornet","Clutch|clutch the bear","Burnie","The Coyote|coyote","Harry the Hawk|harry","Bango","Lucky|lucky the leprechaun","Rumble|rumble the bison","Jazz Bear","The Raptor|raptor"],
      starter: ["Stuff|stuff the magic dragon","Grizz","Boomer","Crunch|crunch the wolf","Moondog","Hooper","Slamson","Pierre the Pelican|pierre","Franklin|franklin the dog","G-Wiz|g wiz","Champ","Blaze|blaze the trail cat","Chuck the Condor|chuck"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "kentucky", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at Kentucky.",
    note: "Played college ball for the Wildcats.",
    tiers: {
      chalk: ["Anthony Davis|ad","Devin Booker|book","Karl-Anthony Towns|kat","Shai Gilgeous-Alexander|sga|shai"],
      bandwagon: ["Bam Adebayo|bam","De'Aaron Fox|fox|swipa","John Wall","Jamal Murray|murray","Tyler Herro|herro","Julius Randle|randle","DeMarcus Cousins|boogie","Rajon Rondo|rondo","Tyrese Maxey|maxey","Immanuel Quickley|iq"],
      starter: ["Eric Bledsoe","Tayshaun Prince|tayshaun","Jamal Mashburn|monster mash","Antoine Walker","Brandon Knight","Michael Kidd-Gilchrist|mkg","Terrence Jones","Willie Cauley-Stein","Trey Lyles","Keldon Johnson","PJ Washington|p.j. washington","Kevin Knox","Nick Richards","Isaiah Jackson","Rob Dillingham","Reed Sheppard","Cason Wallace","Tony Delk","Nazr Mohammed","Darius Miller","Doron Lamb","Marquis Teague","Pat Riley"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "duke", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at Duke.",
    note: "Played college ball for the Blue Devils.",
    tiers: {
      chalk: ["Kyrie Irving|kyrie","Zion Williamson|zion","Jayson Tatum|tatum","Cooper Flagg|flagg"],
      bandwagon: ["Paolo Banchero|paolo","Grant Hill","Brandon Ingram|bi","RJ Barrett|rj","Christian Laettner|laettner","Elton Brand","JJ Redick|j.j. redick","Shane Battier|battier","Carlos Boozer|boozer","Luol Deng","Jabari Parker","Marvin Bagley|bagley","Wendell Carter Jr.|wendell carter","Jalen Johnson","Dereck Lively|lively","Tyus Jones","Mason Plumlee","Seth Curry"],
      starter: ["Corey Maggette","Mike Dunleavy","Chris Duhon","Jay Williams","Kyle Singler","Austin Rivers","Justise Winslow","Jahlil Okafor","Cam Reddish","Gary Trent Jr.|gary trent","Grayson Allen","Harry Giles","Frank Jackson","Tre Jones","Vernon Carey Jr.","Mark Williams","AJ Griffin","Wendell Moore","Trevor Keels","Dariq Whitehead","Kyle Filipowski","Jared McCain","Kon Knueppel","Khaman Maluach","Quinn Cook","Bobby Hurley","Danny Ferry","Johnny Dawkins","Trajan Langdon","Cherokee Parks"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "unc", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at North Carolina.",
    note: "Played college ball for the Tar Heels.",
    tiers: {
      chalk: ["Michael Jordan|mj","Vince Carter|vinsanity","James Worthy"],
      bandwagon: ["Rasheed Wallace|sheed","Antawn Jamison","Harrison Barnes","Danny Green","Coby White","Cole Anthony","Ty Lawson","Raymond Felton","Kenny Smith|the jet","Sam Perkins","Brad Daugherty","Jerry Stackhouse","Bob McAdoo"],
      starter: ["Tyler Hansbrough|psycho t","Marvin Williams","Wayne Ellington","Sean May","Rashad McCants","Brandan Wright","Ed Davis","John Henson","Tyler Zeller","Kendall Marshall","Justin Jackson","Theo Pinson","Tony Bradley","Brice Johnson","Nassir Little","Day'Ron Sharpe","Brendan Haywood","Joseph Forte","Eric Montross","Rick Fox","Hubert Davis","J.R. Reid","Walter Davis","Phil Ford","Billy Cunningham","Bobby Jones","Mitch Kupchak"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "nba-sons", cat: "players", diff: "easy", strictJr: true,
    prompt: "Name an NBA player whose father also played in the NBA (like Steph Curry).",
    note: "Dad played at least one NBA game.",
    tiers: {
      chalk: ["Stephen Curry|steph curry|steph","Klay Thompson|klay","Kobe Bryant|kobe","Bronny James|bronny"],
      bandwagon: ["Seth Curry","Jalen Brunson|brunson","Kevin Love","Domantas Sabonis|sabonis","Andrew Wiggins|wiggins","Devin Booker|booker"],
      starter: ["Gary Payton II|gary payton 2|gp2","Tim Hardaway Jr.|tim hardaway jr|hardaway jr","Austin Rivers","Larry Nance Jr.|larry nance jr|nance jr","Jaren Jackson Jr.|jaren jackson jr|jjj","Al Horford|horford","Luke Walton"],
      film: ["Gary Trent Jr.|gary trent jr","Cole Anthony","Scotty Pippen Jr.|scotty pippen jr|pippen jr","Mike Dunleavy Jr.|mike dunleavy jr|dunleavy jr","Brent Barry","Jon Barry","Kenyon Martin Jr.|kenyon martin jr|kj martin"],
      deep: ["Drew Barry","Danny Manning","Jabari Parker","Glenn Robinson III","Patrick Ewing Jr.|patrick ewing jr","Danny Schayes"],
      hail: []
    }
  },
  {
    id: "pg-mvp", cat: "awards", diff: "easy",
    prompt: "Name a guard who has won NBA MVP.",
    note: "Regular-season MVP, any year through 2025.",
    tiers: {
      chalk: ["Stephen Curry|steph curry|steph","Michael Jordan|mj","Magic Johnson"],
      bandwagon: ["Kobe Bryant|kobe","Shai Gilgeous-Alexander|sga|shai","Russell Westbrook|westbrook|russ","James Harden|harden"],
      starter: ["Derrick Rose|d rose","Steve Nash|nash","Allen Iverson|iverson|ai"],
      film: ["Oscar Robertson|the big o"],
      deep: ["Bob Cousy|cousy"],
      hail: []
    }
  },
  {
    id: "big-mvp", cat: "awards", diff: "easy",
    prompt: "Name a center who has won NBA MVP.",
    note: "Regular-season MVP, any year through 2025.",
    tiers: {
      chalk: ["Shaquille O'Neal|shaq","Nikola Jokic|jokic|joker"],
      bandwagon: ["Kareem Abdul-Jabbar|kareem|lew alcindor","Joel Embiid|embiid","Hakeem Olajuwon|hakeem|the dream","Wilt Chamberlain|wilt"],
      starter: ["Bill Russell|russell","David Robinson|the admiral","Moses Malone"],
      film: ["Bill Walton|walton","Willis Reed"],
      deep: ["Dave Cowens|cowens","Wes Unseld|unseld"],
      hail: []
    }
  },
  {
    id: "pts-30k", cat: "records", diff: "easy",
    prompt: "Name a player with 30,000 or more career points.",
    note: "Regular season, through the 2024-25 season.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Michael Jordan|mj","Kobe Bryant|kobe"],
      bandwagon: ["Kareem Abdul-Jabbar|kareem"],
      starter: ["Karl Malone|the mailman","Dirk Nowitzki|dirk","Kevin Durant|kd"],
      film: ["Wilt Chamberlain|wilt"],
      deep: [],
      hail: []
    }
  },
  {
    id: "kansas", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at Kansas (like Joel Embiid).",
    note: "Played college ball for the Jayhawks.",
    tiers: {
      chalk: ["Joel Embiid|embiid","Paul Pierce|pierce","Wilt Chamberlain|wilt"],
      bandwagon: ["Andrew Wiggins|wiggins","Kelly Oubre Jr.|kelly oubre|oubre","Christian Braun","Mario Chalmers|chalmers"],
      starter: ["Kirk Hinrich|hinrich","Markieff Morris","Marcus Morris","Danny Manning","Josh Jackson","Devonte' Graham|devonte graham","Ochai Agbaji|agbaji"],
      film: ["Ben McLemore|mclemore","Nick Collison|collison","Drew Gooden","Thomas Robinson","Svi Mykhailiuk|svi","Gradey Dick","Jalen Wilson","Raef LaFrentz|lafrentz","Jo Jo White"],
      deep: ["Brandon Rush","Darrell Arthur","Cole Aldrich","Jacque Vaughn","Scot Pollard","Greg Ostertag|ostertag","Frank Mason","Udoka Azubuike","Julian Wright","Xavier Henry","Jeff Withey","Cheick Diallo","Kevin McCullar"],
      hail: []
    }
  },
  {
    id: "ucla", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at UCLA (like Russell Westbrook).",
    note: "Played college ball for the Bruins.",
    tiers: {
      chalk: ["Russell Westbrook|westbrook|russ","Kareem Abdul-Jabbar|kareem|lew alcindor","Reggie Miller"],
      bandwagon: ["Kevin Love","Bill Walton|walton","Zach LaVine|lavine","Lonzo Ball|lonzo","Jrue Holiday"],
      starter: ["Baron Davis","Trevor Ariza|ariza","Norman Powell","Jaime Jaquez Jr.|jaime jaquez|jaquez","Kyle Anderson|slo mo","Kevon Looney|looney","Darren Collison","Arron Afflalo|afflalo","Jordan Farmar|farmar","Gail Goodrich"],
      film: ["Matt Barnes","Aaron Holiday","Jamaal Wilkes","Marques Johnson","Luc Mbah a Moute","Ed O'Bannon","Earl Watson","Jason Kapono","Shabazz Muhammad","Sidney Wicks"],
      deep: ["T.J. Leaf|tj leaf","Moses Brown","Tyus Edney","Don MacLean","Dan Gadzuric","Jaylen Clark","Amari Bailey","Adem Bona","Walt Hazzard","Keith Erickson"],
      hail: []
    }
  },
  {
    id: "intl-mvp", cat: "awards", diff: "easy",
    prompt: "Name an MVP who was born outside the United States.",
    note: "Regular-season MVP, through 2025.",
    tiers: {
      chalk: ["Giannis Antetokounmpo|giannis|greek freak","Nikola Jokic|jokic|joker"],
      bandwagon: ["Dirk Nowitzki|dirk","Joel Embiid|embiid","Shai Gilgeous-Alexander|sga|shai"],
      starter: ["Steve Nash|nash","Hakeem Olajuwon|hakeem|the dream"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "five-rings", cat: "records", diff: "easy",
    prompt: "Name a player who won five or more NBA titles (like Michael Jordan).",
    note: "Championships as a player.",
    tiers: {
      chalk: ["Michael Jordan|mj","Kobe Bryant|kobe","Bill Russell|russell"],
      bandwagon: ["Scottie Pippen|pippen","Kareem Abdul-Jabbar|kareem","Tim Duncan","Magic Johnson","Robert Horry|big shot rob|horry"],
      starter: ["Dennis Rodman|rodman","Derek Fisher|fisher","Steve Kerr|kerr","John Havlicek|havlicek","Bob Cousy|cousy","Sam Jones","George Mikan|mikan"],
      film: ["Ron Harper","Michael Cooper","Tom Heinsohn|heinsohn","K.C. Jones|kc jones","Satch Sanders"],
      deep: ["Frank Ramsey","Jim Loscutoff","Don Nelson","Larry Siegfried","Jim Pollard"],
      hail: []
    }
  },
  {
    id: "cover-2k", cat: "culture", diff: "easy",
    prompt: "Name an NBA player who has been on the cover of NBA 2K.",
    note: "Any edition, including special editions.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Kobe Bryant|kobe","Michael Jordan|mj","Stephen Curry|steph curry|steph"],
      bandwagon: ["Kevin Durant|kd","Allen Iverson|iverson|ai","Shaquille O'Neal|shaq","Luka Doncic|luka","Giannis Antetokounmpo|giannis|greek freak","Jayson Tatum|tatum","Zion Williamson|zion"],
      starter: ["Anthony Davis|ad|the brow","James Harden|harden","Kyrie Irving|kyrie","Damian Lillard|dame|lillard","Devin Booker|booker","Shai Gilgeous-Alexander|sga|shai","Derrick Rose|d rose","Blake Griffin"],
      film: ["Chris Paul|cp3","Kevin Garnett|kg","Paul George|pg13","Dwyane Wade|d-wade|dwade","Magic Johnson","Larry Bird","Dirk Nowitzki|dirk","Kareem Abdul-Jabbar|kareem","Vince Carter|vinsanity"],
      deep: ["Ben Wallace","DeMar DeRozan|derozan","Carmelo Anthony|melo"],
      hail: []
    }
  },
  {
    id: "no2-picks", cat: "draft", diff: "easy",
    prompt: "Name a No. 2 overall pick since 2000 (like Kevin Durant).",
    note: "The second pick of every draft from 2000 to 2025.",
    tiers: {
      chalk: ["Kevin Durant|kd","Ja Morant|ja"],
      bandwagon: ["Lonzo Ball|lonzo","Brandon Ingram|ingram","Chet Holmgren|chet","LaMarcus Aldridge|aldridge","D'Angelo Russell|dangelo russell|d-lo","Darko Milicic|darko"],
      starter: ["Jalen Green","Brandon Miller","Victor Oladipo|oladipo","Michael Kidd-Gilchrist|mkg","Tyson Chandler","Jabari Parker","Michael Beasley|beasley","Hasheem Thabeet|thabeet","Evan Turner","Marvin Bagley|bagley","James Wiseman|wiseman","Alexandre Sarr|alex sarr|sarr","Dylan Harper"],
      film: ["Emeka Okafor|okafor","Marvin Williams","Derrick Williams","Jay Williams"],
      deep: ["Stromile Swift"],
      hail: []
    }
  },
  {
    id: "roy-00s", cat: "awards", diff: "easy",
    prompt: "Name a Rookie of the Year from 2000 to 2009.",
    note: "The 2000 through 2009 winners (2000 was shared).",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Kevin Durant|kd"],
      bandwagon: ["Chris Paul|cp3","Derrick Rose|d rose","Pau Gasol|pau"],
      starter: ["Amar'e Stoudemire|amare|stat","Brandon Roy|b-roy","Elton Brand"],
      film: ["Emeka Okafor|okafor","Steve Francis|stevie franchise"],
      deep: ["Mike Miller"],
      hail: []
    }
  },
  {
    id: "asg-mvp", cat: "awards", diff: "easy",
    prompt: "Name an All-Star Game MVP.",
    note: "Any year through 2025 (shared awards count).",
    tiers: {
      chalk: ["Kobe Bryant|kobe","LeBron James|lebron|king james","Michael Jordan|mj","Stephen Curry|steph curry|steph"],
      bandwagon: ["Kevin Durant|kd","Shaquille O'Neal|shaq","Allen Iverson|iverson|ai","Russell Westbrook|westbrook|russ","Magic Johnson","Kawhi Leonard|kawhi","Giannis Antetokounmpo|giannis|greek freak"],
      starter: ["Kevin Garnett|kg","Tim Duncan","Dwyane Wade|d-wade|dwade","Chris Paul|cp3","Kyrie Irving|kyrie","Anthony Davis|ad|the brow","Jayson Tatum|tatum","Damian Lillard|dame|lillard","Karl Malone|the mailman","Larry Bird","Isiah Thomas"],
      film: ["Charles Barkley|sir charles","Scottie Pippen|pippen","John Stockton|stockton","Julius Erving|dr j","Mitch Richmond","Glen Rice","Wilt Chamberlain|wilt","Oscar Robertson|the big o","Jerry West"],
      deep: ["Tom Chambers","Ralph Sampson","George Gervin|iceman","Nate Archibald|tiny archibald","Bob Cousy","Bob Pettit","Elgin Baylor","Dave Bing","Rick Barry","Walt Frazier|clyde"],
      hail: ["Lenny Wilkens","Bill Russell","Paul Arizin","Ed Macauley","Bill Sharman","Hal Greer","Jerry Lucas","Willis Reed","Adrian Smith","Randy Smith"]
    }
  },
  {
    id: "coach-lebron", cat: "coaches", diff: "easy",
    prompt: "Name a head coach who coached LeBron James (like Erik Spoelstra).",
    note: "Head coaches (interims count) in any of his NBA seasons.",
    tiers: {
      chalk: ["Erik Spoelstra|spo|spoelstra"],
      bandwagon: ["Tyronn Lue|ty lue|lue","Frank Vogel|vogel","JJ Redick|redick","Mike Brown"],
      starter: ["David Blatt|blatt","Luke Walton|walton","Darvin Ham"],
      film: ["Paul Silas|silas"],
      deep: [],
      hail: []
    }
  },
  {
    id: "coach-kobe", cat: "coaches", diff: "easy",
    prompt: "Name a head coach who coached Kobe Bryant.",
    note: "Head coaches (interims count) in any of his NBA seasons.",
    tiers: {
      chalk: ["Phil Jackson|the zen master"],
      bandwagon: ["Mike D'Antoni|dantoni","Mike Brown","Byron Scott"],
      starter: ["Rudy Tomjanovich|rudy t","Del Harris"],
      film: ["Kurt Rambis|rambis","Frank Hamblen","Bernie Bickerstaff"],
      deep: [],
      hail: []
    }
  },
  {
    id: "coach-mj", cat: "coaches", diff: "easy",
    prompt: "Name a head coach who coached Michael Jordan.",
    note: "Bulls and Wizards head coaches in his NBA seasons.",
    tiers: {
      chalk: ["Phil Jackson|the zen master"],
      bandwagon: ["Doug Collins"],
      starter: ["Kevin Loughery","Stan Albeck"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "coach-curry", cat: "coaches", diff: "easy",
    prompt: "Name a head coach who coached Stephen Curry.",
    note: "Head coaches (interims count) in any of his NBA seasons.",
    tiers: {
      chalk: ["Steve Kerr|kerr"],
      bandwagon: ["Mark Jackson"],
      starter: ["Don Nelson|nellie","Luke Walton|walton"],
      film: ["Keith Smart","Mike Brown"],
      deep: [],
      hail: []
    }
  },
  {
    id: "no3-picks", cat: "draft", diff: "easy",
    prompt: "Name a No. 3 overall pick since 2000 (like Luka Doncic).",
    note: "The third pick of every draft from 2000 to 2025.",
    tiers: {
      chalk: ["Luka Doncic|luka","Carmelo Anthony|melo","Jayson Tatum|tatum","James Harden|harden"],
      bandwagon: ["Joel Embiid|embiid","Pau Gasol|pau","Jaylen Brown","LaMelo Ball|lamelo","Bradley Beal|beal","Deron Williams|d will","Al Horford|horford"],
      starter: ["Evan Mobley|mobley","RJ Barrett","Ben Gordon","Scoot Henderson|scoot","Jabari Smith Jr.|jabari smith","Jahlil Okafor|okafor","O.J. Mayo|oj mayo","Enes Kanter|enes freedom"],
      film: ["Otto Porter Jr.|otto porter","Derrick Favors","Adam Morrison","Darius Miles","Reed Sheppard","VJ Edgecombe|edgecombe"],
      deep: ["Mike Dunleavy Jr.|mike dunleavy"],
      hail: []
    }
  },
  {
    id: "no1-80s90s", cat: "draft", diff: "easy",
    prompt: "Name a No. 1 overall pick from 1980 to 1999 (like Shaq).",
    note: "The first pick of every draft from 1980 to 1999.",
    tiers: {
      chalk: ["Shaquille O'Neal|shaq","Tim Duncan","Allen Iverson|iverson|ai","Hakeem Olajuwon|hakeem|the dream"],
      bandwagon: ["Patrick Ewing|ewing","David Robinson|the admiral","Chris Webber|c-webb","James Worthy","Larry Johnson|grandmama"],
      starter: ["Elton Brand","Glenn Robinson|big dog","Derrick Coleman","Ralph Sampson","Brad Daugherty","Danny Manning","Mark Aguirre"],
      film: ["Joe Smith","Michael Olowokandi|kandi man","Pervis Ellison"],
      deep: ["Joe Barry Carroll"],
      hail: []
    }
  },
  {
    id: "second-round-stars", cat: "draft", diff: "easy",
    prompt: "Name an All-Star who was a second-round pick (like Nikola Jokic).",
    note: "Drafted in the second round, later made an NBA All-Star team.",
    tiers: {
      chalk: ["Nikola Jokic|jokic|joker","Draymond Green|draymond"],
      bandwagon: ["Manu Ginobili|manu","Jalen Brunson|brunson","Dennis Rodman|rodman","Isaiah Thomas","Marc Gasol","Khris Middleton|middleton"],
      starter: ["Gilbert Arenas|agent zero","Paul Millsap|millsap","Carlos Boozer|boozer","Michael Redd","Rashard Lewis","Mo Williams"],
      film: ["Mark Price","Alex English","Jeff Hornacek|hornacek","Clifford Robinson"],
      deep: [],
      hail: []
    }
  },
  {
    id: "undrafted", cat: "draft", diff: "easy",
    prompt: "Name an undrafted player who made it in the NBA (like Austin Reaves).",
    note: "Went undrafted, then played in the league.",
    tiers: {
      chalk: ["Austin Reaves|reaves","Ben Wallace|big ben","Fred VanVleet|fvv"],
      bandwagon: ["Udonis Haslem|haslem","Alex Caruso|caruso","Jeremy Lin|linsanity","Bruce Bowen|bowen","Duncan Robinson"],
      starter: ["Brad Miller","Wesley Matthews","Max Strus","Gabe Vincent","Naz Reid","Luguentz Dort|lu dort|dort","Jose Calderon","Robert Covington","Seth Curry","Raja Bell","Avery Johnson","John Starks","Chris Andersen|birdman"],
      film: ["Jose Alvarado|grand theft alvarado","Dorian Finney-Smith","Royce O'Neale","Christian Wood","Kent Bazemore","Derrick Jones Jr.","Kendrick Nunn","Darrell Armstrong","Andres Nocioni"],
      deep: [],
      hail: []
    }
  },
  {
    id: "triple-double-100", cat: "records", diff: "easy",
    prompt: "Name a player with 100 or more career triple-doubles (like Russell Westbrook).",
    note: "Regular season, through the 2024-25 season.",
    tiers: {
      chalk: ["Russell Westbrook|westbrook|russ","Magic Johnson","LeBron James|lebron|king james"],
      bandwagon: ["Nikola Jokic|jokic|joker","Oscar Robertson|the big o"],
      starter: ["Jason Kidd|kidd"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "allstar-14", cat: "records", diff: "easy",
    prompt: "Name a player with 14 or more All-Star selections (like LeBron).",
    note: "Through the 2025 All-Star Game.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Kobe Bryant|kobe","Michael Jordan|mj"],
      bandwagon: ["Kareem Abdul-Jabbar|kareem","Shaquille O'Neal|shaq","Tim Duncan","Kevin Durant|kd"],
      starter: ["Kevin Garnett|kg","Dirk Nowitzki|dirk","Karl Malone|the mailman"],
      film: ["Jerry West"],
      deep: [],
      hail: []
    }
  },
  {
    id: "nba75", cat: "culture", diff: "easy",
    prompt: "Name a member of the NBA 75th Anniversary Team.",
    note: "The 76 players honored in 2021.",
    tiers: {
      chalk: ["Michael Jordan|mj","LeBron James|lebron|king james","Kobe Bryant|kobe","Magic Johnson","Larry Bird"],
      bandwagon: ["Stephen Curry|steph curry|steph","Kevin Durant|kd","Shaquille O'Neal|shaq","Tim Duncan","Kareem Abdul-Jabbar|kareem","Wilt Chamberlain|wilt","Bill Russell","Hakeem Olajuwon|hakeem|the dream","Dirk Nowitzki|dirk","Allen Iverson|iverson|ai","Dwyane Wade|d-wade|dwade","Giannis Antetokounmpo|giannis|greek freak"],
      starter: ["Charles Barkley|sir charles","Kevin Garnett|kg","Scottie Pippen|pippen","Karl Malone|the mailman","John Stockton|stockton","Patrick Ewing|ewing","David Robinson|the admiral","Paul Pierce|pierce","Ray Allen","Chris Paul|cp3","James Harden|harden","Russell Westbrook|westbrook|russ","Kawhi Leonard|kawhi","Anthony Davis|ad|the brow","Damian Lillard|dame|lillard","Carmelo Anthony|melo","Steve Nash|nash","Jason Kidd|kidd","Reggie Miller","Julius Erving|dr j","Isiah Thomas","Jerry West","Oscar Robertson|the big o","Dennis Rodman|rodman"],
      film: ["Gary Payton|the glove","Clyde Drexler|clyde the glide","Dominique Wilkins|nique","Moses Malone","Kevin McHale|mchale","Robert Parish|the chief","James Worthy","Pete Maravich|pistol pete","George Gervin|iceman","Elgin Baylor","John Havlicek|hondo","Bill Walton","Walt Frazier","Bob Cousy|cousy","Willis Reed"],
      deep: ["Earl Monroe|earl the pearl","Rick Barry","Dave Cowens","Wes Unseld","Elvin Hayes|big e","Nate Archibald|tiny archibald","Dave Bing","Sam Jones","Billy Cunningham","Dave DeBusschere","Jerry Lucas","Nate Thurmond","Lenny Wilkens","Hal Greer"],
      hail: ["George Mikan|mikan","Bob Pettit","Dolph Schayes","Paul Arizin","Bill Sharman"]
    }
  },
  {
    id: "brothers", cat: "players", diff: "easy",
    prompt: "Name an NBA player whose brother also played in the NBA (like the Currys).",
    note: "Brothers who both played at least one NBA game.",
    tiers: {
      chalk: ["Stephen Curry|steph curry|steph","Giannis Antetokounmpo|giannis|greek freak","Pau Gasol|pau","Lonzo Ball|lonzo","LaMelo Ball|lamelo"],
      bandwagon: ["Seth Curry","Marc Gasol","Brook Lopez","Robin Lopez","Jrue Holiday","Amen Thompson","Ausar Thompson","Franz Wagner","Marcus Morris","Markieff Morris","Thanasis Antetokounmpo|thanasis"],
      starter: ["Kostas Antetokounmpo","Alex Antetokounmpo","Justin Holiday","Aaron Holiday","Moritz Wagner|moe wagner","Caleb Martin","Cody Martin","Mason Plumlee","Miles Plumlee","Tyler Zeller","Cody Zeller","Jerami Grant","Jerian Grant","Horace Grant","Harvey Grant","Dominique Wilkins|nique","Gerald Wilkins","Bernard King","Albert King","Tyus Jones","Tre Jones","Jalen Williams|j dub|jdub","Cody Williams","Keegan Murray","Kris Murray"],
      film: ["Juancho Hernangomez","Willy Hernangomez","Jason Collins","Jarron Collins","Brent Barry","Jon Barry","Drew Barry","Aaron Harrison","Andrew Harrison","Marshall Plumlee","Luke Zeller","Goran Dragic|dragic","Zoran Dragic","Tyler Hansbrough","Ben Hansbrough","Dick Van Arsdale","Tom Van Arsdale"],
      deep: [],
      hail: []
    }
  },
  {
    id: "chicago", cat: "players", diff: "easy",
    prompt: "Name an NBA player from Chicago (like Derrick Rose).",
    note: "Born or raised in Chicago.",
    tiers: {
      chalk: ["Derrick Rose|d rose","Dwyane Wade|d-wade|dwade","Anthony Davis|ad|the brow"],
      bandwagon: ["Isiah Thomas","Jabari Parker","Tim Hardaway","Doc Rivers","Patrick Beverley|pat bev","Evan Turner"],
      starter: ["Jahlil Okafor|okafor","Mark Aguirre","Iman Shumpert","Ayo Dosunmu","Talen Horton-Tucker","Quentin Richardson","Juwan Howard","Antoine Walker","Shannon Brown","Sherron Collins","Marcus Liberty","Terry Cummings","Maurice Cheeks|mo cheeks","Cazzie Russell","Hersey Hawkins","Nick Anderson","Michael Finley","Corey Maggette","Bobby Simmons","Will Bynum","Cliff Alexander"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "aussies", cat: "players", diff: "easy",
    prompt: "Name an NBA player from Australia (like Ben Simmons).",
    note: "Born or raised in Australia.",
    tiers: {
      chalk: ["Ben Simmons","Josh Giddey|giddey"],
      bandwagon: ["Patty Mills","Joe Ingles|jingles","Andrew Bogut|bogut","Dyson Daniels"],
      starter: ["Matthew Dellavedova|delly","Luc Longley","Dante Exum","Aron Baynes","Josh Green","Jock Landale","Thon Maker","Matisse Thybulle|thybulle","Johnny Furphy"],
      film: ["Andrew Gaze","Chris Anstey","Shane Heal","David Andersen","Nathan Jawai","Ryan Broekhoff","Jonah Bolden","Mitch Creek","Duop Reath","Xavier Cooks","Jack White","Alex Toohey"],
      deep: [],
      hail: []
    }
  },
  {
    id: "usa-2012", cat: "culture", diff: "easy",
    prompt: "Name a player on Team USA's 2012 Olympic gold-medal team.",
    note: "Team USA's 12-man roster at the London Olympics.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Kobe Bryant|kobe","Kevin Durant|kd"],
      bandwagon: ["Carmelo Anthony|melo","Chris Paul|cp3","Russell Westbrook|westbrook|russ","James Harden|harden"],
      starter: ["Anthony Davis|ad|the brow","Kevin Love","Deron Williams|d will"],
      film: ["Tyson Chandler","Andre Iguodala|iggy"],
      deep: [],
      hail: []
    }
  },
  {
    id: "usa-2016", cat: "culture", diff: "easy",
    prompt: "Name a player on Team USA's 2016 Olympic gold-medal team.",
    note: "Team USA's 12-man roster at the Rio Olympics.",
    tiers: {
      chalk: ["Kevin Durant|kd","Carmelo Anthony|melo","Kyrie Irving|kyrie"],
      bandwagon: ["Klay Thompson|klay","Paul George|pg13","Draymond Green|draymond","Jimmy Butler|jimmy buckets"],
      starter: ["DeMarcus Cousins|boogie","DeMar DeRozan|derozan","Kyle Lowry|lowry"],
      film: ["DeAndre Jordan|deandre","Harrison Barnes"],
      deep: [],
      hail: []
    }
  },
  {
    id: "usa-2020", cat: "culture", diff: "easy",
    prompt: "Name a player on Team USA's Tokyo Olympic gold-medal team.",
    note: "Team USA's 12-man roster at the Tokyo Olympics (played in 2021).",
    tiers: {
      chalk: ["Kevin Durant|kd","Damian Lillard|dame|lillard","Jayson Tatum|tatum"],
      bandwagon: ["Devin Booker|booker","Bam Adebayo|bam","Draymond Green|draymond","Jrue Holiday"],
      starter: ["Khris Middleton|middleton","Zach LaVine|lavine"],
      film: ["Jerami Grant","JaVale McGee"],
      deep: ["Keldon Johnson"],
      hail: []
    }
  },
  {
    id: "space-jam", cat: "culture", diff: "easy",
    prompt: "Name an NBA player who appeared in either Space Jam movie.",
    note: "Space Jam (1996) or Space Jam: A New Legacy (2021), playing themselves.",
    tiers: {
      chalk: ["Michael Jordan|mj","LeBron James|lebron|king james"],
      bandwagon: ["Charles Barkley|sir charles","Larry Bird","Anthony Davis|ad|the brow","Damian Lillard|dame|lillard","Klay Thompson|klay"],
      starter: ["Patrick Ewing|ewing","Muggsy Bogues|muggsy","Larry Johnson|grandmama","Shawn Bradley"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "multi-champs", cat: "finals", diff: "easy",
    prompt: "Name a player who won NBA titles with two or more teams (like LeBron).",
    note: "Championships as a player, with different franchises.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Shaquille O'Neal|shaq","Kawhi Leonard|kawhi"],
      bandwagon: ["Robert Horry|big shot rob|horry","Ray Allen","Dennis Rodman|rodman","Kareem Abdul-Jabbar|kareem","Wilt Chamberlain|wilt","Danny Green","Jrue Holiday","Rajon Rondo|rondo"],
      starter: ["Kentavious Caldwell-Pope|kcp","JaVale McGee","Steve Kerr|kerr","Horace Grant","Ron Harper","Sam Cassell","James Posey","Bill Walton","Dennis Johnson|dj"],
      film: ["John Salley","Patrick McCaw","Mario Elie","Robert Parish|the chief","Jamaal Wilkes","Clyde Lovellette"],
      deep: [],
      hail: []
    }
  },
  {
    id: "roy-mvp", cat: "awards", diff: "easy",
    prompt: "Name a player who won both Rookie of the Year and MVP.",
    note: "Both awards at any point in their career.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Michael Jordan|mj","Shaquille O'Neal|shaq"],
      bandwagon: ["Tim Duncan","Larry Bird","Derrick Rose|d rose","Allen Iverson|iverson|ai","Kareem Abdul-Jabbar|kareem","Wilt Chamberlain|wilt"],
      starter: ["David Robinson|the admiral","Oscar Robertson|the big o"],
      film: ["Wes Unseld","Dave Cowens","Bob Pettit"],
      deep: [],
      hail: []
    }
  },
  {
    id: "mvp-fmvp", cat: "awards", diff: "easy",
    prompt: "Name a player who won MVP and Finals MVP in the same season.",
    note: "Both awards in one season, through 2025.",
    tiers: {
      chalk: ["Michael Jordan|mj","LeBron James|lebron|king james"],
      bandwagon: ["Shaquille O'Neal|shaq","Tim Duncan","Larry Bird","Magic Johnson","Shai Gilgeous-Alexander|sga|shai","Hakeem Olajuwon|hakeem|the dream"],
      starter: ["Kareem Abdul-Jabbar|kareem","Moses Malone","Willis Reed"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "pg-allstars", cat: "players", diff: "easy",
    prompt: "Name a point guard who made an All-Star team since 2010.",
    note: "Primary point guards selected from 2010 through 2025.",
    tiers: {
      chalk: ["Stephen Curry|steph curry|steph","Chris Paul|cp3","Russell Westbrook|westbrook|russ","Kyrie Irving|kyrie"],
      bandwagon: ["Damian Lillard|dame|lillard","Derrick Rose|d rose","Ja Morant|ja","Trae Young|trae","Luka Doncic|luka","Jalen Brunson|brunson","Shai Gilgeous-Alexander|sga|shai","John Wall","Kyle Lowry|lowry"],
      starter: ["Rajon Rondo|rondo","Deron Williams|d will","Tony Parker|tp","Steve Nash|nash","Ben Simmons","De'Aaron Fox|fox","Tyrese Haliburton|haliburton","LaMelo Ball|lamelo","Kemba Walker|kemba","Isaiah Thomas","Darius Garland|garland","Tyrese Maxey|maxey","Cade Cunningham|cade"],
      film: ["Jeff Teague","Mike Conley","Goran Dragic|dragic","Jrue Holiday","Fred VanVleet|fvv","D'Angelo Russell|dangelo russell","Chauncey Billups|billups"],
      deep: [],
      hail: []
    }
  },
  {
    id: "c-allstars", cat: "players", diff: "easy",
    prompt: "Name a center who made an All-Star team since 2010.",
    note: "Primary centers selected from 2010 through 2025.",
    tiers: {
      chalk: ["Nikola Jokic|jokic|joker","Joel Embiid|embiid","Dwight Howard|dwight"],
      bandwagon: ["Victor Wembanyama|wemby|wembanyama","Karl-Anthony Towns|kat|towns","Bam Adebayo|bam","Rudy Gobert|gobert","DeMarcus Cousins|boogie","Anthony Davis|ad|the brow","Domantas Sabonis|sabonis"],
      starter: ["Marc Gasol","Andre Drummond|drummond","DeAndre Jordan|deandre","Al Horford|horford","Nikola Vucevic|vucevic","Jarrett Allen","Alperen Sengun|sengun","Evan Mobley|mobley","Andrew Bynum|bynum","Pau Gasol|pau","Tim Duncan"],
      film: ["Tyson Chandler","Roy Hibbert|hibbert","Joakim Noah|noah","Chris Kaman|kaman","Jaren Jackson Jr.|jaren jackson|jjj"],
      deep: [],
      hail: []
    }
  },
  {
    id: "allnba1-modern", cat: "awards", diff: "easy",
    prompt: "Name an All-NBA First Team player since 2010.",
    note: "First Team selections from 2010 through 2025.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Stephen Curry|steph curry|steph","Kevin Durant|kd","Kobe Bryant|kobe"],
      bandwagon: ["Giannis Antetokounmpo|giannis|greek freak","Nikola Jokic|jokic|joker","Luka Doncic|luka","James Harden|harden","Shai Gilgeous-Alexander|sga|shai","Jayson Tatum|tatum","Anthony Davis|ad|the brow","Kawhi Leonard|kawhi","Russell Westbrook|westbrook|russ"],
      starter: ["Chris Paul|cp3","Dwight Howard|dwight","Derrick Rose|d rose","Dwyane Wade|d-wade|dwade","Damian Lillard|dame|lillard","Joel Embiid|embiid","Tim Duncan","Paul George|pg13","Devin Booker|booker","Donovan Mitchell|spida"],
      film: ["Joakim Noah|noah","Marc Gasol","DeAndre Jordan|deandre"],
      deep: [],
      hail: []
    }
  },
  {
    id: "champs-80s", cat: "finals", diff: "easy",
    prompt: "Name a team that won the NBA title in the 1980s.",
    note: "The 1980 through 1989 Finals.",
    tiers: {
      chalk: ["Los Angeles Lakers|lakers|la lakers","Boston Celtics|celtics|boston"],
      bandwagon: ["Detroit Pistons|pistons|detroit"],
      starter: ["Philadelphia 76ers|76ers|sixers|philadelphia|philly"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "champs-70s", cat: "finals", diff: "easy",
    prompt: "Name a team that won the NBA title in the 1970s.",
    note: "The 1970 through 1979 Finals (use the team's name today or then).",
    tiers: {
      chalk: ["Boston Celtics|celtics|boston","New York Knicks|knicks|new york"],
      bandwagon: ["Los Angeles Lakers|lakers|la lakers","Milwaukee Bucks|bucks|milwaukee"],
      starter: ["Golden State Warriors|warriors|golden state","Portland Trail Blazers|trail blazers|blazers|portland"],
      film: ["Washington Bullets|bullets|washington wizards|wizards|washington","Seattle SuperSonics|supersonics|sonics|seattle"],
      deep: [],
      hail: []
    }
  },
  {
    id: "player-coach-champs", cat: "coaches", diff: "easy",
    prompt: "Name someone who won an NBA title as a player and as a head coach (like Steve Kerr).",
    note: "Titles in both roles, any era.",
    tiers: {
      chalk: ["Steve Kerr|kerr","Phil Jackson|the zen master"],
      bandwagon: ["Pat Riley|riley","Tyronn Lue|ty lue|lue","Bill Russell"],
      starter: ["Rick Carlisle|carlisle","K.C. Jones|kc jones","Tom Heinsohn|heinsohn","Billy Cunningham"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "africa-born", cat: "players", diff: "easy",
    prompt: "Name an NBA player born in Africa (like Joel Embiid).",
    note: "Born anywhere on the African continent.",
    tiers: {
      chalk: ["Joel Embiid|embiid","Hakeem Olajuwon|hakeem|the dream","Dikembe Mutombo|mutombo"],
      bandwagon: ["Pascal Siakam|siakam","Serge Ibaka|ibaka","Manute Bol","Luol Deng|deng","Jonathan Kuminga|kuminga"],
      starter: ["Bismack Biyombo|biyombo","Gorgui Dieng","Precious Achiuwa","Hasheem Thabeet|thabeet","Thon Maker","Bol Bol","Luc Mbah a Moute","Emmanuel Mudiay","Josh Okogie","Christian Koloko","Khaman Maluach"],
      film: ["DeSagana Diop","Udoka Azubuike","Mouhamed Gueye","Ibou Badji","Michael Olowokandi|kandi man","Ruben Boumtje-Boumtje","Solomon Alabi","Festus Ezeli","Cheick Diallo","Mamadi Diakite"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sneakers", cat: "culture", diff: "easy",
    prompt: "Name an NBA player with his own signature shoe (like Michael Jordan).",
    note: "A shoe line named for the player by a brand, any era.",
    tiers: {
      chalk: ["Michael Jordan|mj","LeBron James|lebron|king james","Kobe Bryant|kobe","Stephen Curry|steph curry|steph","Kevin Durant|kd"],
      bandwagon: ["Kyrie Irving|kyrie","Giannis Antetokounmpo|giannis|greek freak","Luka Doncic|luka","Ja Morant|ja","James Harden|harden","Damian Lillard|dame|lillard","Allen Iverson|iverson|ai","Shaquille O'Neal|shaq","Jayson Tatum|tatum","Anthony Edwards|ant|ant-man"],
      starter: ["Derrick Rose|d rose","Paul George|pg13","Zion Williamson|zion","LaMelo Ball|lamelo","Russell Westbrook|westbrook|russ","Devin Booker|booker","Trae Young|trae","Donovan Mitchell|spida","Penny Hardaway|anfernee hardaway","Tracy McGrady|t-mac","Dwyane Wade|d-wade|dwade","Klay Thompson|klay","Kawhi Leonard|kawhi","Chris Paul|cp3","Carmelo Anthony|melo"],
      film: ["Charles Barkley|sir charles","Grant Hill","Patrick Ewing|ewing","Stephon Marbury|starbury","Vince Carter|vinsanity","Scottie Pippen|pippen","Dwight Howard|dwight","Tyrese Haliburton|haliburton","Gordon Hayward|hayward","Shai Gilgeous-Alexander|sga|shai","Kevin Garnett|kg"],
      deep: ["Julius Erving|dr j"],
      hail: []
    }
  },
  {
    id: "wing-allstars", cat: "players", diff: "easy",
    prompt: "Name a shooting guard or small forward who made an All-Star team since 2010.",
    note: "Primary wings selected from 2010 through 2025.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Kobe Bryant|kobe","Kevin Durant|kd","Kawhi Leonard|kawhi","James Harden|harden"],
      bandwagon: ["Paul George|pg13","Jayson Tatum|tatum","Devin Booker|booker","Klay Thompson|klay","Jimmy Butler|jimmy buckets","Dwyane Wade|d-wade|dwade","Anthony Edwards|ant|ant-man","Jaylen Brown","Donovan Mitchell|spida","Carmelo Anthony|melo"],
      starter: ["DeMar DeRozan|derozan","Bradley Beal|beal","Zach LaVine|lavine","Khris Middleton|middleton","Brandon Ingram|ingram","Andrew Wiggins|wiggins","Gordon Hayward|hayward","Victor Oladipo|oladipo","Jalen Williams|j dub|jdub","Tyler Herro|herro","Andre Iguodala|iggy","Luol Deng|deng","Joe Johnson|iso joe","Ray Allen","Paul Pierce|pierce"],
      film: ["Gerald Wallace"],
      deep: [],
      hail: []
    }
  },
  {
    id: "big-allstars", cat: "players", diff: "easy",
    prompt: "Name a power forward who made an All-Star team since 2010.",
    note: "Primary power forwards selected from 2010 through 2025.",
    tiers: {
      chalk: ["Giannis Antetokounmpo|giannis|greek freak","Anthony Davis|ad|the brow","Blake Griffin","Kevin Love"],
      bandwagon: ["Dirk Nowitzki|dirk","LaMarcus Aldridge|aldridge","Chris Bosh|bosh","Pau Gasol|pau","Pascal Siakam|siakam","Zion Williamson|zion","Julius Randle|randle","Paolo Banchero|paolo","Draymond Green|draymond","Jaren Jackson Jr.|jaren jackson|jjj"],
      starter: ["Tim Duncan","Paul Millsap|millsap","Kevin Garnett|kg","Zach Randolph|z-bo|zbo","Amar'e Stoudemire|amare|stat","Lauri Markkanen|markkanen","Evan Mobley|mobley","Domantas Sabonis|sabonis","Al Horford|horford","Kristaps Porzingis|porzingis"],
      film: ["David Lee","Luol Deng"],
      deep: [],
      hail: []
    }
  },
  {
    id: "t90-bulls", cat: "teams90", diff: "easy",
    prompt: "Name a player who played for the Chicago Bulls in the 1990s (like Michael Jordan).",
    note: "Played for them in any season from 1989-90 through 1999-2000.",
    tiers: {
      chalk: ["Michael Jordan|mj","Scottie Pippen|pippen","Dennis Rodman|rodman"],
      bandwagon: ["Toni Kukoc|kukoc","Horace Grant","Steve Kerr|kerr","B.J. Armstrong","Ron Harper","Luc Longley|longley"],
      starter: ["John Paxson|paxson","Bill Cartwright","Will Perdue","Bill Wennington","Jud Buechler","Scott Burrell","Elton Brand"],
      film: ["Craig Hodges","Stacey King","Cliff Levingston","Scott Williams","Pete Myers","Corie Blount","Larry Krystkowiak","Dickey Simpkins","Jason Caffey","Robert Parish","Randy Brown","Jack Haley","James Edwards","John Salley","Rusty LaRue"],
      deep: ["Keith Booth","Brent Barry","Kornel David","Mark Bryant","Hersey Hawkins","Matt Maloney","Dedric Willoughby","Chris Anstey","Fred Hoiberg"],
      hail: ["Ed Nealy","Charles Davis","Jeff Sanders","Bobby Hansen","Rodney McCray","Trent Tucker","Darrell Walker","Joe Courtney","Dave Johnson"]
    }
  },
  {
    id: "t90-knicks", cat: "teams90", diff: "easy",
    prompt: "Name a player who played for the New York Knicks in the 1990s (like Patrick Ewing).",
    note: "Played for them in any season from 1989-90 through 1999-2000.",
    tiers: {
      chalk: ["Patrick Ewing|ewing","Latrell Sprewell|spree"],
      bandwagon: ["John Starks|starks","Charles Oakley|oak","Allan Houston","Larry Johnson|grandmama","Marcus Camby"],
      starter: ["Anthony Mason","Derek Harper","Charles Smith","Doc Rivers","Mark Jackson","Gerald Wilkins","Greg Anthony","Hubert Davis","Herb Williams","Chris Childs","Buck Williams","Chris Dudley","Kurt Thomas","Charlie Ward","Chris Mills","Kiki Vandeweghe","Rolando Blackman","Xavier McDaniel|x-man"],
      film: ["Maurice Cheeks","Johnny Newman","Kenny Walker","Trent Tucker","Brian Quinnett","Eddie Lee Wilkins","Tony Campbell","Anthony Bonner","Monty Williams","Doug Christie"],
      deep: ["Gary Grant","J.R. Reid","Walter McCarty","Dontae' Jones","John Wallace","Scott Brooks","Terry Cummings","Rick Brunson","David Wingate","Ben Davis"],
      hail: ["Stuart Gray","Mirsad Turkcan","DeMarco Johnson"]
    }
  },
  {
    id: "t90-lakers", cat: "teams90", diff: "easy",
    prompt: "Name a player who played for the Los Angeles Lakers in the 1990s (like Shaq).",
    note: "Played for them in any season from 1989-90 through 1999-2000.",
    tiers: {
      chalk: ["Shaquille O'Neal|shaq","Kobe Bryant|kobe","Magic Johnson"],
      bandwagon: ["James Worthy","Eddie Jones","Nick Van Exel","Vlade Divac|vlade","A.C. Green","Byron Scott"],
      starter: ["Glen Rice","Robert Horry|big shot rob|horry","Rick Fox","Derek Fisher|fisher","Cedric Ceballos","Elden Campbell","Sam Perkins","Sedale Threatt","Ron Harper","Brian Shaw","Anthony Peeler","Doug Christie"],
      film: ["Mychal Thompson","Michael Cooper","Orlando Woolridge","Larry Drew","Terry Teagle","Tony Smith","Sam Bowie","George Lynch","James Edwards","Trevor Wilson","Kurt Rambis","Jerome Kersey","Corie Blount","Travis Knight"],
      deep: ["Jon Barry","Sean Rooks","Shea Seals","Mario Bennett","Dennis Rodman","Tyronn Lue","Sam Jacobson","Ruben Patterson","Derek Harper","J.R. Rider","Devean George","John Salley","John Celestand"],
      hail: ["Mel McCants","Irving Thomas","Jack Haley","Benoit Benjamin","Antonio Harvey"]
    }
  },
  {
    id: "t90-celtics", cat: "teams90", diff: "easy",
    prompt: "Name a player who played for the Boston Celtics in the 1990s (like Larry Bird).",
    note: "Played for them in any season from 1989-90 through 1999-2000.",
    tiers: {
      chalk: ["Larry Bird","Paul Pierce|pierce","Antoine Walker"],
      bandwagon: ["Kevin McHale|mchale","Robert Parish|the chief","Reggie Lewis","Dee Brown","Dino Radja","Kenny Anderson"],
      starter: ["Rick Fox","Eric Montross","Xavier McDaniel|x-man","Dominique Wilkins|nique","Ron Mercer","Chauncey Billups|billups","Walter McCarty","Dana Barros","Sherman Douglas","Kevin Gamble","Brian Shaw","Ed Pinckney","Pervis Ellison","David Wesley","Todd Day","Vitaly Potapenko","Tony Battie","Bryant Stith","Adrian Griffin","Eric Williams"],
      film: ["Joe Kleine","Michael Smith","Stojko Vrankovic","John Bagley","Alaa Abdelnaby","Marcus Webb","Acie Earl","Jay Humphries","Chris Corchiani","Greg Minor","Junior Burrough","Marty Conlon","Thomas Hamilton","Frank Brickowski","Brett Szabo"],
      deep: ["Travis Knight","Andrew DeClercq","Zan Tabak","Danny Fortson","Popeye Jones","Bruce Bowen","Calbert Cheaney","Eric Riley","Wayne Turner","Randy Brown"],
      hail: ["Charles Smith"]
    }
  },
  {
    id: "t90-rockets", cat: "teams90", diff: "easy",
    prompt: "Name a player who played for the Houston Rockets in the 1990s (like Hakeem Olajuwon).",
    note: "Played for them in any season from 1989-90 through 1999-2000.",
    tiers: {
      chalk: ["Hakeem Olajuwon|hakeem|the dream","Clyde Drexler|clyde the glide","Charles Barkley|sir charles"],
      bandwagon: ["Scottie Pippen|pippen","Robert Horry|big shot rob|horry","Kenny Smith|the jet","Sam Cassell","Steve Francis|stevie franchise","Cuttino Mobley|cat mobley"],
      starter: ["Vernon Maxwell|mad max","Otis Thorpe","Mario Elie","Eddie Johnson","Kevin Willis","Matt Maloney","Brent Price","Shandon Anderson","Bryce Drew","Michael Dickerson","Kelvin Cato","Walt Williams","Moochie Norris","Sleepy Floyd|eric floyd","Buck Johnson","Mike Woodson","Avery Johnson","Chucky Brown","Carl Herrera","Pete Chilcutt","Matt Bullard"],
      film: ["Scott Brooks","Earl Cureton","Richard Petruska","Zan Tabak","Charles Jones","Tim Breaux","Eric Riley","Sam Mack","Mark Bryant","Emanual Davis","Othella Harrington","Rodrick Rhodes","Antoine Carr"],
      deep: ["Larry Smith","Dave Jamerson","Lewis Lloyd","Tim McCormick","Larry Robinson","Tree Rollins","Mitchell Wiggins"],
      hail: []
    }
  },
  {
    id: "t90-jazz", cat: "teams90", diff: "easy",
    prompt: "Name a player who played for the Utah Jazz in the 1990s (like Karl Malone).",
    note: "Played for them in any season from 1989-90 through 1999-2000.",
    tiers: {
      chalk: ["Karl Malone|the mailman","John Stockton|stockton"],
      bandwagon: ["Jeff Hornacek|hornacek","Bryon Russell","Greg Ostertag|ostertag","Shandon Anderson"],
      starter: ["Tom Chambers","Antoine Carr","Howard Eisley","Adam Keefe","Jay Humphries","Thurl Bailey","Blue Edwards","Felton Spencer","David Benoit","Jeff Malone","Mark Eaton","Darrell Griffith","Chris Morris","Olden Polynice","Quincy Lewis","Jacque Vaughn","Armen Gilliam","Scott Padgett","Greg Foster","John Crotty","Tyrone Corbin","Mike Brown","Bobby Hansen","Eric Murdock","Jim Les","Delaney Rudd","Pete Chilcutt","Larry Krystkowiak"],
      film: [],
      deep: [],
      hail: ["Walter Palmer","Isaac Austin","Darren Morningstar","Stephen Howard","Jamie Watson","Andy Toolson","Brooks Thompson","William Cunningham","Troy Hudson","Todd Fuller"]
    }
  },
  {
    id: "t90-sonics", cat: "teams90", diff: "easy",
    prompt: "Name a player who played for the Seattle SuperSonics in the 1990s (like Gary Payton).",
    note: "Played for them in any season from 1989-90 through 1999-2000.",
    tiers: {
      chalk: ["Gary Payton|the glove","Shawn Kemp|reign man"],
      bandwagon: ["Detlef Schrempf|schrempf","Vin Baker","Hersey Hawkins","Nate McMillan|mr sonic","Sam Perkins"],
      starter: ["Ricky Pierce","Dale Ellis","Xavier McDaniel|x-man","Derrick McKey","Eddie Johnson","Michael Cage","Benoit Benjamin","Kendall Gill","Ervin Johnson","Vincent Askew","Frank Brickowski","Jim McIlvaine","Larry Stewart","Craig Ehlo","David Wingate","Sherell Ford","Rashard Lewis","Brent Barry","Ruben Patterson","Jelani McCoy","Horace Grant","Vernon Maxwell","Emanual Davis","Chuck Person","Shammond Williams","Greg Anthony","Billy Owens","Olden Polynice","Aaron Williams","Steve Scheffler","Rich King","Quinn Snyder","Bart Kofoed","Dana Barros","Avery Johnson","Gerald Paddio","Marty Conlon"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "t90-suns", cat: "teams90", diff: "easy",
    prompt: "Name a player who played for the Phoenix Suns in the 1990s (like Charles Barkley).",
    note: "Played for them in any season from 1989-90 through 1999-2000.",
    tiers: {
      chalk: ["Charles Barkley|sir charles","Jason Kidd|kidd","Kevin Johnson|kj"],
      bandwagon: ["Dan Majerle|thunder dan","Tom Chambers","Penny Hardaway|anfernee hardaway","Steve Nash|nash","Rex Chapman","Cliff Robinson","Danny Manning"],
      starter: ["A.C. Green","Cedric Ceballos","Wesley Person","Danny Ainge","Antonio McDyess","Tom Gugliotta","Rodney Rogers","Shawn Marion|the matrix","Wayman Tisdale","Michael Finley","Jeff Hornacek","Eddie Johnson","Mark West","Oliver Miller","Richard Dumas","Sam Cassell","Robert Horry","Elliot Perry","Hot Rod Williams","Tim Perry","Andrew Lang","Negele Knight","Frank Johnson","Joe Kleine","Jerrod Mustaf","Danny Schayes","Kurt Rambis","Joe Barry Carroll","Chris Morris","John Williams","Pat Garrity","Toby Bailey","Corie Blount","Randy Livingston","Mike Brown","Bubba Wells","George McCloud","Clifford Robinson","Loren Meyer","Horacio Llamas"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "t90-spurs", cat: "teams90", diff: "easy",
    prompt: "Name a player who played for the San Antonio Spurs in the 1990s (like David Robinson).",
    note: "Played for them in any season from 1989-90 through 1999-2000.",
    tiers: {
      chalk: ["David Robinson|the admiral","Tim Duncan"],
      bandwagon: ["Sean Elliott","Avery Johnson|the little general","Dennis Rodman|rodman","Terry Cummings"],
      starter: ["Mario Elie","Vinny Del Negro","Rod Strickland","Willie Anderson","Chuck Person","Jaren Jackson","Malik Rose","Antonio Daniels","Monty Williams","J.R. Reid","Dale Ellis","Lloyd Daniels","Steve Kerr|kerr","Will Perdue","Jerome Kersey","Doc Rivers","Vernon Maxwell","Carl Herrera","Cory Alexander","Brad Lohaus","Moses Malone","Larry Smith","David Wood","Paul Pressey","Antoine Carr","Sidney Green","Frank Brickowski","Greg Anderson","Jamie Feick","Gerard King","Felton Spencer","Charles Smith","Samaki Walker"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "t90-magic", cat: "teams90", diff: "easy",
    prompt: "Name a player who played for the Orlando Magic in the 1990s (like Shaq).",
    note: "Played for them in any season from 1989-90 through 1999-2000.",
    tiers: {
      chalk: ["Shaquille O'Neal|shaq","Penny Hardaway|anfernee hardaway"],
      bandwagon: ["Horace Grant","Nick Anderson","Dennis Scott","Scott Skiles|skiles"],
      starter: ["Brian Shaw","Rony Seikaly","Darrell Armstrong","Bo Outlaw","Derek Strong","Gerald Wilkins","Donald Royal","Jeff Turner","Anthony Bowie","Tree Rollins","Otis Smith","Terry Catledge","Sam Vincent","Reggie Theus","Jerry Reynolds","Greg Kite","Larry Krystkowiak","Brooks Thompson","Jon Koncak","Danny Schayes","Mark Price","Derek Harper","David Benoit","Isaac Austin","Matt Harpring","Michael Doleac","Ben Wallace","Chucky Atkins","Corey Maggette","Ron Mercer","John Amaechi","Pat Garrity","Tariq Abdul-Wahad","Chris Gatling","Monty Williams","Johnny Taylor","Tom Tolbert","Litterial Green"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "t90-pacers", cat: "teams90", diff: "easy",
    prompt: "Name a player who played for the Indiana Pacers in the 1990s (like Reggie Miller).",
    note: "Played for them in any season from 1989-90 through 1999-2000.",
    tiers: {
      chalk: ["Reggie Miller"],
      bandwagon: ["Rik Smits|dunking dutchman","Jalen Rose","Mark Jackson","Chris Mullin","Dale Davis"],
      starter: ["Detlef Schrempf","Antonio Davis","Derrick McKey","Byron Scott","Travis Best","Austin Croshere","Sam Perkins","Haywood Workman","Vern Fleming","Chuck Person","Micheal Williams","Pooh Richardson","LaSalle Thompson","George McCloud","Mark Pope","Kenny Williams","Malik Sealy","Duane Ferrell","Eddie Johnson","Fred Hoiberg","Al Harrington","Jonathan Bender","Zan Tabak","Mark West","Sam Mitchell","Gerald Paddio","Greg Dreiling","Mike Sanders","Rickey Green","Dyron Nix","Randy Wittman","Ricky Pierce","Jerome Allen","Erick Dampier","Reggie Williams"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "t90-heat", cat: "teams90", diff: "easy",
    prompt: "Name a player who played for the Miami Heat in the 1990s (like Alonzo Mourning).",
    note: "Played for them in any season from 1989-90 through 1999-2000.",
    tiers: {
      chalk: ["Alonzo Mourning|zo","Tim Hardaway"],
      bandwagon: ["Glen Rice","Jamal Mashburn|monster mash","P.J. Brown","Rony Seikaly"],
      starter: ["Steve Smith","Grant Long","Dan Majerle|thunder dan","Voshon Lenard","Brian Shaw","Kevin Willis","Bimbo Coles","Billy Owens","Sherman Douglas","Harold Miner","Willie Burton","Keith Askins","Isaac Austin","Clarence Weatherspoon","Terry Porter","Kevin Edwards","Jon Sundvold","Otis Thorpe","Tim James","Rex Chapman","Chris Gatling","Kurt Thomas","John Crotty","Matt Geiger","Tyrone Corbin","Alec Kessler","Terry Davis","John Salley","Brad Lohaus","Morlon Wiley","Mark Strickland","Todd Day","Duane Causwell","Danny Schayes","Ed Pinckney"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "t90-blazers", cat: "teams90", diff: "easy",
    prompt: "Name a player who played for the Portland Trail Blazers in the 1990s (like Clyde Drexler).",
    note: "Played for them in any season from 1989-90 through 1999-2000.",
    tiers: {
      chalk: ["Clyde Drexler|clyde the glide","Scottie Pippen|pippen"],
      bandwagon: ["Terry Porter","Rasheed Wallace|sheed","Arvydas Sabonis|sabonis","Damon Stoudamire|mighty mouse","Isaiah Rider|j.r. rider|jr rider"],
      starter: ["Buck Williams","Jerome Kersey","Kevin Duckworth","Cliff Robinson","Rod Strickland","Kenny Anderson","Brian Grant","Steve Smith","Bonzi Wells","Jermaine O'Neal","Greg Anthony","Detlef Schrempf","Gary Trent","Danny Ainge","Mark Bryant","Walter Davis","Wayne Cooper","Drazen Petrovic","Harvey Grant","Tracy Murray","Rumeal Robinson","Chris Dudley","Aaron McKie","James Robinson","Stacey Augmon","Jim Jackson","Walt Williams","Dontonio Wingfield","Kelvin Cato","Gary Grant","Ennis Whatley","Alaa Abdelnaby","Byron Irvin","Robert Pack","Danny Young","Joe Kleine","Antonio Harvey"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "t90-pistons", cat: "teams90", diff: "easy",
    prompt: "Name a player who played for the Detroit Pistons in the 1990s (like Grant Hill).",
    note: "Played for them in any season from 1989-90 through 1999-2000.",
    tiers: {
      chalk: ["Grant Hill","Isiah Thomas","Joe Dumars|dumars"],
      bandwagon: ["Dennis Rodman|rodman","Bill Laimbeer|laimbeer","Allan Houston","Jerry Stackhouse","Vinnie Johnson|the microwave"],
      starter: ["Otis Thorpe","Lindsey Hunter","Terry Mills","Mark Aguirre","John Salley","James Edwards","Olden Polynice","Orlando Woolridge","Bison Dele|brian williams","Christian Laettner","Jerome Williams","Theo Ratliff","Don Reid","Grant Long","Stacey Augmon","Rick Mahorn","Michael Curry","Malik Sealy","Loy Vaught","Jud Buechler","Aaron McKie","Scott Hastings","Gerald Henderson","David Greenwood","William Bedford","Darrell Walker","Mark Macon","Sean Elliott","Oliver Miller","Mark West","Johnny Dawkins","Bill Curley","Eric Leckner","Randolph Childress"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "t90-sixers", cat: "teams90", diff: "easy",
    prompt: "Name a player who played for the Philadelphia 76ers in the 1990s (like Allen Iverson).",
    note: "Played for them in any season from 1989-90 through 1999-2000.",
    tiers: {
      chalk: ["Allen Iverson|iverson|ai","Charles Barkley|sir charles"],
      bandwagon: ["Hersey Hawkins","Jerry Stackhouse","Derrick Coleman","Theo Ratliff","Clarence Weatherspoon"],
      starter: ["Johnny Dawkins","Rick Mahorn","Armen Gilliam","Shawn Bradley","Jeff Hornacek","Dana Barros","Tim Perry","Jeff Malone","Manute Bol","Moses Malone","Larry Hughes","Tyrone Hill","Matt Geiger","George Lynch","Eric Snow","Aaron McKie","Toni Kukoc","Tim Thomas","Jim Jackson","Vernon Maxwell","Sharone Wright","Scott Williams","Willie Burton","Trevor Ruffin","Mark Davis","Rex Walters","Lucious Harris","Don MacLean","Kevin Ollie","Anthony Parker","Harvey Grant","Nazr Mohammed","Ron Anderson","Mike Gminski","Charles Shackleford","Orlando Woolridge","Greg Grant","Jayson Williams","Kenny Payne","Andrew Lang"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "t90-bucks", cat: "teams90", diff: "easy",
    prompt: "Name a player who played for the Milwaukee Bucks in the 1990s (like Ray Allen).",
    note: "Played for them in any season from 1989-90 through 1999-2000.",
    tiers: {
      chalk: ["Ray Allen","Glenn Robinson|big dog"],
      bandwagon: ["Vin Baker","Sam Cassell","Terrell Brandon"],
      starter: ["Ricky Pierce","Jay Humphries","Alvin Robertson","Frank Brickowski","Dale Ellis","Moses Malone","Todd Day","Blue Edwards","Eric Murdock","Lee Mayberry","Brad Lohaus","Fred Roberts","Jack Sikma","Paul Pressey","Larry Krystkowiak","Danny Schayes","Johnny Newman","Sherman Douglas","Shawn Respert","Marty Conlon","Andrew Lang","Elliot Perry","Ervin Johnson","Armen Gilliam","Tim Thomas","Robert Traylor|tractor","Dell Curry","Haywood Workman","J.R. Reid","Scott Williams","Darvin Ham","Vinny Del Negro","Danny Manning","Michael Curry","Jerry Reynolds","Derek Strong","Steve Henson","Anthony Avent","Paul Mokeski","Jeff Grayer","Greg Anderson"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "t90-hawks", cat: "teams90", diff: "easy",
    prompt: "Name a player who played for the Atlanta Hawks in the 1990s (like Dominique Wilkins).",
    note: "Played for them in any season from 1989-90 through 1999-2000.",
    tiers: {
      chalk: ["Dominique Wilkins|nique","Dikembe Mutombo|mutombo"],
      bandwagon: ["Steve Smith","Mookie Blaylock","Kevin Willis","Doc Rivers","Spud Webb"],
      starter: ["Stacey Augmon","Christian Laettner","Grant Long","Craig Ehlo","Duane Ferrell","Jon Koncak","Andrew Lang","Ken Norman","Tyrone Corbin","Alan Henderson","Ed Gray","LaPhonso Ellis","Jason Terry","Bimbo Coles","Roshown McLeod","Chris Crawford","Lorenzen Wright","Jim Jackson","Isaiah Rider","Danny Manning","Moses Malone","John Battle","Rumeal Robinson","Tim McCormick","Antoine Carr","Cliff Levingston","Sidney Moncrief","Paul Graham","Adam Keefe","Henry James","Sean Rooks","Jon Barry","Matt Bullard","Sergei Bazarevich","Reggie Jordan","Priest Lauderdale","Eldridge Recasner"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "t90-mavs", cat: "teams90", diff: "easy",
    prompt: "Name a player who played for the Dallas Mavericks in the 1990s (like Dirk Nowitzki).",
    note: "Played for them in any season from 1989-90 through 1999-2000.",
    tiers: {
      chalk: ["Dirk Nowitzki|dirk","Jason Kidd|kidd","Steve Nash|nash"],
      bandwagon: ["Jamal Mashburn|monster mash","Jim Jackson","Michael Finley","Rolando Blackman","Derek Harper"],
      starter: ["Shawn Bradley","Cedric Ceballos","Popeye Jones","Sam Cassell","Robert Pack","A.C. Green","Erick Strickland","Hubert Davis","Gary Trent","Khalid Reeves","Chris Gatling","Tony Dumas","Terry Davis","Doug Smith","Fat Lever","James Donaldson","Herb Williams","Sam Perkins","Roy Tarpley|tarpley","Brad Davis","Rodney McCray","Randy White","Lucious Harris","Donald Hodge","Mike Iuzzolino","Tim Legler","Dana Barros","Bubba Wells","Dennis Scott","Martin Muursepp","Samaki Walker","Kurt Thomas","John Williams"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "t90-wolves", cat: "teams90", diff: "easy",
    prompt: "Name a player who played for the Minnesota Timberwolves in the 1990s (like Kevin Garnett).",
    note: "Played for them in any season from 1989-90 through 1999-2000.",
    tiers: {
      chalk: ["Kevin Garnett|kg"],
      bandwagon: ["Stephon Marbury|starbury","Tom Gugliotta","Christian Laettner","Wally Szczerbiak","Terrell Brandon","Isaiah Rider|j.r. rider|jr rider"],
      starter: ["Pooh Richardson","Tony Campbell","Sam Mitchell","Doug West","Micheal Williams","Felton Spencer","Thurl Bailey","Chuck Person","Luc Longley","Gerald Glass","Tyrone Corbin","Randy Breuer","Mark Davis","Stacey King","Sean Rooks","Spud Webb","Terry Porter","Darrick Martin","Chris Carr","Cherokee Parks","Dean Garrett","Anthony Peeler","Bobby Jackson","Joe Smith","Malik Sealy","Radoslav Nesterovic","Reggie Jordan","Bill Curley","Tom Hammonds","Scott Brooks","Brad Sellers"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "t90-raptors", cat: "teams90", diff: "easy",
    prompt: "Name a player who played for the Toronto Raptors in the 1990s (like Vince Carter).",
    note: "Played for them in any season from 1989-90 through 1999-2000.",
    tiers: {
      chalk: ["Vince Carter|vinsanity","Tracy McGrady|t-mac"],
      bandwagon: ["Damon Stoudamire|mighty mouse","Marcus Camby","Doug Christie","Charles Oakley"],
      starter: ["Alvin Williams","Kevin Willis","Antonio Davis","Dee Brown","Walt Williams","Oliver Miller","Tracy Murray","Carlos Rogers","Zan Tabak","Sharone Wright","Popeye Jones","John Wallace","Chauncey Billups","Dell Curry","Muggsy Bogues","Willie Anderson","Acie Earl","Ed Pinckney","Hubert Davis","Gary Trent","Reggie Slater","Jimmy King","Tony Massenburg","Clifford Rozier","Shawn Respert","Haywood Workman","Michael Stewart","John Thomas","Sean Marks","Micheal Williams","Aleksandar Radojevic"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "col-usc", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at USC (like DeMar DeRozan).",
    note: "Played college ball for the Trojans.",
    tiers: {
      chalk: ["DeMar DeRozan|derozan"],
      bandwagon: ["Nick Young|swaggy p","O.J. Mayo|oj mayo","Taj Gibson","Evan Mobley|mobley","Isaiah Mobley"],
      starter: ["Harold Miner","Sam Clancy","Brian Scalabrine|scal","Jeff Trepagnier","Nikola Vucevic|vucevic"],
      film: ["Dewayne Dedmon","Chimezie Metu","De'Anthony Melton","Kevin Porter Jr.","Onyeka Okongwu|okongwu","Bronny James|bronny","Isaiah Collier"],
      deep: ["Bill Sharman","Paul Westphal","Gus Williams","Cliff Robinson"],
      hail: []
    }
  },
  {
    id: "col-marquette", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at Marquette (like Dwyane Wade).",
    note: "Played college ball for the Golden Eagles.",
    tiers: {
      chalk: ["Dwyane Wade|d-wade|dwade"],
      bandwagon: ["Jimmy Butler|jimmy buckets","Jae Crowder","Wesley Matthews","Doc Rivers"],
      starter: ["Steve Novak","Travis Diener","Lazar Hayward","Darius Johnson-Odom","Henry Ellenson","Markus Howard","Sam Hauser","Olivier-Maxence Prosper","Kam Jones"],
      film: ["Tyler Kolek","Butch Lee","Maurice Lucas","Bo Ellis","Dean Meminger","George Thompson","Jim Chones"],
      deep: ["Vander Blue","Tony Smith","Jerome Whitehead","Earl Tatum"],
      hail: []
    }
  },
  {
    id: "col-houston", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at Houston (like Hakeem Olajuwon).",
    note: "Played college ball for the Cougars.",
    tiers: {
      chalk: ["Hakeem Olajuwon|hakeem|the dream","Clyde Drexler|clyde the glide"],
      bandwagon: ["Jarace Walker","Elvin Hayes|big e","Otis Birdsong"],
      starter: ["Larry Micheaux","Michael Young","Marcus Sasser","Quentin Grimes","Jamal Shead"],
      film: ["Armoni Brooks","Joseph Tugler","Benny Anders"],
      deep: ["Rickie Winslow"],
      hail: []
    }
  },
  {
    id: "name-johnson", cat: "names", diff: "easy",
    prompt: "Name an NBA player with the last name Johnson.",
    note: "Any era.",
    tiers: {
      chalk: ["Magic Johnson"],
      bandwagon: ["Kevin Johnson|kj","Joe Johnson|iso joe","Larry Johnson|grandmama","Dennis Johnson|dj","Cameron Johnson","Jalen Johnson"],
      starter: ["Avery Johnson","Eddie Johnson","Marques Johnson","Vinnie Johnson|the microwave","Keldon Johnson","Stanley Johnson","Wesley Johnson","Amir Johnson","James Johnson","Tyler Johnson","Gus Johnson"],
      film: ["Ervin Johnson","Anthony Johnson","Buck Johnson","Frank Johnson","John Johnson","Clemon Johnson","Ken Johnson","Chris Johnson","Armon Johnson","Alexander Johnson","Keon Johnson","Trey Johnson","Ivan Johnson","Steffond Johnson","Orlando Johnson","Keshad Johnson","Tre Johnson","David Johnson","Dave Johnson","George Johnson","Neil Johnson","Mickey Johnson","Ollie Johnson","Reggie Johnson","Arnie Johnson"],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-williams", cat: "names", diff: "easy",
    prompt: "Name an NBA player with the last name Williams.",
    note: "Any era.",
    tiers: {
      chalk: ["Deron Williams|d will","Lou Williams|sweet lou","Jason Williams|white chocolate"],
      bandwagon: ["Jalen Williams|j dub|jdub","Mo Williams","Marvin Williams","Robert Williams|time lord","Jayson Williams","Patrick Williams","Grant Williams","Buck Williams","Gus Williams"],
      starter: ["Jaylin Williams","Kenrich Williams","Ziaire Williams","Mark Williams","Cody Williams","Monty Williams","Herb Williams","Scott Williams","Walt Williams","Reggie Williams","John Williams|hot rod williams","Derrick Williams","Shelden Williams","Terrence Williams","Jerome Williams","Alvin Williams","Eric Williams","Aaron Williams","Brandon Williams","Kevin Williams","Elliot Williams"],
      film: ["Shammond Williams","Frank Williams","Lorenzo Williams","Micheal Williams","Ray Williams","Freeman Williams","Sly Williams","Kenny Williams","C.J. Williams","Johnathan Williams","Troy Williams","Alondes Williams","Jeenathan Williams","Nate Williams","Vince Williams Jr.","Marcus Williams","Chuck Williams"],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-smith", cat: "names", diff: "easy",
    prompt: "Name an NBA player with the last name Smith.",
    note: "Any era.",
    tiers: {
      chalk: ["J.R. Smith|jr smith","Steve Smith","Kenny Smith|the jet","Josh Smith"],
      bandwagon: ["Joe Smith","Dennis Smith Jr.","Jabari Smith Jr.|jabari smith","Ish Smith|ishmael smith","Jason Smith","Charles Smith","Randy Smith"],
      starter: ["Derek Smith","Larry Smith","Elmore Smith","Tony Smith","Doug Smith","Michael Smith","Craig Smith","Nolan Smith","Russ Smith","Zhaire Smith","Jalen Smith","Dru Smith","Nick Smith Jr.","Greg Smith","Phil Smith","Otis Smith","Keith Smith","Chris Smith","Adrian Smith","Bingo Smith","Garfield Smith","Leon Smith","Tyler Smith","Terquavion Smith"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-jones", cat: "names", diff: "easy",
    prompt: "Name an NBA player with the last name Jones.",
    note: "Any era.",
    tiers: {
      chalk: ["Eddie Jones","Tyus Jones","Sam Jones","K.C. Jones|kc jones"],
      bandwagon: ["Herb Jones|herbert jones","Bobby Jones","Tre Jones","Dahntay Jones","Damian Jones","Caldwell Jones","James Jones","Popeye Jones","Derrick Jones Jr."],
      starter: ["Kai Jones","Mason Jones","Colby Jones","Isaac Jones","Major Jones","Charles Jones","Fred Jones","Jumaine Jones","Solomon Jones","Dominique Jones","Perry Jones","Terrence Jones","Jalen Jones","DeQuan Jones","Wali Jones","Rich Jones","Dwayne Jones","Kevin Jones","Carlik Jones","Spencer Jones","Wil Jones","Anthony Jones"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-chris", cat: "names", diff: "easy",
    prompt: "Name an NBA player whose first name is Chris.",
    note: "Christopher counts. Any era.",
    tiers: {
      chalk: ["Chris Paul|cp3","Chris Bosh|bosh","Chris Webber|c-webb"],
      bandwagon: ["Chris Mullin","Chris Kaman|kaman","Chris Andersen|birdman","Chris Boucher","Chris Duarte","Chris Childs","Chris Gatling"],
      starter: ["Chris Dudley","Chris Mills","Chris Morris","Chris Jackson|mahmoud abdul-rauf","Chris Duhon","Chris Wilcox","Chris Mihm","Chris Douglas-Roberts","Chris Copeland","Chris Herren","Chris Ford","Chris Corchiani","Chris Whitney","Chris Johnson","Chris Livingston","Chris Silva","Chris Chiozza","Chris Clemons","Chris Crawford","Chris Robinson","Chris Smith","Chris Singleton","Chris McCullough","Chris Quinn","Chris Anstey","Chris Carr","Chris Jefferies","Chris Richard","Chris Taft","Chris Wright","Chris Washburn","Chris Welp|christian welp","Chris Hunter","Chris Porter"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-kevin", cat: "names", diff: "easy",
    prompt: "Name an NBA player whose first name is Kevin.",
    note: "Any era.",
    tiers: {
      chalk: ["Kevin Durant|kd","Kevin Garnett|kg","Kevin Love"],
      bandwagon: ["Kevin McHale|mchale","Kevin Johnson|kj","Kevin Martin","Kevin Huerter|huerter","Kevin Porter Jr."],
      starter: ["Kevin Willis","Kevin Knox","Kevin Duckworth","Kevin Gamble","Kevin Edwards","Kevin Ollie","Kevin Seraphin","Kevin Pangos","Kevin Murphy","Kevin Brooks","Kevin Grevey","Kevin Jones","Kevin Loughery","Kevin McKenna","Kevin Salvadori","Kevin Restani","Kevin Lynch","Kevin Porter","Kevin Burleson","Kevin McCullar"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "no1-mvp", cat: "draft", diff: "easy",
    prompt: "Name a No. 1 overall pick who went on to win MVP.",
    note: "First pick in the draft, later a regular-season MVP.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Shaquille O'Neal|shaq","Tim Duncan","Magic Johnson"],
      bandwagon: ["Kareem Abdul-Jabbar|kareem","Allen Iverson|iverson|ai","Derrick Rose|d rose","Hakeem Olajuwon|hakeem|the dream"],
      starter: ["David Robinson|the admiral"],
      film: ["Bill Walton|walton"],
      deep: [],
      hail: []
    }
  },
  {
    id: "team-hawks", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Atlanta Hawks since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Trae Young|trae"],
      bandwagon: ["Joe Johnson|iso joe","Al Horford|horford","Josh Smith","Dejounte Murray","Jalen Johnson","Kristaps Porzingis|porzingis"],
      starter: ["Paul Millsap|millsap","Kyle Korver|korver","Jeff Teague","John Collins","Dennis Schroder|schroder","Clint Capela|capela","Bogdan Bogdanovic|bogdanovic","De'Andre Hunter","Kevin Huerter|huerter","Mike Bibby","Marvin Williams","Dyson Daniels","Zaccharie Risacher|risacher"],
      film: ["Jason Terry|jet","Shareef Abdur-Rahim","Dikembe Mutombo|mutombo","Zaza Pachulia|zaza","Jamal Crawford","Thabo Sefolosha","DeMarre Carroll","Kent Bazemore"],
      deep: ["Taurean Prince","Onyeka Okongwu|okongwu","Antoine Walker","Glenn Robinson","Josh Childress","Danilo Gallinari|gallinari","Lou Williams","Nickeil Alexander-Walker|naw"],
      hail: ["Salim Stoudamire","Royal Ivey","Tyronn Lue","Speedy Claxton","Acie Law","Mike Scott","Mike Muscala","Dewayne Dedmon","Alex Len","Cam Reddish","Gorgui Dieng","Delon Wright","Saddiq Bey","Vit Krejci","AJ Griffin","Garrison Mathews","Kobe Bufkin","Theo Ratliff","Larry Nance Jr.|larry nance jr","Caris LeVert|levert"]
    }
  },
  {
    id: "team-celtics", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Boston Celtics since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Paul Pierce|pierce","Jayson Tatum|tatum","Kevin Garnett|kg"],
      bandwagon: ["Jaylen Brown","Ray Allen","Rajon Rondo|rondo","Kyrie Irving|kyrie","Isaiah Thomas","Jrue Holiday","Al Horford|horford","Kristaps Porzingis|porzingis","Marcus Smart|smart"],
      starter: ["Kendrick Perkins|perk","Antoine Walker","Derrick White","Gordon Hayward|hayward","Kemba Walker|kemba","Avery Bradley","Robert Williams|time lord","Payton Pritchard|pritchard","Jeff Green","Shaquille O'Neal|shaq"],
      film: ["Glen Davis|big baby","Kelly Olynyk","Jae Crowder","Evan Turner","Terry Rozier|scary terry","Daniel Theis","Grant Williams","Sam Hauser","Malcolm Brogdon","Tony Allen","Eddie House","James Posey","Leon Powe","Delonte West","Gary Payton|the glove","Rasheed Wallace|sheed"],
      deep: ["Jermaine O'Neal","Ricky Davis","Al Jefferson","Wally Szczerbiak","Vin Baker","Gerald Green","Sebastian Telfair","Brian Scalabrine|scal","Enes Kanter|enes freedom","Tristan Thompson","Dennis Schroder","Aron Baynes","Marcus Morris"],
      hail: ["Kenny Anderson","Tony Battie","Walter McCarty","Eric Williams","Chris Mihm","Mark Blount","Ryan Gomes","Michael Olowokandi","Raef LaFrentz","Dana Barros","Bill Walker","J.R. Giddens","Shelden Williams","Nate Robinson","Sasha Pavlovic","Keyon Dooling","Mickael Pietrus","Courtney Lee","Jared Sullinger","Jordan Crawford","MarShon Brooks","Vitor Faverani","Phil Pressey","Kris Humphries","Brandon Bass","Jonas Jerebko","Amir Johnson","R.J. Hunter","Guerschon Yabusele","Semi Ojeleye","Shane Larkin","Brad Wanamaker","Romeo Langford","Carsen Edwards","Tremont Waters","Javonte Green","Aaron Nesmith","Moses Brown","Luke Kornet","Blake Griffin","Mike Muscala","Oshae Brissett","Xavier Tillman","Neemias Queta","Jordan Walsh","Svi Mykhailiuk","Jaden Springer"]
    }
  },
  {
    id: "team-nets", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Nets since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Kevin Durant|kd","Jason Kidd|kidd","Kyrie Irving|kyrie"],
      bandwagon: ["Vince Carter|vinsanity","Deron Williams|d will","James Harden|harden","Brook Lopez","Paul Pierce|pierce","Kevin Garnett|kg","Mikal Bridges|bridges","Cam Thomas"],
      starter: ["Richard Jefferson","Kenyon Martin","D'Angelo Russell|dangelo russell","Spencer Dinwiddie|dinwiddie","Caris LeVert|levert","Joe Johnson|iso joe","Jarrett Allen","Ben Simmons","Nic Claxton|claxton","Cameron Johnson","Devin Harris","Gerald Wallace","Andrei Kirilenko|ak47"],
      film: ["Stephen Jackson","Keith Van Horn","Kerry Kittles","Nenad Krstic","Jeremy Lin","Joe Harris","Bojan Bogdanovic","Thaddeus Young","Rondae Hollis-Jefferson","DeMarre Carroll","Jared Dudley","Blake Griffin","LaMarcus Aldridge"],
      deep: ["Patty Mills","Seth Curry","Royce O'Neale","Dorian Finney-Smith","Dennis Schroder","Bruce Brown","Jeff Green","Kessler Edwards","Day'Ron Sharpe","Noah Clowney","Jalen Wilson","Ziaire Williams","Trendon Watford"],
      hail: ["Todd MacCulloch","Aaron Williams","Jason Collins","Lucious Harris","Rodney Rogers","Marcus Williams","Sean Williams","Josh Boone","Yi Jianlian","Chris Douglas-Roberts","Terrence Williams","Courtney Lee","Anthony Morrow","Kris Humphries","Sundiata Gaines","MarShon Brooks","Mirza Teletovic","Andray Blatche","Shaun Livingston","Alan Anderson","Markel Brown","Sergey Karasev","Sean Kilpatrick","Isaiah Whitehead","Trevor Booker","Allen Crabbe","Quincy Acy","Jahlil Okafor","Ed Davis","Rodions Kurucs","Theo Pinson","Treveon Graham","Garrett Temple","Taurean Prince","Timothe Luwawu-Cabarrot","Landry Shamet","Jevon Carter","Mike James","James Johnson","Edmond Sumner"]
    }
  },
  {
    id: "team-hornets", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Charlotte Hornets (or Bobcats) since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["LaMelo Ball|lamelo","Kemba Walker|kemba"],
      bandwagon: ["Gerald Wallace","Miles Bridges","Terry Rozier|scary terry","Nicolas Batum|batum","Brandon Miller","Baron Davis|boom dizzle"],
      starter: ["Al Jefferson|big al","Emeka Okafor|okafor","Stephen Jackson","Michael Kidd-Gilchrist|mkg","P.J. Washington","Raymond Felton","Jamal Magloire","David Wesley","Mark Williams","Gordon Hayward|hayward","Dwight Howard|dwight"],
      film: ["Jamal Mashburn","Elden Campbell","Boris Diaw","Lance Stephenson|born ready","Marvin Williams","Cody Zeller","Jeremy Lamb","Jason Richardson","Matt Carroll","D.J. Augustin","Gerald Henderson"],
      deep: ["Ramon Sessions","Kelly Oubre Jr.|kelly oubre|oubre","Devonte' Graham|devonte graham","Malik Monk|monk","Dennis Smith Jr.","Josh Green","Grant Williams","Nick Richards","Tre Mann","Moussa Diabate"],
      hail: ["Primoz Brezec","Sean May","Adam Morrison","Bismack Biyombo","Tyrus Thomas","D.J. White","Byron Mullens","Jeffery Taylor","Ben Gordon","Frank Kaminsky","Willy Hernangomez","Dwayne Bacon","Cody Martin","Caleb Martin","Jalen McDaniels","James Bouknight","Kai Jones","Bryce McGowens","JT Thor","Nick Smith Jr.","Tidjane Salaun","Josh Okogie","Seth Curry"]
    }
  },
  {
    id: "team-bulls", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Chicago Bulls since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Derrick Rose|d rose"],
      bandwagon: ["Jimmy Butler|jimmy buckets","Joakim Noah|noah","Zach LaVine|lavine","DeMar DeRozan|derozan","Luol Deng|deng","Ben Gordon"],
      starter: ["Kirk Hinrich|hinrich","Taj Gibson","Carlos Boozer|boozer","Nikola Vucevic|vucevic","Lonzo Ball|lonzo","Coby White","Pau Gasol","Dwyane Wade|d-wade|dwade","Rajon Rondo","Elton Brand","Tyson Chandler","Eddy Curry","Josh Giddey|giddey","Alex Caruso|caruso","Patrick Williams","Ayo Dosunmu"],
      film: ["Jamal Crawford","Ron Mercer","Chris Duhon","Andres Nocioni","Ben Wallace","Thabo Sefolosha","John Salmons","Kyle Korver|korver","C.J. Watson","Omer Asik","Ronnie Brewer","Mike Dunleavy Jr.|mike dunleavy","Aaron Brooks","Nate Robinson","Marco Belinelli","Tony Snell","Doug McDermott"],
      deep: ["Nikola Mirotic|mirotic","E'Twaun Moore","Bobby Portis|portis","Jerian Grant","Lauri Markkanen|markkanen","Kris Dunn","Wendell Carter Jr.","Otto Porter Jr.","Thaddeus Young","Tomas Satoransky","Garrett Temple","Javonte Green","Derrick Jones Jr.","Andre Drummond","Torrey Craig","Matas Buzelis"],
      hail: ["Marcus Fizer","Dalibor Bagaric","Jay Williams","Trenton Hassell","Jalen Rose","Antonio Davis","Scottie Pippen","Eddie Robinson","Othella Harrington","Tim Thomas","Viktor Khryapa","Tyrus Thomas","Aaron Gray","Joe Smith","Drew Gooden","Larry Hughes","Brad Miller","Jannero Pargo","James Johnson","Hakim Warrick","Richard Hamilton","Marquis Teague","Nazr Mohammed","Mike James","Cameron Bairstow","Cristiano Felicio","Denzel Valentine","Paul Zipser","Jabari Parker","Antonio Blakeney","Ryan Arcidiacono","Shaquille Harrison","Chandler Hutchison","Daniel Gafford","Max Strus","Dalen Terry","Julian Phillips","Jevon Carter","Kevin Huerter"]
    }
  },
  {
    id: "team-cavs", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Cleveland Cavaliers since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Kyrie Irving|kyrie"],
      bandwagon: ["Kevin Love","Donovan Mitchell|spida","Zydrunas Ilgauskas|big z|ilgauskas","Evan Mobley|mobley","Darius Garland|garland"],
      starter: ["J.R. Smith|jr smith","Tristan Thompson","Jarrett Allen","Anderson Varejao|varejao","Mo Williams","Iman Shumpert","Collin Sexton|sexton","Shaquille O'Neal|shaq","Dwyane Wade|d-wade|dwade","Isaiah Thomas","Larry Nance Jr.","Kyle Korver","Richard Jefferson","Channing Frye","Antawn Jamison","Max Strus","Caris LeVert|levert","De'Andre Hunter"],
      film: ["Drew Gooden","Larry Hughes","Delonte West","Daniel Gibson|boobie","Ben Wallace","Sasha Pavlovic","Wally Szczerbiak","Matthew Dellavedova|delly","Timofey Mozgov","Dion Waiters","Tyler Zeller","Andrew Wiggins","Anthony Bennett","Jeff Green","Jae Crowder","Derrick Rose","George Hill","Rodney Hood","Cedi Osman"],
      deep: ["Ricky Rubio","Lauri Markkanen|markkanen","Kevin Porter Jr.","Andre Miller","Ricky Davis","Darius Miles","Carlos Boozer","Jeff McInnis","Eric Snow","Donyell Marshall","Damon Jones","Sam Merrill","Isaac Okoro","Dean Wade","Ty Jerome","Georges Niang","Lonzo Ball"],
      hail: ["Lamond Murray","Chris Mihm","Trajan Langdon","Bimbo Coles","Ira Newble","Eric Williams","David Wesley","Devin Brown","Shannon Brown","Jamario Moon","Leon Powe","Ramon Sessions","Manny Harris","Christian Eyenga","J.J. Hickson","Ryan Hollins","Samardo Samuels","Luke Walton","Alonzo Gee","Donald Sloan","Luke Harangody","Sergey Karasev","Joe Harris","Brendan Haywood","Sasha Kaun","Jordan McRae","Chris Andersen","Kay Felder","Edy Tavares","Ante Zizic","Jose Calderon","Jalen Jones","Marquese Chriss","Brandon Knight","John Henson","Tacko Fall","Lamar Stevens","Dylan Windler","RJ Nembhard","Kevin Pangos","Mamadi Diakite","Emoni Bates","Craig Porter Jr.","Jaylon Tyson"]
    }
  },
  {
    id: "team-mavs", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Dallas Mavericks since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Dirk Nowitzki|dirk","Luka Doncic|luka"],
      bandwagon: ["Steve Nash|nash","Jason Kidd|kidd","Kyrie Irving|kyrie","Jason Terry|jet","Michael Finley","Anthony Davis|ad|the brow"],
      starter: ["Tyson Chandler","Shawn Marion|the matrix","Josh Howard","Jerry Stackhouse","Kristaps Porzingis|porzingis","Tim Hardaway Jr.","Dereck Lively II|dereck lively|lively","P.J. Washington","Daniel Gafford","Klay Thompson|klay","Monta Ellis","Antoine Walker","Devin Harris","Caron Butler","Chandler Parsons","Jalen Brunson|brunson","Spencer Dinwiddie","Rajon Rondo"],
      film: ["Erick Dampier","DeShawn Stevenson","Peja Stojakovic|peja","Brendan Haywood","J.J. Barea|barea","Raef LaFrentz","Antawn Jamison","Juwan Howard","Keith Van Horn","Brian Cardinal","Ian Mahinmi","Corey Brewer","Vince Carter|vinsanity","O.J. Mayo","Darren Collison","Chris Kaman","Elton Brand","Jose Calderon","Samuel Dalembert","Wesley Matthews"],
      deep: ["Deron Williams","Dwight Powell","Harrison Barnes","Seth Curry","Nerlens Noel","Dennis Smith Jr.","Dorian Finney-Smith","Maxi Kleber","Josh Richardson","Christian Wood","Reggie Bullock","Josh Green","Naji Marshall","Max Christie","Dante Exum","Jaden Hardy","Quentin Grimes","Grant Williams","Cooper Flagg|flagg","D'Angelo Russell"],
      hail: ["Eduardo Najera","Shawn Bradley","Avery Johnson","Nick Van Exel","Raja Bell","Tariq Abdul-Wahad","Danny Fortson","Marquis Daniels","Pavel Podkolzin","Darrell Armstrong","Rawle Marshall","Austin Croshere","Devean George","Jamaal Magloire","Gerald Green","James Singleton","Rodrigue Beaubois","Alexis Ajinca","Lamar Odom","Delonte West","Dahntay Jones","Brandan Wright","Bernard James","Jae Crowder","Shane Larkin","Richard Jefferson","Al-Farouq Aminu","Charlie Villanueva","JaVale McGee","Salah Mejri","Yogi Ferrell","Boban Marjanovic|boban","Courtney Lee","Willie Cauley-Stein","Trey Burke","Moses Brown","Frank Ntilikina","Theo Pinson","Davis Bertans","Markieff Morris","A.J. Lawson","Olivier-Maxence Prosper","Brandon Williams"]
    }
  },
  {
    id: "team-nuggets", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Denver Nuggets since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Nikola Jokic|jokic|joker","Carmelo Anthony|melo"],
      bandwagon: ["Jamal Murray","Allen Iverson|iverson|ai","Aaron Gordon|ag","Michael Porter Jr.|mpj","Chauncey Billups|billups"],
      starter: ["Kenyon Martin","Nene","Marcus Camby","J.R. Smith|jr smith","Ty Lawson","Danilo Gallinari|gallinari","Kentavious Caldwell-Pope|kcp","Bruce Brown","Christian Braun","Paul Millsap|millsap","Will Barton","Andre Iguodala|iggy","Gary Harris","Kenneth Faried|manimal","Wilson Chandler","Arron Afflalo","Russell Westbrook|westbrook|russ","Cameron Johnson"],
      film: ["Andre Miller","Earl Boykins","Voshon Lenard","Nikoloz Tskitishvili|skita","Antonio McDyess","Raef LaFrentz","Chris Andersen|birdman","Linas Kleiza","Eduardo Najera","Anthony Carter","Chucky Atkins","Timofey Mozgov","JaVale McGee","Corey Brewer","Randy Foye","Jusuf Nurkic","Emmanuel Mudiay"],
      deep: ["Darrell Arthur","Mason Plumlee","Malik Beasley","Juancho Hernangomez","Trey Lyles","Torrey Craig","Monte Morris","Jerami Grant","Facundo Campazzo","JaMychal Green","DeMarcus Cousins","Jeff Green","Reggie Jackson","Peyton Watson","Zeke Nnaji","Julian Strawther","Dario Saric","Jonas Valanciunas"],
      hail: ["James Posey","George McCloud","Ryan Bowen","Mark Pope","Francisco Elson","DerMarr Johnson","Greg Buckner","Yakhouba Diawara","Reggie Evans","Steven Hunter","Renaldo Balkman","Johan Petro","Al Harrington","Gary Forbes","Kosta Koufos","Jordan Hamilton","Rudy Fernandez","Quincy Miller","Evan Fournier","Anthony Randolph","Nate Robinson","Erick Green","Joffrey Lauvergne","Jameer Nelson","Mike Miller","Axel Toupane","Jarnell Stokes","Richard Jefferson","Isaiah Thomas","Bol Bol","Vlatko Cancar","PJ Dozier","Markus Howard","Davon Reed","Bones Hyland","Ish Smith","Thomas Bryant","Collin Gillespie","Hunter Tyson","Justin Holiday","DeAndre Jordan","Jalen Pickett","Trey Alexander","Spencer Jones"]
    }
  },
  {
    id: "team-pistons", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Detroit Pistons since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Cade Cunningham|cade","Ben Wallace|big ben"],
      bandwagon: ["Chauncey Billups|billups","Rasheed Wallace|sheed","Richard Hamilton|rip hamilton|rip","Tayshaun Prince|tayshaun","Grant Hill","Blake Griffin"],
      starter: ["Andre Drummond|drummond","Jerry Stackhouse","Allen Iverson|iverson|ai","Greg Monroe","Brandon Jennings","Reggie Jackson","Tobias Harris","Rodney Stuckey","Jalen Duren","Ausar Thompson","Jaden Ivey","Derrick Rose","Antonio McDyess","Ben Gordon","Josh Smith","Malik Beasley"],
      film: ["Lindsey Hunter","Jon Barry","Corliss Williamson","Mehmet Okur","Elden Campbell","Carlos Delfino","Jason Maxiell","Charlie Villanueva","Will Bynum","Jonas Jerebko","Austin Daye","Kyle Singler","Brandon Knight","Kentavious Caldwell-Pope|kcp","Marcus Morris","Stanley Johnson","Ish Smith","Jon Leuer"],
      deep: ["Avery Bradley","Luke Kennard","Langston Galloway","Reggie Bullock","Christian Wood","Bruce Brown","Svi Mykhailiuk","Jerami Grant","Saddiq Bey","Isaiah Stewart|stewart","Killian Hayes","Cory Joseph","Bojan Bogdanovic","Alec Burks","Tim Hardaway Jr.","Simone Fontecchio","Dennis Schroder","Ron Holland"],
      hail: ["Jerome Williams","Michael Curry","Darko Milicic|darko","Bob Sura","Clifford Robinson","Chucky Atkins","Mike James","Darvin Ham","Carlos Arroyo","Dale Davis","Nazr Mohammed","Chris Webber","Flip Murray","Arron Afflalo","Amir Johnson","Walter Herrmann","Kwame Brown","Chris Wilcox","DaJuan Summers","Tracy McGrady","Khris Middleton","Viacheslav Kravtsov","Peyton Siva","Tony Mitchell","Gigi Datome","Caron Butler","Spencer Dinwiddie","Darrun Hilliard","Henry Ellenson","Boban Marjanovic","Anthony Tolliver","Dwight Buycks","Zaza Pachulia","Wayne Ellington","Thon Maker","Sekou Doumbouya","Sviatoslav Mykhailiuk","Josh Jackson","Hamidou Diallo","Frank Jackson","Kevin Knox","Marvin Bagley III|marvin bagley","James Wiseman","Marcus Sasser","Quentin Grimes","Paul Reed"]
    }
  },
  {
    id: "team-warriors", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Golden State Warriors since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Stephen Curry|steph curry|steph","Klay Thompson|klay","Kevin Durant|kd"],
      bandwagon: ["Draymond Green|draymond","Andre Iguodala|iggy","Jimmy Butler|jimmy buckets","Baron Davis|boom dizzle","Monta Ellis"],
      starter: ["Andrew Wiggins|wiggins","Jordan Poole","DeMarcus Cousins|boogie","Andrew Bogut|bogut","Harrison Barnes","Shaun Livingston","Jonathan Kuminga|kuminga","Kevon Looney|looney","David Lee","Stephen Jackson|captain jack","Jason Richardson|j rich","Antawn Jamison","Gary Payton II|gary payton 2|gp2","Chris Paul|cp3","Buddy Hield|hield","D'Angelo Russell|dangelo russell","Brandin Podziemski|podz"],
      film: ["Zaza Pachulia|zaza","JaVale McGee","David West","Marreese Speights|mo buckets","Leandro Barbosa","Festus Ezeli","Brandon Rush","Jarrett Jack","Carl Landry","Mike Dunleavy Jr.","Troy Murphy","Gilbert Arenas|agent zero","Al Harrington","Matt Barnes","Corey Maggette","Dorell Wright","Richard Jefferson","Ian Clark","Patrick McCaw"],
      deep: ["Nick Young|swaggy p","Quinn Cook","Jordan Bell","Damian Jones","Alec Burks","Eric Paschall","Kelly Oubre Jr.|kelly oubre","Otto Porter Jr.","Nemanja Bjelica","Moses Moody","Donte DiVincenzo","Dario Saric","Trayce Jackson-Davis","Kyle Anderson","De'Anthony Melton","Quinten Post","Al Horford"],
      hail: ["Larry Hughes","Bob Sura","Chris Mills","Mookie Blaylock","Erick Dampier","Danny Fortson","Adonal Foyle","Speedy Claxton","Calbert Cheaney","Mickael Pietrus","Ike Diogu","Andris Biedrins","Kelenna Azubuike","Anthony Morrow","Marco Belinelli","C.J. Watson","Anthony Randolph","Acie Law","Reggie Williams","Vladimir Radmanovic","Jeremy Tyler","Nate Robinson","Kent Bazemore","Charles Jenkins","Ognjen Kuzmic","Justin Holiday","James Michael McAdoo","Anderson Varejao","Briante Weber","Omri Casspi","Jacob Evans","Damion Lee","Juan Toscano-Anderson|jta","Mychal Mulder","Anthony Lamb","Ty Jerome","Cory Joseph","Gui Santos","Pat Spencer"]
    }
  },
  {
    id: "team-rockets", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Houston Rockets since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["James Harden|harden","Yao Ming|yao"],
      bandwagon: ["Tracy McGrady|t-mac|tmac","Steve Francis|stevie franchise","Chris Paul|cp3","Dwight Howard|dwight","Russell Westbrook|westbrook|russ","Alperen Sengun|sengun","Kevin Durant|kd"],
      starter: ["Clint Capela|capela","Eric Gordon","Jalen Green","Fred VanVleet|fvv","Trevor Ariza|ariza","Shane Battier|battier","Cuttino Mobley|cat mobley","Luis Scola|scola","Kevin Martin","Jeremy Lin|linsanity","Chandler Parsons","Jabari Smith Jr.|jabari smith","Amen Thompson","Dillon Brooks","Patrick Beverley|pat bev"],
      film: ["P.J. Tucker","Carl Landry","Aaron Brooks","Rafer Alston","Ron Artest|metta world peace","Dikembe Mutombo|mutombo","Juwan Howard","Bonzi Wells","Kyle Lowry","Chuck Hayes","Goran Dragic","Courtney Lee","Omer Asik","Terrence Jones","Josh Smith","Corey Brewer","Ty Lawson","Michael Beasley","Lou Williams","Ryan Anderson"],
      deep: ["Nene","Gerald Green","Austin Rivers","Danuel House","Kenneth Faried","Ben McLemore","Robert Covington","John Wall","Christian Wood","Victor Oladipo","Kevin Porter Jr.","Jae'Sean Tate","Kenyon Martin Jr.","Tari Eason","Jeff Green","Steven Adams","Reed Sheppard","Cam Whitmore","Jock Landale"],
      hail: ["Moochie Norris","Kelvin Cato","Walt Williams","Glen Rice","Eddie Griffin","Bostjan Nachbar","Jim Jackson","Mark Jackson","Maurice Taylor","Jon Barry","Charlie Ward","Bob Sura","David Wesley","Ryan Bowen","Stromile Swift","Luther Head","Mike James","Steve Novak","Brent Barry","Von Wafer","Brian Cook","Jordan Hill","Jared Jeffries","Hasheem Thabeet","Patrick Patterson","Marcus Morris","Jonny Flynn","Greg Smith","Donatas Motiejunas","Isaiah Canaan","Troy Daniels","Francisco Garcia","Omri Casspi","Joey Dorsey","K.J. McDaniels","Montrezl Harrell","Sam Dekker","Bobby Brown","Luc Mbah a Moute","Tarik Black","Iman Shumpert","Thabo Sefolosha","Sterling Brown","David Nwaba","Daniel Theis","Josh Christopher","Usman Garuba","Garrison Mathews","Boban Marjanovic","Aaron Holiday","Nate Williams","Jermaine Samuels"]
    }
  },
  {
    id: "team-pacers", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Indiana Pacers since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Reggie Miller","Tyrese Haliburton|haliburton"],
      bandwagon: ["Paul George|pg13","Jermaine O'Neal","Ron Artest|metta world peace","Victor Oladipo|oladipo","Pascal Siakam|siakam","Danny Granger"],
      starter: ["Roy Hibbert|hibbert","David West","George Hill","Lance Stephenson|born ready","Myles Turner","Domantas Sabonis|sabonis","Stephen Jackson","Jamaal Tinsley","Al Harrington","Andrew Nembhard","Aaron Nesmith","Bennedict Mathurin|mathurin","T.J. McConnell","Obi Toppin","Malcolm Brogdon","Bojan Bogdanovic","Thaddeus Young","Jeff Teague","Mike Dunleavy Jr.","Troy Murphy"],
      film: ["Jalen Rose","Austin Croshere","Jeff Foster","Fred Jones","Anthony Johnson","Brad Miller","Scot Pollard","Sarunas Jasikevicius","Marquis Daniels","Shawne Williams","T.J. Ford","Brandon Rush","Dahntay Jones","Tyler Hansbrough","Darren Collison","Leandro Barbosa","Ian Mahinmi"],
      deep: ["Luis Scola","C.J. Miles","Rodney Stuckey","Monta Ellis","Al Jefferson","Cory Joseph","Doug McDermott","Justin Holiday","T.J. Warren","Edmond Sumner","Isaiah Jackson","Chris Duarte","Buddy Hield","Jalen Smith","Ben Sheppard","Jarace Walker"],
      hail: ["Jonathan Bender","Primoz Brezec","Kenny Anderson","James Jones","Stephen Graham","Orien Greene","David Harrison","Kareem Rush","Travis Diener","Josh McRoberts","Solomon Jones","A.J. Price","Lou Amundson","Gerald Green","Orlando Johnson","Sam Young","Chris Copeland","Evan Turner","Rasual Butler","Damjan Rudez","Lavoy Allen","Shayne Whittington","Solomon Hill","Glenn Robinson III","Rakeem Christmas","Joe Young","Kevin Seraphin","Aaron Brooks","Alize Johnson","Kelan Martin","Oshae Brissett","Goga Bitadze","Terry Taylor","Kendall Brown","Jordan Nwora","Johnny Furphy","Quenton Jackson"]
    }
  },
  {
    id: "team-clippers", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the LA Clippers since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Kawhi Leonard|kawhi","Chris Paul|cp3","Blake Griffin"],
      bandwagon: ["Paul George|pg13","James Harden|harden","DeAndre Jordan|deandre","Elton Brand","Lou Williams|sweet lou","Russell Westbrook|westbrook|russ"],
      starter: ["Corey Maggette","Sam Cassell","Chris Kaman|kaman","J.J. Redick|jj redick","Jamal Crawford","Patrick Beverley|pat bev","Montrezl Harrell","Ivica Zubac|zubac","Norman Powell","Lamar Odom","Darius Miles","Quentin Richardson","Eric Gordon","Baron Davis|boom dizzle","Cuttino Mobley","Marcus Morris","Reggie Jackson","Terance Mann","Nicolas Batum|batum","Bradley Beal"],
      film: ["Michael Olowokandi|kandi man","Keyon Dooling","Jeff McInnis","Andre Miller","Marko Jaric","Bobby Simmons","Shaun Livingston","Tim Thomas","Al Thornton","Mardy Collins","Ricky Davis","Marcus Camby","Rasual Butler","Mo Williams","Randy Foye","Caron Butler","Kenyon Martin","Chauncey Billups","Eric Bledsoe","Matt Barnes","Ryan Hollins","Willie Green","Grant Hill","Glen Davis"],
      deep: ["Spencer Hawes","Hedo Turkoglu","Austin Rivers","Wesley Johnson","Cole Aldrich","Raymond Felton","Danilo Gallinari|gallinari","Tobias Harris","Avery Bradley","Landry Shamet","JaMychal Green","Moe Harkless","Paul Pierce","Serge Ibaka","Luke Kennard","Robert Covington","Amir Coffey","Mason Plumlee","Kris Dunn","Derrick Jones Jr.","Kevin Porter Jr.","John Collins","Brook Lopez","Kobe Sanders"],
      hail: ["Brian Skinner","Eric Piatkowski","Earl Boykins","Chris Wilcox","Melvin Ely","Zeljko Rebraca","Daniel Ewing","Yaroslav Korolev","James Singleton","Paul Davis","Guillermo Diaz","Brevin Knight","Smush Parker","Jason Hart","Mike Taylor","Steve Novak","Craig Smith","Drew Gooden","Travis Outlaw","Brian Cook","Ike Diogu","Trey Thompkins","Reggie Evans","Ronny Turiaf","Byron Mullens","Darius Morris","Jared Dudley","Antawn Jamison","Dahntay Jones","Danny Granger","Jordan Farmar","Ekpe Udoh","Chris Douglas-Roberts","Jordan Hamilton","Jeff Green","Pablo Prigioni","Lance Stephenson","Josh Smith","Jeff Ayres","Branden Dawson","Brice Johnson","Diamond Stone","Alan Anderson","Marreese Speights","Brandon Bass","Sindarius Thornwell","Milos Teodosic","Jawun Evans","Tyrone Wallace","Sam Dekker","C.J. Williams","Boban Marjanovic","Mike Scott","Garrett Temple","Jerome Robinson","Johnathan Motley","Rodney McGruder","Mfiondu Kabengele","Patrick Patterson","Joakim Noah","Daniel Oturu","Jay Scrubb","Brandon Boston Jr.","Jason Preston","Moses Brown","Bones Hyland","P.J. Tucker","Kobe Brown","Jordan Miller","Mo Bamba","Kai Jones","Drew Eubanks","Patty Mills"]
    }
  },
  {
    id: "team-lakers", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Los Angeles Lakers since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Kobe Bryant|kobe","LeBron James|lebron|king james","Shaquille O'Neal|shaq"],
      bandwagon: ["Anthony Davis|ad|the brow","Pau Gasol|pau","Luka Doncic|luka","Russell Westbrook|westbrook|russ","Dwight Howard|dwight","Austin Reaves|reaves","Steve Nash|nash"],
      starter: ["Derek Fisher|fisher","Lamar Odom|odom","Ron Artest|metta world peace|metta","Andrew Bynum|bynum","Rajon Rondo|rondo","D'Angelo Russell|dangelo russell|d-lo","Julius Randle|randle","Brandon Ingram|ingram","Lonzo Ball|lonzo","Kyle Kuzma|kuzma","Jordan Clarkson|clarkson","Carmelo Anthony|melo","Kentavious Caldwell-Pope|kcp","Rui Hachimura|hachimura","Gary Payton|the glove","Karl Malone|the mailman","Robert Horry|big shot rob|horry","Rick Fox","Glen Rice","Horace Grant"],
      film: ["Shannon Brown","Sasha Vujacic|the machine","Jordan Farmar","Luke Walton","Trevor Ariza","Devean George","Brian Shaw","Smush Parker","Kwame Brown","Chris Mihm","Vladimir Radmanovic","Caron Butler","Ronny Turiaf","Mitch Richmond","Mark Madsen","Slava Medvedev","Steve Blake","Matt Barnes","Ramon Sessions","Antawn Jamison","Jodie Meeks","Nick Young|swaggy p","Wesley Johnson","Ed Davis","Carlos Boozer","Jeremy Lin","Lou Williams","Roy Hibbert","Larry Nance Jr.","Timofey Mozgov","Luol Deng","Ivica Zubac","Brook Lopez","Josh Hart"],
      deep: ["Michael Beasley","Lance Stephenson","JaVale McGee","Tyson Chandler","Danny Green","Avery Bradley","Alex Caruso|caruso","Markieff Morris","Dennis Schroder","Montrezl Harrell","Marc Gasol","Andre Drummond","Talen Horton-Tucker","Malik Monk","Patrick Beverley","Thomas Bryant","Lonnie Walker IV","Troy Brown Jr.","Jarred Vanderbilt","Malik Beasley","Mo Bamba","Gabe Vincent","Taurean Prince","Max Christie","Christian Wood","Dalton Knecht","Jaxson Hayes","Dorian Finney-Smith","Bronny James|bronny","Deandre Ayton","Marcus Smart","Jake LaRavia"],
      hail: ["Isaiah Rider","Stanislav Medvedenko","Samaki Walker","Lindsey Hunter","Tyronn Lue","Mike Penberthy","Greg Foster","Kareem Rush","Jannero Pargo","Brian Cook","Bryon Russell","Chucky Atkins","Brian Grant","Jumaine Jones","Tierre Brown","Von Wafer","Aaron McKie","Maurice Evans","Coby Karl","Ira Newble","Javaris Crittenton","Adam Morrison","Josh Powell","DJ Mbenga","Theo Ratliff","Joe Smith","Derrick Caracter","Andrew Goudelock","Troy Murphy","Jason Kapono","Darius Morris","Devin Ebanks","Christian Eyenga","Earl Clark","Robert Sacre","Chris Duhon","Jordan Hill","Ryan Kelly","Xavier Henry","Kendall Marshall","Elias Harris","Ronnie Price","Tarik Black","Jabari Brown","Marcelo Huertas","Anthony Brown","Corey Brewer","Thomas Robinson","David Nwaba","Tyler Ennis","Gary Payton II","Channing Frye","Isaiah Thomas","Moritz Wagner","Svi Mykhailiuk","Johnathan Williams","Reggie Bullock","Mike Muscala","Quinn Cook","Troy Daniels","DeMarcus Cousins","J.R. Smith","Dion Waiters","Kostas Antetokounmpo","Wesley Matthews","Ben McLemore","Kendrick Nunn","Wenyen Gabriel","Stanley Johnson","Juan Toscano-Anderson","Scotty Pippen Jr.","Cole Swider","Damian Jones","Sterling Brown","Davon Reed","Shaquille Harrison","D'Moi Hodge","Cam Reddish","Skylar Mays","Jalen Hood-Schifino","Colin Castleton","Maxwell Lewis","Spencer Dinwiddie","Jordan Goodwin","Christian Koloko","Trey Jemison","Shake Milton","Alex Len","Adou Thiero"]
    }
  },
  {
    id: "team-grizzlies", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Memphis Grizzlies since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Ja Morant|ja"],
      bandwagon: ["Marc Gasol|big spain","Zach Randolph|z-bo|zbo","Mike Conley","Pau Gasol|pau","Jaren Jackson Jr.|jaren jackson|jjj","Tony Allen|grindfather"],
      starter: ["Desmond Bane|bane","Rudy Gay","Shane Battier|battier","Mike Miller","Jason Williams|white chocolate","Dillon Brooks","Steven Adams","Brandon Clarke","Zach Edey|edey","Kyle Lowry","O.J. Mayo","Courtney Lee","Vince Carter|vinsanity","Matt Barnes","Kyle Anderson","Ziaire Williams","Kentavious Caldwell-Pope|kcp","Jaylen Wells","Santi Aldama","Scotty Pippen Jr."],
      film: ["Shareef Abdur-Rahim","Mike Bibby","Stromile Swift","Lorenzen Wright","James Posey","Bonzi Wells","Earl Watson","Eddie Jones","Damon Stoudamire","Hakim Warrick","Juan Carlos Navarro","Darko Milicic","Hasheem Thabeet","Allen Iverson","Darrell Arthur","Sam Young","Marreese Speights","Jerryd Bayless","Quincy Pondexter","Tayshaun Prince","Ed Davis","Jon Leuer","Kosta Koufos","Jeff Green"],
      deep: ["Beno Udrih","Mario Chalmers","Lance Stephenson","Chandler Parsons","JaMychal Green","Wade Baldwin","Andrew Harrison","Wayne Selden","Garrett Temple","Shelvin Mack","Jonas Valanciunas","Delon Wright","Justise Winslow","De'Anthony Melton","Tyus Jones","Grayson Allen","Xavier Tillman","John Konchar","Luke Kennard","Derrick Rose","Marcus Smart","GG Jackson","Vince Williams Jr.","Jake LaRavia","Cam Spencer"],
      hail: ["Michael Dickerson","Bryant Reeves|big country","Isaac Austin","Grant Long","Brevin Knight","Wesley Person","Jake Tsakalidis","Dahntay Jones","Antonio Burks","Ryan Humphrey","Brian Cardinal","Bo Outlaw","Tarence Kinsey","Chucky Atkins","Andre Brown","Javaris Crittenton","Steven Hunter","Greivis Vasquez","Xavier Henry","Josh Selby","Gilbert Arenas","Dante Cunningham","Wayne Ellington","Tony Wroten","Keyon Dooling","Nick Calathes","Jamaal Franklin","Jordan Adams","Russ Smith","Troy Daniels","Deyonta Davis","Ivan Rabb","MarShon Brooks","Kobi Simmons","Jevon Carter","Bruno Caboclo","Jarell Martin","Yuta Watanabe","Josh Jackson","Gorgui Dieng","Killian Tillie","Kenneth Lofton Jr.","David Roddy","Lamar Stevens","Jordan Goodwin","Trey Jemison","Jay Huff","Yuki Kawamura|kawamura"]
    }
  },
  {
    id: "team-heat", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Miami Heat since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Dwyane Wade|d-wade|dwade","LeBron James|lebron|king james","Jimmy Butler|jimmy buckets"],
      bandwagon: ["Shaquille O'Neal|shaq","Chris Bosh|bosh","Bam Adebayo|bam","Alonzo Mourning|zo","Udonis Haslem|haslem","Tyler Herro|herro","Ray Allen"],
      starter: ["Goran Dragic|dragic","Hassan Whiteside|whiteside","Mario Chalmers|chalmers","Shane Battier|battier","Eddie Jones","Antoine Walker","Gary Payton|the glove","Lamar Odom","Kyle Lowry","Duncan Robinson","Caleb Martin","Max Strus","Gabe Vincent","Jason Williams","Tim Hardaway","Brian Grant","Mike Miller","Norman Powell","Andrew Wiggins|wiggins","Jaime Jaquez Jr.|jaime jaquez|jaquez"],
      film: ["Anthony Mason","Caron Butler","Rasual Butler","Dorell Wright","Michael Beasley","Jermaine O'Neal","Quentin Richardson","Mike Bibby","Joel Anthony","Chris Andersen|birdman","James Jones","Rashard Lewis","Norris Cole","Josh McRoberts","Luol Deng","Gerald Green","Joe Johnson","Dion Waiters","Wayne Ellington","Josh Richardson"],
      deep: ["Rodney McGruder","Justise Winslow","Kelly Olynyk","James Johnson","Kendrick Nunn","Jae Crowder","Andre Iguodala|iggy","Victor Oladipo","P.J. Tucker","Trevor Ariza","Dewayne Dedmon","Markieff Morris","Kevin Love","Cody Zeller","Terry Rozier|scary terry","Thomas Bryant","Haywood Highsmith","Nikola Jovic","Kel'el Ware","Pelle Larsson","Davion Mitchell","Simone Fontecchio"],
      hail: ["Bruce Bowen","Dan Majerle","Otis Thorpe","Rod Strickland","Vladimir Stepania","Malik Allen","Samaki Walker","Eddie House","Rafer Alston","Keyon Dooling","Damon Jones","Christian Laettner","Shandon Anderson","Michael Doleac","Jason Kapono","Ricky Davis","Penny Hardaway","Earl Barron","Smush Parker","Chris Quinn","Mark Blount","Shawn Marion","Marcus Banks","Jamaal Magloire","Yakhouba Diawara","Daequan Cook","Carlos Arroyo","Dexter Pittman","Juwan Howard","Erick Dampier","Zydrunas Ilgauskas","Terrel Harris","Ronny Turiaf","Jarvis Varnado","Greg Oden","Toney Douglas","Shabazz Napier","Danny Granger","Henry Walker","Zoran Dragic","Tyler Johnson","Amar'e Stoudemire","Briante Weber","Okaro White","Derrick Williams","Luke Babbitt","Jordan Mickey","Yante Maten","KZ Okpala","Chris Silva","Precious Achiuwa","Avery Bradley","Omer Yurtseven","Dru Smith","Orlando Robinson","Jamal Cain","Alondes Williams","Cole Swider","Delon Wright","Patty Mills","Alec Burks","Josh Christopher","Isaiah Stevens","Keshad Johnson"]
    }
  },
  {
    id: "team-bucks", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Milwaukee Bucks since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Giannis Antetokounmpo|giannis|greek freak"],
      bandwagon: ["Khris Middleton|middleton","Damian Lillard|dame|lillard","Ray Allen","Jrue Holiday","Brook Lopez|splash mountain","Michael Redd"],
      starter: ["Glenn Robinson|big dog","Sam Cassell","Bobby Portis|portis","Eric Bledsoe","Andrew Bogut|bogut","Brandon Jennings","Jabari Parker","Malcolm Brogdon","Pat Connaughton","Grayson Allen","Monta Ellis","Kyle Korver","Mike Dunleavy Jr.","Jason Terry|jet","Myles Turner","Kyle Kuzma|kuzma","Gary Trent Jr."],
      film: ["Tim Thomas","Ervin Johnson","Toni Kukoc","Anthony Mason","Gary Payton","Desmond Mason","Joe Smith","Maurice Williams|mo williams","T.J. Ford","Jamaal Magloire","Charlie Villanueva","Bobby Simmons","Dan Gadzuric","Richard Jefferson","Luc Mbah a Moute","Ersan Ilyasova","Carlos Delfino","John Salmons","Corey Maggette","Drew Gooden","Stephen Jackson","Larry Sanders","J.J. Redick","Ekpe Udoh","Samuel Dalembert","Gary Neal","O.J. Mayo","Zaza Pachulia","Caron Butler","Brandon Knight"],
      deep: ["John Henson","Michael Carter-Williams","Greg Monroe","Jerryd Bayless","Matthew Dellavedova","Tony Snell","Mirza Teletovic","Thon Maker","Sterling Brown","George Hill","Nikola Mirotic","Wesley Matthews","Marvin Williams","Donte DiVincenzo","D.J. Augustin","Bryn Forbes","P.J. Tucker","Jeff Teague","Jordan Nwora","Jevon Carter","Joe Ingles","Jae Crowder","Cameron Payne","Patrick Beverley","Taurean Prince","AJ Green","Andre Jackson Jr.","Kevin Porter Jr.","Ryan Rollins"],
      hail: ["Lindsey Hunter","Scott Williams","Darvin Ham","Mark Pope","Jason Caffey","Marcus Haislip","Brian Skinner","Keith Van Horn","Mike James","Damon Jones","Jiri Welsch","Ruben Patterson","Steve Blake","Charlie Bell","Royal Ivey","Kurt Thomas","Hakim Warrick","Jerry Stackhouse","Keyon Dooling","Chris Douglas-Roberts","Jon Brockman","Larry Drew II","Tobias Harris","Doron Lamb","Ish Smith","Nate Wolters","Kendall Marshall","Jared Dudley","Jorge Gutierrez","Rashad Vaughn","Johnny O'Bryant","Steve Novak","Miles Plumlee","Damien Inglis","Greivis Vasquez","Tyler Ennis","D.J. Wilson","Christian Wood","Tim Frazier","Robin Lopez","Dragan Bender","Frank Mason","Sam Merrill","Torrey Craig","Thanasis Antetokounmpo|thanasis","Justin Jackson","Semi Ojeleye","Rodney Hood","Lindell Wigginton","MarJon Beauchamp","Goran Dragic","Meyers Leonard","Chris Livingston","TyTy Washington","Malik Beasley","Delon Wright","Stanley Umude"]
    }
  },
  {
    id: "team-wolves", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Minnesota Timberwolves since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Kevin Garnett|kg","Anthony Edwards|ant|ant-man"],
      bandwagon: ["Karl-Anthony Towns|kat|towns","Kevin Love","Rudy Gobert|gobert","Andrew Wiggins|wiggins","Jimmy Butler|jimmy buckets","Julius Randle|randle"],
      starter: ["Sam Cassell","Latrell Sprewell|spree","Ricky Rubio|rubio","Wally Szczerbiak","Al Jefferson|big al","Zach LaVine|lavine","D'Angelo Russell|dangelo russell","Mike Conley","Jaden McDaniels","Naz Reid","Jeff Teague","Kevin Martin","Nikola Pekovic|pekovic","Derrick Rose","Donte DiVincenzo"],
      film: ["Terrell Brandon","Chauncey Billups","Troy Hudson","Trenton Hassell","Mark Madsen","Michael Olowokandi","Marcus Banks","Randy Foye","Ryan Gomes","Rashad McCants","Corey Brewer","Craig Smith","Mike Miller","Jonny Flynn","Wayne Ellington","Ryan Hollins","Darko Milicic","Anthony Randolph","Michael Beasley","Luke Ridnour","J.J. Barea","Derrick Williams","Andrei Kirilenko","Chase Budinger","Alexey Shved","Dante Cunningham","Gorgui Dieng"],
      deep: ["Shabazz Muhammad","Tayshaun Prince","Andre Miller","Tyus Jones","Kris Dunn","Taj Gibson","Jamal Crawford","Josh Okogie","Dario Saric","Robert Covington","Jarrett Culver","Malik Beasley","Juancho Hernangomez","Jordan McLaughlin","Jarred Vanderbilt","Patrick Beverley","Kyle Anderson","Taurean Prince","Nickeil Alexander-Walker|naw","Monte Morris","Joe Ingles","Rob Dillingham"],
      hail: ["Rasho Nesterovic","Joe Smith","Felipe Lopez","Igor Rakocevic","Gary Trent","Kendall Gill","Ervin Johnson","Fred Hoiberg","Eddie Griffin","Mark Blount","Justin Reed","Bracey Wright","Marko Jaric","Theo Ratliff","Juwan Howard","Gerald Green","Chris Richard","Sebastian Telfair","Rodney Carney","Kevin Ollie","Bobby Brown","Damien Wilkins","Oleksiy Pecherov","Sundiata Gaines","Lazar Hayward","Martell Webster","Anthony Tolliver","Brad Miller","Malcolm Lee","Greg Stiemsma","Lou Amundson","Mickael Gelabale","Chris Johnson","Ronny Turiaf","Robbie Hummel","A.J. Price","Glenn Robinson III","Anthony Bennett","Lorenzo Brown","Gary Neal","Damjan Rudez","Nemanja Bjelica","Adreian Payne","Cole Aldrich","Brandon Rush","Jordan Hill","Marcus Georges-Hunt","Aaron Brooks","Anthony Brown","Shabazz Napier","Jake Layman","Jaylen Nowell","Kelan Martin","Ed Davis","Juan Hernangomez","Leandro Bolmaro","Luka Garza","Wendell Moore Jr.","Josh Minott","Leonard Miller","Terrence Shannon Jr.","Joan Beringer"]
    }
  },
  {
    id: "team-pelicans", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the New Orleans Pelicans (or Hornets) since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Zion Williamson|zion","Anthony Davis|ad|the brow","Chris Paul|cp3"],
      bandwagon: ["Brandon Ingram|ingram","Jrue Holiday","DeMarcus Cousins|boogie","David West","CJ McCollum|mccollum","Baron Davis|boom dizzle","Dejounte Murray"],
      starter: ["Tyson Chandler","Peja Stojakovic|peja","Eric Gordon","Ryan Anderson","Herb Jones|herbert jones","Trey Murphy III|trey murphy","Jonas Valanciunas","Jamal Mashburn","P.J. Brown","Jordan Poole","Lonzo Ball|lonzo","Josh Hart","Nikola Mirotic|mirotic","Rajon Rondo","Steven Adams","Larry Nance Jr.","Yves Missi","Derik Queen"],
      film: ["Emeka Okafor","Trevor Ariza","Marco Belinelli","Darren Collison","Jarrett Jack","Carl Landry","Al-Farouq Aminu","Greivis Vasquez","Austin Rivers","Tyreke Evans","Omer Asik","Quincy Pondexter","Norris Cole","Dante Cunningham","Alexis Ajinca","Ish Smith","Solomon Hill","E'Twaun Moore","Tim Frazier","Darius Miller"],
      deep: ["Elfrid Payton","Julius Randle","Frank Jackson","Kenrich Williams","Jaxson Hayes","Nickeil Alexander-Walker|naw","Nicolo Melli","Eric Bledsoe","Devonte' Graham|devonte graham","Garrett Temple","Jose Alvarado|grand theft alvarado","Naji Marshall","Kira Lewis Jr.","Dyson Daniels","Daniel Theis","Javonte Green","Kevon Looney"],
      hail: ["Jamaal Magloire","David Wesley","George Lynch","Darrell Armstrong","Stacey Augmon","Elden Campbell","Courtney Alexander","Rodney Rogers","Chris Andersen","J.R. Smith","Rasual Butler","Speedy Claxton","Desmond Mason","Bobby Jackson","Devin Brown","Hilton Armstrong","Julian Wright","Mike James","Mo Peterson","Melvin Ely","Bonzi Wells","Jannero Pargo","Antonio Daniels","James Posey","Marcus Thornton","Darius Songaila","Aaron Gray","Jason Smith","Willie Green","Chris Kaman","Xavier Henry","Robin Lopez","Lance Thomas","Brian Roberts","Anthony Morrow","Jeff Withey","Luke Babbitt","Jimmer Fredette","Toney Douglas","Bryce Dejean-Jones","Kendrick Perkins","Alonzo Gee","Langston Galloway","Buddy Hield","Cheick Diallo","Quinn Cook","Terrence Jones","Jordan Crawford","Ian Clark","DeAndre Liggins","Wesley Johnson","Christian Wood","Jahlil Okafor","JJ Redick","Derrick Favors","Wenyen Gabriel","James Johnson","Willy Hernangomez","Didi Louzada","Tomas Satoransky","Dereon Seabron","E.J. Liddell","Jordan Hawkins","Karlo Matkovic","Antonio Reeves","Brandon Boston Jr.","Jamal Cain","Bruce Brown"]
    }
  },
  {
    id: "team-knicks", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the New York Knicks since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Carmelo Anthony|melo","Jalen Brunson|brunson"],
      bandwagon: ["Amar'e Stoudemire|amare|stat","Patrick Ewing|ewing","Julius Randle|randle","Karl-Anthony Towns|kat|towns","Kristaps Porzingis|porzingis","Stephon Marbury|starbury","Jeremy Lin|linsanity"],
      starter: ["Latrell Sprewell|spree","Allan Houston","Mikal Bridges|bridges","OG Anunoby|anunoby","Josh Hart","Mitchell Robinson","RJ Barrett","Tyson Chandler","J.R. Smith|jr smith","Raymond Felton","Derrick Rose","Joakim Noah","Immanuel Quickley|quickley","Jamal Crawford","Zach Randolph|z-bo|zbo","Steve Francis","David Lee","Nate Robinson","Eddy Curry","Iman Shumpert","Isaiah Hartenstein|hartenstein"],
      film: ["Marcus Camby","Kurt Thomas","Larry Johnson","Glen Rice","Charlie Ward","Shandon Anderson","Clarence Weatherspoon","Othella Harrington","Howard Eisley","Michael Doleac","Antonio McDyess","Keith Van Horn","Dikembe Mutombo|mutombo","Tim Thomas","Penny Hardaway","Quentin Richardson","Jalen Rose","Malik Rose","Jerome James","Channing Frye","Renaldo Balkman","Mardy Collins","Jared Jeffries","Wilson Chandler","Chris Duhon","Al Harrington","Larry Hughes","Tracy McGrady","Danilo Gallinari","Toney Douglas","Landry Fields","Shawne Williams","Chauncey Billups","Baron Davis","Steve Novak","Jason Kidd","Pablo Prigioni","Kenyon Martin"],
      deep: ["Andrea Bargnani","Metta World Peace","Tim Hardaway Jr.","Jose Calderon","Langston Galloway","Arron Afflalo","Robin Lopez","Kyle O'Quinn","Courtney Lee","Brandon Jennings","Enes Kanter|enes freedom","Frank Ntilikina","Trey Burke","Emmanuel Mudiay","Kevin Knox","Allonzo Trier","Dennis Smith Jr.","Marcus Morris","Bobby Portis","Elfrid Payton","Alec Burks","Nerlens Noel","Taj Gibson","Evan Fournier","Kemba Walker|kemba","Obi Toppin","Cam Reddish","Quentin Grimes","Donte DiVincenzo","Bojan Bogdanovic","Precious Achiuwa","Miles McBride","Cameron Payne","Landry Shamet","Jordan Clarkson","Guerschon Yabusele"],
      hail: ["Lavor Postell","Erick Strickland","Travis Knight","Mark Jackson","Felton Spencer","Frank Williams","Mike Sweetney","DerMarr Johnson","Moochie Norris","Vin Baker","Nazr Mohammed","Trevor Ariza","Jackie Butler","Qyntel Woods","Matt Barnes","Maurice Taylor","Kelvin Cato","Fred Jones","Randolph Morris","Demetris Nichols","Mouhamed Sene","Anthony Roberson","Sergio Rodriguez","Eddie House","Bill Walker","Earl Barron","Ronny Turiaf","Andy Rautins","Roger Mason","Shelden Williams","Jerome Jordan","Mike Bibby","Josh Harrellson","Jeremy Tyler","Toure' Murry","Ronnie Brewer","James White","Chris Copeland","Beno Udrih","Cole Aldrich","Shannon Brown","Lou Amundson","Jason Smith","Alexey Shved","Quincy Acy","Cleanthony Early","Lance Thomas","Ricky Ledo","Sasha Vujacic","Derrick Williams","Kevin Seraphin","Maurice Ndour","Mindaugas Kuzminskas","Willy Hernangomez","Ron Baker","Chasson Randle","Michael Beasley","Damyean Dotson","Troy Williams","Luke Kornet","Isaiah Hicks","Mario Hezonja","Noah Vonleh","Kadeem Allen","Ignas Brazdeikis","Reggie Bullock","Wayne Ellington","Theo Pinson","Austin Rivers","Jericho Sims","Ryan Arcidiacono","Svi Mykhailiuk","Isaiah Roby","Jacob Toppin","DaQuan Jeffries","Charlie Brown Jr.","Mamadi Diakite","Duane Washington Jr.","Shake Milton","Ariel Hukporti","Pacome Dadiet","Tyler Kolek","Delon Wright","P.J. Tucker","Mohamed Diawara"]
    }
  },
  {
    id: "team-thunder", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Oklahoma City Thunder (or Seattle SuperSonics) since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Kevin Durant|kd","Russell Westbrook|westbrook|russ","Shai Gilgeous-Alexander|sga|shai"],
      bandwagon: ["James Harden|harden","Ray Allen","Chet Holmgren|chet","Jalen Williams|j dub|jdub","Carmelo Anthony|melo","Paul George|pg13","Gary Payton|the glove"],
      starter: ["Serge Ibaka|ibaka","Steven Adams","Rashard Lewis","Chris Paul|cp3","Luguentz Dort|lu dort|dort","Josh Giddey|giddey","Kendrick Perkins|perk","Thabo Sefolosha","Dennis Schroder","Enes Kanter|enes freedom","Victor Oladipo|oladipo","Domantas Sabonis|sabonis","Nick Collison","Isaiah Hartenstein|hartenstein","Alex Caruso|caruso","Cason Wallace","Aaron Wiggins","Kenrich Williams"],
      film: ["Jeff Green","Brent Barry","Vladimir Radmanovic","Desmond Mason","Earl Watson","Luke Ridnour","Chris Wilcox","Johan Petro","Damien Wilkins","Delonte West","Kurt Thomas","Wally Szczerbiak","Eric Maynor","Nenad Krstic","Daequan Cook","Derek Fisher","Reggie Jackson","Hasheem Thabeet","Kevin Martin","Jeremy Lamb","Andre Roberson","Anthony Morrow","Dion Waiters","D.J. Augustin","Kyle Singler","Mitch McGary","Cameron Payne"],
      deep: ["Randy Foye","Joffrey Lauvergne","Jerami Grant","Alex Abrines","Doug McDermott","Taj Gibson","Patrick Patterson","Raymond Felton","Terrance Ferguson","Corey Brewer","Markieff Morris","Nerlens Noel","Danilo Gallinari|gallinari","Darius Bazley","Mike Muscala","Hamidou Diallo","Theo Maledon","Al Horford","George Hill","Tre Mann","Aleksej Pokusevski|poku","Jeremiah Robinson-Earl","Derrick Favors","Ousmane Dieng","Jaylin Williams","Isaiah Joe","Gordon Hayward","Ajay Mitchell"],
      hail: ["Vin Baker","Patrick Ewing","Jerome James","Ruben Patterson","Shammond Williams","Kenny Anderson","Calvin Booth","Ansu Sesay","Predrag Drobnjak","Ronald Murray","Reggie Evans","Antonio Daniels","Mateen Cleaves","Danny Fortson","Ibrahim Kutluay","Robert Swift","Mikki Moore","Mouhamed Sene","Andreas Glyniadakis","Mickael Gelabale","Kevin Ollie","Joe Smith","Chucky Atkins","Shaun Livingston","D.J. White","Byron Mullens","Kyle Weaver","Mustafa Shakur","Etan Thomas","B.J. Mullens","Nazr Mohammed","Royal Ivey","Lazar Hayward","Cole Aldrich","DeAndre Liggins","Ryan Gomes","Grant Jerrett","Sebastian Telfair","Caron Butler","Perry Jones","Josh Huestis","Semaj Christon","Ish Smith","Steve Novak","Dakari Johnson","Abdel Nader","Deonte Burton","Jaylen Hoard","Justin Patton","Admiral Schofield","Charlie Brown Jr.","Vit Krejci","Lindy Waters III","Olivier Sarr","Eugene Omoruyi","Jared Butler","Dillon Jones","Adam Flagler","Branden Carlson","Nikola Topic"]
    }
  },
  {
    id: "team-magic", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Orlando Magic since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Dwight Howard|dwight","Paolo Banchero|paolo|banchero"],
      bandwagon: ["Tracy McGrady|t-mac|tmac","Grant Hill","Franz Wagner","Vince Carter|vinsanity","Jameer Nelson|jameer","Nikola Vucevic|vucevic"],
      starter: ["Hedo Turkoglu|hedo","Rashard Lewis","Aaron Gordon|ag","Victor Oladipo|oladipo","Evan Fournier","Jalen Suggs|suggs","Wendell Carter Jr.","Steve Francis","Elfrid Payton","Terrence Ross","Markelle Fultz","Mo Bamba","Cole Anthony","Jonathan Isaac","Desmond Bane|bane","Kentavious Caldwell-Pope|kcp","J.J. Redick|jj redick"],
      film: ["Darrell Armstrong","Mike Miller","Pat Garrity","Bo Outlaw","Horace Grant","Shawn Kemp","Juwan Howard","Drew Gooden","Gordan Giricek","Tyronn Lue","Cuttino Mobley","Kelvin Cato","Doug Christie","Keyon Dooling","Trevor Ariza","Carlos Arroyo","Darko Milicic","Keith Bogans","Tony Battie","Mickael Pietrus","Marcin Gortat","Courtney Lee","Anthony Johnson","Rafer Alston","Matt Barnes","Ryan Anderson","Brandon Bass","Jason Williams","Gilbert Arenas","Glen Davis|big baby","Earl Clark","Arron Afflalo"],
      deep: ["Tobias Harris","Andrew Nicholson","Kyle O'Quinn","E'Twaun Moore","Channing Frye","Luke Ridnour","Ben Gordon","Willie Green","Serge Ibaka","Jeff Green","Bismack Biyombo","D.J. Augustin","Jodie Meeks","Jonathon Simmons","Shelvin Mack","Khem Birch","Michael Carter-Williams","Al-Farouq Aminu","Chuma Okeke","R.J. Hampton","Moritz Wagner|moe wagner","Gary Harris","Caleb Houstan","Anthony Black","Jett Howard","Goga Bitadze","Joe Ingles","Tristan da Silva","Tyus Jones"],
      hail: ["Don Reid","Troy Hudson","Andrew DeClercq","Steven Hunter","Jud Buechler","Ryan Humphrey","Jacque Vaughn","Rod Strickland","Reece Gaines","Zaza Pachulia","Mario Kasun","DeShawn Stevenson","Stacey Augmon","Travis Diener","James Augustine","Adonal Foyle","Jeremy Richardson","Jason Richardson","Quentin Richardson","Chris Duhon","Malik Allen","Daniel Orton","Larry Hughes","Ish Smith","DeAndre Liggins","Josh McRoberts","Gustavo Ayon","Maurice Harkless","Beno Udrih","Doron Lamb","Ronnie Price","Romero Osby","Dewayne Dedmon","Devyn Marble","Shabazz Napier","Jason Smith","Mario Hezonja","C.J. Watson","Damjan Rudez","Arinze Onuaku","Patricio Garino","Marreese Speights","Wesley Iwundu","Adreian Payne","Rodney Purvis","Jamel Artis","Jerian Grant","Jarell Martin","Isaiah Briscoe","Amile Jefferson","Troy Caupain","Melvin Frazier","Gary Clark","James Ennis","Dwayne Bacon","Ignas Brazdeikis","Robin Lopez","Admiral Schofield","Devin Cannady","Kevon Harris","Jay Scrubb","Trevelin Queen","Cory Joseph","Mac McClung"]
    }
  },
  {
    id: "team-sixers", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Philadelphia 76ers since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Allen Iverson|iverson|ai","Joel Embiid|embiid"],
      bandwagon: ["Tyrese Maxey|maxey","Ben Simmons","James Harden|harden","Andre Iguodala|iggy","Tobias Harris","Jimmy Butler|jimmy buckets","Paul George|pg13"],
      starter: ["Dikembe Mutombo|mutombo","Chris Webber|c-webb","Elton Brand","Andre Miller","Jrue Holiday","Thaddeus Young","Lou Williams|sweet lou","Kyle Korver","Samuel Dalembert","Aaron McKie","Eric Snow","Theo Ratliff","Michael Carter-Williams|mcw","Robert Covington","J.J. Redick|jj redick","Al Horford","Seth Curry","Danny Green","Kelly Oubre Jr.|kelly oubre","Kyle Lowry","P.J. Tucker","De'Anthony Melton","Caleb Martin","VJ Edgecombe|edgecombe"],
      film: ["Tyrone Hill","George Lynch","Toni Kukoc","Matt Harpring","Derrick Coleman","Keith Van Horn","Kenny Thomas","Glenn Robinson","John Salmons","Marc Jackson","Willie Green","Steven Hunter","Rodney Carney","Reggie Evans","Louis Williams","Marreese Speights","Jason Smith","Royal Ivey","Jason Kapono","Andres Nocioni","Evan Turner","Spencer Hawes","Jodie Meeks","Nikola Vucevic","Andrew Bynum","Dorell Wright","Nick Young","Kwame Brown","Damien Wilkins","Lavoy Allen","Tony Wroten","Hollis Thompson","Nerlens Noel","K.J. McDaniels","Henry Sims","Luc Mbah a Moute"],
      deep: ["Jahlil Okafor","Ish Smith","Isaiah Canaan","T.J. McConnell|tj mcconnell","Nik Stauskas","Dario Saric","Richaun Holmes","Gerald Henderson","Sergio Rodriguez","Markelle Fultz","Amir Johnson","Ersan Ilyasova","Marco Belinelli","Wilson Chandler","Landry Shamet","Mike Scott","Jonathon Simmons","James Ennis","Boban Marjanovic","Josh Richardson","Matisse Thybulle|thybulle","Furkan Korkmaz","Shake Milton","Dwight Howard","George Hill","Georges Niang","Andre Drummond","Paul Reed|bball paul","Montrezl Harrell","Jalen McDaniels","Nicolas Batum","Cameron Payne","Buddy Hield","Eric Gordon","Guerschon Yabusele","Jared McCain","Quentin Grimes","Justin Edwards"],
      hail: ["Pepe Sanchez","Raja Bell","Jumaine Jones","Speedy Claxton","Todd MacCulloch","Corie Blount","Monty Williams","Greg Buckner","Efthimios Rentzias","Sam Clancy","Brian Skinner","Amal McCaskill","Kevin Ollie","Matt Barnes","Louis Amundson","Alan Henderson","Calvin Booth","Herbert Hill","Primoz Brezec","Shavlik Randolph","Kareem Rush","Donyell Marshall","Francisco Elson","Craig Brackins","Darius Songaila","Tony Battie","Sam Young","Charles Jenkins","Arnett Moultrie","James Anderson","Tim Ohlbrecht","Darius Morris","Lorenzo Brown","Elliot Williams","Daniel Orton","Byron Mullens","Jarvis Varnado","Casper Ware","Jason Richardson","Malcolm Thomas","Alexey Shved","Furkan Aldemir","JaKarr Sampson","Thomas Robinson","Glenn Robinson III","Jerami Grant","Christian Wood","Kendall Marshall","Phil Pressey","Carl Landry","Tiago Splitter","Shawn Long","Timothe Luwawu-Cabarrot","Jerryd Bayless","Justin Anderson","Trevor Booker","James Michael McAdoo","Demetrius Jackson","Zhaire Smith","Jonah Bolden","Haywood Highsmith","Raul Neto","Kyle O'Quinn","Norvel Pelle","Alec Burks","Ryan Broekhoff","Tony Bradley","Isaiah Joe","Dakota Mathias","Charles Bassey","Aaron Henry","Jaden Springer","Danuel House","Patrick Beverley","Kenyon Martin Jr.","Mo Bamba","KJ Martin","Ricky Council IV","Terquavion Smith","Lester Quinones","Adem Bona","Jeff Dowtin Jr.","Chuma Okeke","Oshae Brissett","Lonnie Walker IV","Jabari Walker","Trendon Watford"]
    }
  },
  {
    id: "team-suns", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Phoenix Suns since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Steve Nash|nash","Devin Booker|booker","Kevin Durant|kd"],
      bandwagon: ["Amar'e Stoudemire|amare|stat","Shawn Marion|the matrix","Chris Paul|cp3","Bradley Beal|beal","Stephon Marbury|starbury","Deandre Ayton|ayton"],
      starter: ["Shaquille O'Neal|shaq","Jason Kidd|kidd","Grant Hill","Goran Dragic|dragic","Eric Bledsoe","Mikal Bridges|bridges","Leandro Barbosa|the brazilian blur","Raja Bell","Boris Diaw","Jason Richardson","Penny Hardaway|anfernee hardaway","Channing Frye","Jared Dudley","Isaiah Thomas","Cameron Johnson","Jae Crowder","Dario Saric","Jusuf Nurkic","Grayson Allen","Royce O'Neale","Jalen Green","Dillon Brooks","Mark Williams"],
      film: ["Tom Gugliotta","Clifford Robinson","Rodney Rogers","Tony Delk","Joe Johnson","Quentin Richardson","Kurt Thomas","Eddie House","James Jones","Tim Thomas","Marcus Banks","Brian Skinner","Gordan Giricek","Matt Barnes","Robin Lopez","Lou Amundson","Hakim Warrick","Josh Childress","Vince Carter|vinsanity","Marcin Gortat","Mickael Pietrus","Aaron Brooks","Sebastian Telfair","Michael Beasley","Wesley Johnson","Luis Scola","Markieff Morris","Marcus Morris","P.J. Tucker","Gerald Green","Miles Plumlee","Brandon Knight","T.J. Warren","Alex Len","Tyson Chandler"],
      deep: ["Archie Goodwin","Mirza Teletovic","Ronnie Price","Marquese Chriss","Dragan Bender","Tyler Ulis","Josh Jackson","Troy Daniels","Elfrid Payton","Kelly Oubre Jr.","Ricky Rubio","Aron Baynes","Frank Kaminsky","Cameron Payne","Torrey Craig","Landry Shamet","Langston Galloway","Abdel Nader","Jalen Smith","JaVale McGee","Bismack Biyombo","Damion Lee","Josh Okogie","Terrence Ross","Eric Gordon","Bol Bol","Drew Eubanks","Ryan Dunn","Oso Ighodaro","Collin Gillespie","Monte Morris","Nick Richards","Tyus Jones"],
      hail: ["Jake Voskuhl","Bo Outlaw","Casey Jacobsen","Alton Ford","Jahidi White","Zarko Cabarkapa","Scott Williams","Dan Langhi","Paul Shirley","Steven Hunter","Walter McCarty","Jim Jackson","Pat Burke","Nikoloz Tskitishvili","Sean Marks","D.J. Strawberry","Alando Tucker","Louis Amundson","Taylor Griffin","Earl Clark","Dwayne Jones","Garret Siler","Zabian Dowdell","Gani Lawal","Jermaine O'Neal","Kendall Marshall","Shannon Brown","Diante Garrett","Hamed Haddadi","Luke Zeller","Ish Smith","Dionte Christmas","Viacheslav Kravtsov","Emeka Okafor","Anthony Tolliver","Tyler Ennis","Zoran Dragic","Earl Barron","Reggie Bullock","Jon Leuer","Bryce Cotton","Sonny Weems","John Jenkins","Chase Budinger","Jordan McRae","Alan Williams","Derrick Jones Jr.","Alec Peters","Mike James","Davon Reed","Shaquille Harrison","Isaiah Canaan","Tyler Johnson","De'Anthony Melton","Richaun Holmes","Jimmer Fredette","Ray Spalding","Jamal Crawford","Ty Jerome","Elie Okobo","Cheick Diallo","Jevon Carter","E'Twaun Moore","Ish Wainright","Duane Washington Jr.","Saben Lee","Darius Bazley","Jock Landale","Chimezie Metu","Udoka Azubuike","Keita Bates-Diop","Yuta Watanabe","David Roddy","Thaddeus Young","Theo Maledon","Mason Plumlee","Khaman Maluach","Rasheer Fleming"]
    }
  },
  {
    id: "team-blazers", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Portland Trail Blazers since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Damian Lillard|dame|lillard"],
      bandwagon: ["LaMarcus Aldridge|aldridge","Brandon Roy|b-roy","CJ McCollum|mccollum","Rasheed Wallace|sheed","Scottie Pippen|pippen"],
      starter: ["Greg Oden|oden","Jusuf Nurkic|nurkic","Anfernee Simons|ant simons","Zach Randolph|z-bo|zbo","Nicolas Batum|batum","Wesley Matthews","Jerami Grant","Scoot Henderson|scoot","Shaedon Sharpe","Deni Avdija|avdija","Robin Lopez","Damon Stoudamire|mighty mouse","Bonzi Wells","Jrue Holiday","Marcus Camby","Jermaine O'Neal","Carmelo Anthony|melo","Donovan Clingan|clingan"],
      film: ["Steve Smith","Arvydas Sabonis|sabonis","Dale Davis","Derek Anderson","Ruben Patterson","Shareef Abdur-Rahim","Darius Miles","Nick Van Exel","Sebastian Telfair","Martell Webster","Travis Outlaw","Jarrett Jack","Joel Przybilla","Channing Frye","Steve Blake","Rudy Fernandez","Jerryd Bayless","Andre Miller","Gerald Wallace","Raymond Felton","J.J. Hickson","Nolan Smith","Meyers Leonard","Will Barton","Mo Williams","Thomas Robinson"],
      deep: ["Allen Crabbe","Al-Farouq Aminu","Ed Davis","Maurice Harkless|moe harkless","Mason Plumlee","Evan Turner","Shabazz Napier","Zach Collins","Seth Curry","Rodney Hood","Enes Kanter","Hassan Whiteside","Gary Trent Jr.","Norman Powell","Robert Covington","Larry Nance Jr.","Josh Hart","Jabari Walker","Matisse Thybulle","Toumani Camara","Kris Murray","Dalano Banton","Duop Reath","Deandre Ayton","Rayan Rupert"],
      hail: ["Stacey Augmon","Rod Strickland","Detlef Schrempf","Erick Barkley","Qyntel Woods","Ruben Boumtje-Boumtje","Theo Ratliff","Viktor Khryapa","Ime Udoka","Juan Dixon","Sergio Rodriguez","Raef LaFrentz","Jamaal Magloire","Fred Jones","Josh McRoberts","Dante Cunningham","Patty Mills","Armon Johnson","Luke Babbitt","Elliot Williams","Craig Smith","Jamal Crawford","Hasheem Thabeet","Kurt Thomas","Ronnie Price","Victor Claver","Sasha Pavlovic","Joel Freeland","Earl Watson","Dorell Wright","Chris Kaman","Alonzo Gee","Tim Frazier","Pat Connaughton","Gerald Henderson","Noah Vonleh","Luis Montero","Cliff Alexander","Jake Layman","Caleb Swanigan","Wade Baldwin","Georgios Papagiannis","Nassir Little","Jaylen Hoard","Mario Hezonja","Trevor Ariza","CJ Elleby","Harry Giles","Keljin Blevins","Ben McLemore","Dennis Smith Jr.","Tony Snell","Cody Zeller","Elijah Hughes","Greg Brown III","Drew Eubanks","Trendon Watford","Keon Johnson","Justise Winslow","Brandon Williams","Jeenathan Williams","Chance Comanche","Ibou Badji","Moses Brown","Ashton Hagans","Skylar Mays","Justin Minaya","Bryce McGowens"]
    }
  },
  {
    id: "team-kings", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Sacramento Kings since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["De'Aaron Fox|fox|swipa","Chris Webber|c-webb"],
      bandwagon: ["DeMarcus Cousins|boogie","Domantas Sabonis|sabonis","Peja Stojakovic|peja","Mike Bibby|bibby","Tyreke Evans","Zach LaVine|lavine","DeMar DeRozan|derozan"],
      starter: ["Vlade Divac|vlade","Kevin Martin","Ron Artest|metta world peace","Isaiah Thomas","Rudy Gay","Malik Monk|monk","Keegan Murray","Buddy Hield","Harrison Barnes","Bobby Jackson","Doug Christie","Brad Miller","Hedo Turkoglu","Jason Williams|white chocolate","Darren Collison","Marvin Bagley III|marvin bagley","Tyrese Haliburton|haliburton","Rajon Rondo","Kevin Huerter|huerter","Bogdan Bogdanovic|bogdanovic"],
      film: ["Scot Pollard","Gerald Wallace","Jon Barry","Lawrence Funderburke","Nick Anderson","Keon Clark","Anthony Peeler","Darius Songaila","Maurice Evans","Cuttino Mobley","Bonzi Wells","Kenny Thomas","Shareef Abdur-Rahim","Corliss Williamson","John Salmons","Mikki Moore","Francisco Garcia","Quincy Douby","Spencer Hawes","Beno Udrih","Jason Thompson","Andres Nocioni","Omri Casspi","Carl Landry","Samuel Dalembert","Marcus Thornton","Jimmer Fredette","J.J. Hickson","Chuck Hayes","Aaron Brooks","James Johnson","Patrick Patterson","Ben McLemore","Derrick Williams","Ray McCallum","Reggie Evans","Nik Stauskas","Kosta Koufos","Marco Belinelli","Caron Butler"],
      deep: ["Willie Cauley-Stein","Arron Afflalo","Garrett Temple","Ty Lawson","Matt Barnes","Anthony Tolliver","Skal Labissiere","Georgios Papagiannis","Frank Mason","Justin Jackson","George Hill","Zach Randolph","Vince Carter|vinsanity","Iman Shumpert","Nemanja Bjelica","Yogi Ferrell","Harry Giles","Cory Joseph","Trevor Ariza","Dewayne Dedmon","Richaun Holmes","Kent Bazemore","Jabari Parker","Alex Len","Hassan Whiteside","Terence Davis","Davion Mitchell","Chimezie Metu","Moe Harkless","Tristan Thompson","Donte DiVincenzo","Trey Lyles","Sasha Vezenkov","Chris Duarte","Keon Ellis","Jalen Slawson","Colby Jones","JaVale McGee","Jordan Ford","Mason Jones","Jake LaRavia","Doug McDermott","Isaac Jones","Devin Carter","Dennis Schroder","Russell Westbrook|westbrook|russ","Nique Clifford"],
      hail: []
    }
  },
  {
    id: "team-spurs", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the San Antonio Spurs since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Tim Duncan|duncan|the big fundamental","Victor Wembanyama|wemby|wembanyama"],
      bandwagon: ["Tony Parker|tp","Manu Ginobili|manu","Kawhi Leonard|kawhi","David Robinson|the admiral","LaMarcus Aldridge|aldridge","DeMar DeRozan|derozan","De'Aaron Fox|fox"],
      starter: ["Bruce Bowen|bowen","Robert Horry|big shot rob|horry","Danny Green","Patty Mills","Boris Diaw","Tiago Splitter","Stephon Castle|castle","Dejounte Murray","Derrick White","Keldon Johnson","Devin Vassell","Michael Finley","Stephen Jackson","Richard Jefferson","Pau Gasol","Rudy Gay","Kyle Anderson","Chris Paul|cp3","Harrison Barnes","Dylan Harper"],
      film: ["Malik Rose","Antonio Daniels","Avery Johnson","Sean Elliott","Terry Porter","Derek Anderson","Steve Kerr","Speedy Claxton","Steve Smith","Kevin Willis","Rasho Nesterovic","Hedo Turkoglu","Nazr Mohammed","Brent Barry","Beno Udrih","Nick Van Exel","Fabricio Oberto","Jacque Vaughn","Francisco Elson","Kurt Thomas","Ime Udoka","Roger Mason","Matt Bonner|red mamba","Antonio McDyess","Theo Ratliff","George Hill","DeJuan Blair","Gary Neal","James Anderson","Cory Joseph","Nando De Colo","Aron Baynes","Marco Belinelli","Jeff Ayres","Austin Daye","Reggie Williams","David West"],
      deep: ["Jonathon Simmons","Kevin Martin","Andre Miller","Ray McCallum","Boban Marjanovic","Dewayne Dedmon","Davis Bertans","Bryn Forbes","Joffrey Lauvergne","Brandon Paul","Lonnie Walker IV","Jakob Poeltl|poeltl","Quincy Pondexter","Dante Cunningham","Chimezie Metu","Trey Lyles","Thaddeus Young","Drew Eubanks","Tre Jones","Josh Richardson","Doug McDermott","Jeremy Sochan|sochan","Zach Collins","Isaiah Roby","Malaki Branham","Blake Wesley","Julian Champagnie","Sandro Mamukelashvili","Cedi Osman","Charles Bassey","Sidy Cissoko","Bismack Biyombo","Jordan McLaughlin","Luke Kornet","Kelly Olynyk"],
      hail: []
    }
  },
  {
    id: "team-raptors", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Toronto Raptors since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Vince Carter|vinsanity","Kawhi Leonard|kawhi"],
      bandwagon: ["Kyle Lowry|lowry","DeMar DeRozan|derozan","Chris Bosh|bosh","Pascal Siakam|siakam","Scottie Barnes|barnes","Fred VanVleet|fvv"],
      starter: ["OG Anunoby|anunoby","Jonas Valanciunas|valanciunas","Serge Ibaka|ibaka","Marc Gasol","Danny Green","Norman Powell","Terrence Ross","Andrea Bargnani|bargnani","Jose Calderon","Antonio Davis","Morris Peterson","Tracy McGrady|t-mac","Jalen Rose","Rudy Gay","Gary Trent Jr.","Immanuel Quickley|quickley","RJ Barrett","Jakob Poeltl|poeltl","Brandon Ingram|ingram","Gradey Dick"],
      film: ["Charles Oakley","Alvin Williams","Dell Curry","Keon Clark","Jerome Williams","Hakeem Olajuwon|hakeem","Lindsey Hunter","Donyell Marshall","Chris Jefferies","Rafer Alston","Loren Woods","Matt Bonner","Mike James","Charlie Villanueva","Joey Graham","Anthony Parker","T.J. Ford","Juan Dixon","Jason Kapono","Carlos Delfino","Jermaine O'Neal","Shawn Marion","Hedo Turkoglu","Jarrett Jack","Amir Johnson","Sonny Weems","Leandro Barbosa","Reggie Evans","Linas Kleiza","Jerryd Bayless","Ed Davis","James Johnson","Gary Forbes","Aaron Gray","Landry Fields","Alan Anderson","John Lucas III","Greivis Vasquez","Patrick Patterson"],
      deep: ["Lou Williams","Tyler Hansbrough","Bismack Biyombo","Cory Joseph","Luis Scola","DeMarre Carroll","Lucas Nogueira","Delon Wright","P.J. Tucker","C.J. Miles","Jeremy Lin","Patrick McCaw","Chris Boucher","Rondae Hollis-Jefferson","Stanley Johnson","Matt Thomas","Aron Baynes","DeAndre' Bembry","Precious Achiuwa","Khem Birch","Thaddeus Young","Christian Koloko","Jalen McDaniels","Dennis Schroder","Kelly Olynyk","Bruce Brown","Ochai Agbaji","Jamal Shead","Ja'Kobe Walter","Davion Mitchell","Collin Murray-Boyles","Sandro Mamukelashvili"],
      hail: []
    }
  },
  {
    id: "team-jazz", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Utah Jazz since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["Donovan Mitchell|spida","Karl Malone|the mailman","John Stockton|stockton"],
      bandwagon: ["Deron Williams|d will","Gordon Hayward|hayward","Rudy Gobert|gobert","Lauri Markkanen|markkanen","Carlos Boozer|boozer","Mehmet Okur|memo"],
      starter: ["Andrei Kirilenko|ak47|ak-47","Paul Millsap|millsap","Al Jefferson|big al","Joe Ingles|jingles","Derrick Favors","Mike Conley","Jordan Clarkson|clarkson","Bojan Bogdanovic|bogdanovic","Rodney Hood","Ricky Rubio","George Hill","Kyle Korver","Enes Kanter|enes freedom","Matt Harpring","Collin Sexton|sexton","Walker Kessler|kessler","Keyonte George","John Collins","Royce O'Neale"],
      film: ["Bryon Russell","Donyell Marshall","John Starks","Greg Ostertag","Jarron Collins","DeShawn Stevenson","Raja Bell","Calbert Cheaney","Keon Clark","Raul Lopez","Gordan Giricek","Kirk Snyder","Devin Brown","Ronnie Brewer","C.J. Miles","Jason Hart","Kosta Koufos","Wesley Matthews","Ronnie Price","Devin Harris","Earl Watson","Josh Howard","Jamaal Tinsley","Alec Burks","Marvin Williams","Mo Williams","Randy Foye","Jeremy Evans","Trey Burke","Richard Jefferson","John Lucas III","Brandon Rush","Trevor Booker","Dante Exum","Elijah Millsap","Trey Lyles","Raul Neto","Shelvin Mack","Chris Johnson"],
      deep: ["Boris Diaw","Joe Johnson","Jonas Jerebko","Thabo Sefolosha","Jae Crowder","Grayson Allen","Georges Niang","Emmanuel Mudiay","Ed Davis","Jeff Green","Miye Oni","Juwan Morgan","Rayjon Tucker","Hassan Whiteside","Rudy Gay","Danuel House","Eric Paschall","Jared Butler","Udoka Azubuike","Malik Beasley","Jarred Vanderbilt","Kelly Olynyk","Talen Horton-Tucker","Simone Fontecchio","Ochai Agbaji","Kris Dunn","Leandro Bolmaro","Johnny Juzang","Omer Yurtseven","Taylor Hendricks","Brice Sensabaugh","Cody Williams","Isaiah Collier","Kyle Filipowski","Svi Mykhailiuk","KJ Martin","Ace Bailey","Kevin Love"],
      hail: []
    }
  },
  {
    id: "team-wizards", cat: "teams", diff: "easy",
    prompt: "Name a player who has played for the Washington Wizards since 2000.",
    note: "Played for them in the 2000-01 season or later.",
    tiers: {
      chalk: ["John Wall|wall","Bradley Beal|beal","Michael Jordan|mj"],
      bandwagon: ["Gilbert Arenas|agent zero","Russell Westbrook|westbrook|russ","Kristaps Porzingis|porzingis","Caron Butler|tuff juice","Antawn Jamison"],
      starter: ["Larry Hughes","Jerry Stackhouse","Marcin Gortat|gortat","Otto Porter Jr.|otto porter","Kyle Kuzma|kuzma","Jordan Poole","Brendan Haywood","Nene","Kwame Brown","Rasheed Wallace|sheed","Richard Hamilton|rip","Chris Webber","Juwan Howard","Mitch Richmond","Rod Strickland","DeShawn Stevenson","Andray Blatche","Trevor Ariza","Paul Pierce","Spencer Dinwiddie","Davis Bertans","Daniel Gafford","Deni Avdija|avdija","Alex Sarr|alexandre sarr|sarr","Bilal Coulibaly|coulibaly","Kyshawn George"],
      film: ["Tyronn Lue","Christian Laettner","Etan Thomas","Jahidi White","Popeye Jones","Bryon Russell","Charles Oakley","Juan Dixon","Jared Jeffries","Steve Blake","Laron Profit","Jarvis Hayes","Roger Mason","Anthony Peeler","Antonio Daniels","Michael Ruffin","Calvin Booth","Darius Songaila","Nick Young","Oleksiy Pecherov","JaVale McGee","Mike James","Randy Foye","Fabricio Oberto","Al Thornton","Kirk Hinrich","Josh Howard","Yi Jianlian","Hilton Armstrong","Trevor Booker","Jordan Crawford","Rashard Lewis","Chris Singleton","Jan Vesely","Shelvin Mack","Kevin Seraphin","Emeka Okafor","Martell Webster","Jason Collins","Garrett Temple","Al Harrington","Andre Miller","Drew Gooden","Kris Humphries","Ramon Sessions","Kelly Oubre Jr.","Jared Dudley","Alan Anderson"],
      deep: ["Gary Neal","Markieff Morris","Marcus Thornton","Ian Mahinmi","Tomas Satoransky","Jason Smith","Mike Scott","Jodie Meeks","Tim Frazier","Austin Rivers","Dwight Howard","Jeff Green","Jabari Parker","Bobby Portis","Thomas Bryant","Troy Brown Jr.","Rui Hachimura|hachimura","Isaac Bonga","Moritz Wagner","Ish Smith","Shabazz Napier","Jerome Robinson","Robin Lopez","Raul Neto","Garrison Mathews","Alex Len","Kentavious Caldwell-Pope|kcp","Montrezl Harrell","Aaron Holiday","Corey Kispert","Delon Wright","Monte Morris","Will Barton","Taj Gibson","Jordan Goodwin","Johnny Davis","Tyus Jones","Marvin Bagley III","Landry Shamet","Anthony Gill","Richaun Holmes","Malcolm Brogdon","Jonas Valanciunas","AJ Johnson","Marcus Smart","Khris Middleton","CJ McCollum","Cam Whitmore","Tre Johnson"],
      hail: []
    }
  },
  {
    id: "col-mich", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at Michigan (like Chris Webber).",
    note: "Played college ball for the Wolverines.",
    tiers: {
      chalk: ["Chris Webber|c-webb","Juwan Howard"],
      bandwagon: ["Jalen Rose","Tim Hardaway Jr.","Glenn Robinson III","Caris LeVert|levert"],
      starter: ["Trey Burke","Nik Stauskas","Mitch McGary","Jordan Poole","Franz Wagner","Moritz Wagner","Jamal Crawford","Maurice Taylor","Rumeal Robinson","Glen Rice"],
      film: ["Robert Traylor|tractor","Manny Harris","Darius Morris","D.J. Wilson","Duncan Robinson"],
      deep: ["Isaiah Livers","Kobe Bufkin","Jett Howard","Caleb Houstan","Cazzie Russell","Phil Hubbard","Rudy Tomjanovich|rudy t"],
      hail: ["Jimmy King","Ekpe Udoh","Derrick Walton","Ignas Brazdeikis"]
    }
  },
  {
    id: "col-msu", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at Michigan State (like Magic Johnson).",
    note: "Played college ball for the Spartans.",
    tiers: {
      chalk: ["Magic Johnson","Draymond Green|draymond"],
      bandwagon: ["Jaren Jackson Jr.|jaren jackson|jjj","Steve Smith","Zach Randolph|z-bo|zbo","Jason Richardson|j rich","Miles Bridges"],
      starter: ["Gary Harris","Scott Skiles","Mateen Cleaves","Morris Peterson","Adreian Payne","Shannon Brown","Denzel Valentine","Deyonta Davis","Charlie Bell","Paul Davis"],
      film: ["Greg Kelser","Jay Vincent","Sam Vincent","Shawn Respert","Eric Snow","Alan Anderson","Maurice Ager"],
      deep: ["Branden Dawson","Kevin Willis","Xavier Tillman","Aaron Henry","Max Christie"],
      hail: []
    }
  },
  {
    id: "col-ariz", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at Arizona (like Andre Iguodala).",
    note: "Played college ball for the Wildcats.",
    tiers: {
      chalk: ["Andre Iguodala|iggy","Gilbert Arenas|agent zero"],
      bandwagon: ["Deandre Ayton|ayton","Aaron Gordon|ag","Lauri Markkanen|markkanen","Jason Terry|jet","Mike Bibby","Richard Jefferson|rj"],
      starter: ["Steve Kerr|kerr","Sean Elliott","Damon Stoudamire|mighty mouse","Jerryd Bayless","Derrick Williams","Stanley Johnson","Rondae Hollis-Jefferson","Channing Frye","Luke Walton","Bennedict Mathurin|mathurin","Nick Johnson","Allonzo Trier","Josh Green","Zeke Nnaji"],
      film: ["Khalid Reeves","Michael Wright","Hassan Adams","Chase Budinger","Jordan Hill","Solomon Hill","Grant Jerrett","T.J. McConnell|tj mcconnell","Rawle Alkins","Dalen Terry","Christian Koloko"],
      deep: ["Pelle Larsson","Miles Simon","Michael Dickerson","Jud Buechler","Brian Williams|bison dele","Chris Mills","Salim Stoudamire","Marcus Williams"],
      hail: []
    }
  },
  {
    id: "col-texas", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at Texas (like Kevin Durant).",
    note: "Played college ball for the Longhorns.",
    tiers: {
      chalk: ["Kevin Durant|kd"],
      bandwagon: ["LaMarcus Aldridge|aldridge","D.J. Augustin","Myles Turner","Tristan Thompson","Avery Bradley"],
      starter: ["T.J. Ford","Daniel Gibson|boobie","Jarrett Allen","Mo Bamba","Cory Joseph","Jordan Hamilton","P.J. Tucker","Royal Ivey","Dexter Pittman","Damion James","Isaiah Taylor","Jaxson Hayes","Greg Brown III","Tre Johnson"],
      film: [],
      deep: ["Travis Mays","Chris Mihm","Maurice Evans"],
      hail: []
    }
  },
  {
    id: "col-gonzaga", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at Gonzaga (like John Stockton).",
    note: "Played college ball for the Bulldogs.",
    tiers: {
      chalk: ["John Stockton|stockton"],
      bandwagon: ["Domantas Sabonis|sabonis","Rui Hachimura|hachimura","Jalen Suggs|suggs","Chet Holmgren|chet"],
      starter: ["Adam Morrison","Kelly Olynyk","Zach Collins","Brandon Clarke","Corey Kispert","Andrew Nembhard","Ronny Turiaf","Dan Dickau","Austin Daye","Robert Sacre","Killian Tillie","Julian Strawther","Jeremy Pargo"],
      film: ["Richie Frahm","Elias Harris","Kevin Pangos","Johnathan Williams","Joel Ayayi"],
      deep: ["Filip Petrusev"],
      hail: []
    }
  },
  {
    id: "col-gtown", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at Georgetown (like Allen Iverson).",
    note: "Played college ball for the Hoyas.",
    tiers: {
      chalk: ["Allen Iverson|iverson|ai","Patrick Ewing|ewing"],
      bandwagon: ["Alonzo Mourning|zo","Dikembe Mutombo|mutombo"],
      starter: ["Jeff Green","Roy Hibbert|hibbert","Greg Monroe","Otto Porter Jr.|otto porter","Reggie Williams","Jerome Williams","Othella Harrington","Mike Sweetney","Jahidi White"],
      film: ["David Wingate","Sleepy Floyd|eric floyd","Jaren Jackson","Don Reid","Ruben Boumtje-Boumtje","DaJuan Summers"],
      deep: ["Henry Sims","Hollis Thompson","Mac McClung","Jessie Govan"],
      hail: []
    }
  },
  {
    id: "col-cuse", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at Syracuse (like Carmelo Anthony).",
    note: "Played college ball for the Orange.",
    tiers: {
      chalk: ["Carmelo Anthony|melo"],
      bandwagon: ["Derrick Coleman|dc","Dion Waiters","Jerami Grant","Michael Carter-Williams|mcw"],
      starter: ["Rony Seikaly","Sherman Douglas","Billy Owens","John Wallace","Hakim Warrick","Jonny Flynn","Wesley Johnson","Tyler Ennis","Chris McCullough","Malachi Richardson","Tyler Lydon","Oshae Brissett","Elijah Hughes","Dave Bing"],
      film: ["Pearl Washington","Etan Thomas","Andy Rautins","Kris Joseph","Fab Melo","Rakeem Christmas"],
      deep: ["Danny Schayes","Lawrence Moten","Demetris Nichols","Damone Brown","Donte Greene"],
      hail: []
    }
  },
  {
    id: "col-iu", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at Indiana (like Isiah Thomas).",
    note: "Played college ball for the Hoosiers.",
    tiers: {
      chalk: ["Isiah Thomas"],
      bandwagon: ["Victor Oladipo|oladipo","Eric Gordon"],
      starter: ["Calbert Cheaney","Cody Zeller","Noah Vonleh","Steve Alford","Alan Henderson","Jared Jeffries","D.J. White","OG Anunoby|anunoby","Thomas Bryant","Romeo Langford","Trayce Jackson-Davis","Jalen Hood-Schifino","Quinn Buckner","Scott May","Kent Benson"],
      film: ["Randy Wittman","Brian Evans","Kirk Haston"],
      deep: ["Yogi Ferrell","Troy Williams","Juwan Morgan","Kel'el Ware","Mike Woodson","Bobby Wilkerson","Ray Tolbert"],
      hail: []
    }
  },
  {
    id: "col-nova", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at Villanova (like Jalen Brunson).",
    note: "Played college ball for the Wildcats.",
    tiers: {
      chalk: ["Jalen Brunson|brunson"],
      bandwagon: ["Kyle Lowry|lowry","Mikal Bridges|bridges","Josh Hart"],
      starter: ["Donte DiVincenzo","Randy Foye","Omari Spellman","Ed Pinckney","Kerry Kittles","Tim Thomas","Saddiq Bey","Collin Gillespie","Cam Whitmore"],
      film: ["Dante Cunningham","Ryan Arcidiacono","Eric Paschall"],
      deep: ["Howard Porter","Malik Allen","Michael Bradley","Doug West","Rory Sparrow"],
      hail: []
    }
  },
  {
    id: "col-uconn", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at UConn (like Ray Allen).",
    note: "Played college ball for the Huskies.",
    tiers: {
      chalk: ["Ray Allen","Kemba Walker|kemba"],
      bandwagon: ["Richard Hamilton|rip","Andre Drummond|drummond","Rudy Gay","Emeka Okafor|okafor","Ben Gordon","Caron Butler"],
      starter: ["Donyell Marshall","Charlie Villanueva","Jeremy Lamb","Shabazz Napier","Hasheem Thabeet|thabeet","Josh Boone","Marcus Williams","Andre Jackson Jr.","Jordan Hawkins","Donovan Clingan|clingan","Stephon Castle|castle","James Bouknight","Clifford Robinson","Kevin Ollie","Scott Burrell"],
      film: ["Khalid El-Amin","Travis Knight","Jake Voskuhl","Hilton Armstrong","Jeff Adrien","A.J. Price","Daniel Hamilton"],
      deep: ["Adama Sanogo","Tristen Newton","Denham Brown","Tate George","Donny Marshall"],
      hail: []
    }
  },
  {
    id: "col-florida", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at Florida (like Al Horford).",
    note: "Played college ball for the Gators.",
    tiers: {
      chalk: ["Al Horford|horford","Joakim Noah|noah"],
      bandwagon: ["Bradley Beal|beal","Jason Williams|white chocolate","Mike Miller","Udonis Haslem|haslem"],
      starter: ["Corey Brewer","Chandler Parsons","Marreese Speights","Dorian Finney-Smith"],
      film: ["Vernon Maxwell","Dwayne Schintzius","Andrew DeClercq","Matt Bonner","David Lee","Anthony Roberson","Taurean Green","Nick Calathes"],
      deep: ["Erik Murphy","Chris Chiozza","Devin Robinson","Keyontae Johnson","Scottie Lewis","Tre Mann","Walter Clayton Jr."],
      hail: []
    }
  },
  {
    id: "col-lsu", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at LSU (like Shaq).",
    note: "Played college ball for the Tigers.",
    tiers: {
      chalk: ["Shaquille O'Neal|shaq"],
      bandwagon: ["Ben Simmons","Pete Maravich|pistol pete","Chris Jackson|mahmoud abdul-rauf|abdul-rauf"],
      starter: ["Glen Davis|big baby","Brandon Bass","Tyrus Thomas","Garrett Temple","Stanley Roberts","Anthony Randolph","Marcus Thornton"],
      film: ["Tremont Waters","Naz Reid","Tari Eason","Cam Thomas","Trendon Watford","Skylar Mays"],
      deep: ["Jarell Martin","Johnny O'Bryant","Ronald Dupree","Stromile Swift","Rudy Macklin","Randy Livingston"],
      hail: []
    }
  },
  {
    id: "col-wake", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at Wake Forest (like Tim Duncan).",
    note: "Played college ball for the Demon Deacons.",
    tiers: {
      chalk: ["Tim Duncan|duncan","Chris Paul|cp3"],
      bandwagon: ["Muggsy Bogues|muggsy","Josh Howard"],
      starter: ["Rodney Rogers","Randolph Childress","Al-Farouq Aminu","Jeff Teague","James Johnson","John Collins"],
      film: ["Ish Smith","Darius Songaila","Jaylen Hoard"],
      deep: [],
      hail: []
    }
  },
  {
    id: "col-memphis", cat: "college", diff: "easy",
    prompt: "Name an NBA player who played at Memphis (like Derrick Rose).",
    note: "Played college ball for the Tigers.",
    tiers: {
      chalk: ["Derrick Rose|d rose","Penny Hardaway|anfernee hardaway"],
      bandwagon: ["Tyreke Evans","Jalen Duren","James Wiseman"],
      starter: ["Chris Douglas-Roberts","Shawne Williams","Rodney Carney","Joey Dorsey","Will Barton","Elliot Williams","Lorenzen Wright","Darius Washington","Dajuan Wagner"],
      film: ["Antonio Burks","Elliot Perry","Precious Achiuwa","D.J. Stephens","Adonis Thomas"],
      deep: ["DeAndre Williams"],
      hail: []
    }
  },
  {
    id: "ch-25-thunder", cat: "rosters", diff: "hard",
    prompt: "Name a player on the championship-winning 2024-25 Thunder (SGA's team).",
    note: "Anyone who played for them during the 2024-25 season.",
    tiers: {
      chalk: ["Shai Gilgeous-Alexander|sga|shai","Jalen Williams|j-dub|jdub","Chet Holmgren|chet"],
      bandwagon: ["Luguentz Dort|lu dort|dort","Alex Caruso|caruso","Isaiah Hartenstein|hartenstein","Cason Wallace","Aaron Wiggins"],
      starter: ["Isaiah Joe","Kenrich Williams|kenny hustle","Jaylin Williams","Ousmane Dieng","Dillon Jones","Ajay Mitchell"],
      film: ["Adam Flagler","Branden Carlson","Alex Ducas"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ch-24-celtics", cat: "rosters", diff: "hard",
    prompt: "Name a player on the championship-winning 2023-24 Celtics (Tatum's team).",
    note: "Anyone who played for them during the 2023-24 season.",
    tiers: {
      chalk: ["Jayson Tatum|tatum","Jaylen Brown","Kristaps Porzingis|kp|unicorn","Jrue Holiday|jrue"],
      bandwagon: ["Derrick White","Al Horford|horford","Payton Pritchard"],
      starter: ["Sam Hauser","Luke Kornet","Xavier Tillman","Oshae Brissett","Neemias Queta"],
      film: ["Svi Mykhailiuk","Jordan Walsh","Dalano Banton","Jaden Springer","Drew Peterson","JD Davison","Lamar Stevens"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ch-23-nuggets", cat: "rosters", diff: "hard",
    prompt: "Name a player on the championship-winning 2022-23 Nuggets (Jokic's team).",
    note: "Anyone who played for them during the 2022-23 season.",
    tiers: {
      chalk: ["Nikola Jokic|jokic|joker","Jamal Murray|murray","Aaron Gordon|ag"],
      bandwagon: ["Michael Porter Jr.|mpj|michael porter","Kentavious Caldwell-Pope|kcp","Bruce Brown"],
      starter: ["Jeff Green","Christian Braun","Reggie Jackson","DeAndre Jordan|deandre jordan","Bones Hyland|nah'shon hyland"],
      film: ["Vlatko Cancar","Zeke Nnaji","Peyton Watson","Thomas Bryant","Ish Smith","Jack White","Davon Reed"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ch-22-warriors", cat: "rosters", diff: "hard",
    prompt: "Name a player on the championship-winning 2021-22 Warriors.",
    note: "Anyone who played for them during the 2021-22 season.",
    tiers: {
      chalk: ["Stephen Curry|steph curry|steph","Klay Thompson|klay","Draymond Green|draymond","Andrew Wiggins|wiggins"],
      bandwagon: ["Jordan Poole","Kevon Looney|looney","Andre Iguodala|iggy","Gary Payton II|gp2"],
      starter: ["Otto Porter Jr.|otto porter","Jonathan Kuminga|kuminga","Moses Moody","Nemanja Bjelica","Damion Lee","Juan Toscano-Anderson|jta"],
      film: ["Chris Chiozza","Quinndary Weatherspoon","Jeff Dowtin"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ch-21-bucks", cat: "rosters", diff: "hard",
    prompt: "Name a player on the championship-winning 2020-21 Bucks (Giannis's team).",
    note: "Anyone who played for them during the 2020-21 season.",
    tiers: {
      chalk: ["Giannis Antetokounmpo|giannis|greek freak","Khris Middleton|middleton","Jrue Holiday|jrue"],
      bandwagon: ["Brook Lopez","P.J. Tucker|pj tucker","Bobby Portis|portis","Pat Connaughton"],
      starter: ["Bryn Forbes","Donte DiVincenzo|divincenzo","Jeff Teague","Thanasis Antetokounmpo|thanasis"],
      film: ["Jordan Nwora","Sam Merrill","Torrey Craig","D.J. Augustin|dj augustin","Elijah Bryant","Rodions Kurucs","Mamadi Diakite","Axel Toupane"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ch-20-lakers", cat: "rosters", diff: "hard",
    prompt: "Name a player on the championship-winning 2019-20 Lakers (LeBron's bubble team).",
    note: "Anyone who played for them during the 2019-20 season.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Anthony Davis|ad"],
      bandwagon: ["Rajon Rondo|rondo","Dwight Howard|dwight","Kyle Kuzma|kuz","Alex Caruso|caruso","Danny Green","Kentavious Caldwell-Pope|kcp"],
      starter: ["JaVale McGee|javale","Markieff Morris","Avery Bradley","Quinn Cook","Jared Dudley","Dion Waiters"],
      film: ["Talen Horton-Tucker|tht","Troy Daniels","Kostas Antetokounmpo","J.R. Smith|jr smith","Devontae Cacok"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ch-19-raptors", cat: "rosters", diff: "hard",
    prompt: "Name a player on the championship-winning 2018-19 Raptors (Kawhi's team).",
    note: "Anyone who played for them during the 2018-19 season.",
    tiers: {
      chalk: ["Kawhi Leonard|kawhi","Kyle Lowry|lowry","Pascal Siakam|siakam|spicy p"],
      bandwagon: ["Marc Gasol","Fred VanVleet|fvv","Danny Green","Serge Ibaka|ibaka"],
      starter: ["Norman Powell","OG Anunoby|og","Jonas Valanciunas|jv","Delon Wright","C.J. Miles|cj miles"],
      film: ["Patrick McCaw","Jeremy Lin","Jodie Meeks","Chris Boucher","Eric Moreland","Malcolm Miller","Jordan Loyd","Lorenzo Brown","Greg Monroe"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ch-16-cavs", cat: "rosters", diff: "hard",
    prompt: "Name a player on the championship-winning 2015-16 Cavaliers (LeBron's team).",
    note: "Anyone who played for them during the 2015-16 season.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Kyrie Irving|kyrie","Kevin Love|k-love"],
      bandwagon: ["J.R. Smith|jr smith","Tristan Thompson","Iman Shumpert|shump","Richard Jefferson","Timofey Mozgov"],
      starter: ["Matthew Dellavedova|delly","Channing Frye","Mo Williams","James Jones"],
      film: ["Jordan McRae","Sasha Kaun","Dahntay Jones","Joe Harris","Jared Cunningham"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ch-heat-big3", cat: "rosters", diff: "hard",
    prompt: "Name a player on the championship-winning 2011-12 or 2012-13 Heat (LeBron's team).",
    note: "Anyone who played for them during the 2011-12 or 2012-13 seasons.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Dwyane Wade|d-wade|dwade","Chris Bosh|bosh"],
      bandwagon: ["Ray Allen","Mario Chalmers|rio","Shane Battier|battier","Udonis Haslem|haslem","Mike Miller"],
      starter: ["Norris Cole","Chris Andersen|birdman","Joel Anthony","Rashard Lewis","James Jones","Ronny Turiaf"],
      film: ["Juwan Howard","Eddy Curry","Terrel Harris","Dexter Pittman","Jarvis Varnado","Josh Harrellson"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ch-90s-bulls", cat: "rosters", diff: "hard",
    prompt: "Name a player on the championship-winning 1990s Bulls (1991-93 or 1996-98) (Jordan's team).",
    note: "Anyone who played for them during the 1990-91, 1991-92, 1992-93, 1995-96, 1996-97 or 1997-98 seasons.",
    tiers: {
      chalk: ["Michael Jordan|mj","Scottie Pippen|pippen","Dennis Rodman|the worm","Steve Kerr|kerr"],
      bandwagon: ["Horace Grant","Toni Kukoc|kukoc","B.J. Armstrong|bj armstrong","John Paxson|paxson","Luc Longley","Ron Harper"],
      starter: ["Bill Cartwright","Bill Wennington","Stacey King","Will Perdue","Scott Williams","Jud Buechler","Randy Brown","Craig Hodges","Cliff Levingston","Robert Parish"],
      film: ["Dennis Hopson","Bobby Hansen","Rodney McCray","Trent Tucker","Corey Williams","Darrell Walker","Dickey Simpkins","Jason Caffey","James Edwards","John Salley","Joe Kleine","Scott Burrell"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ch-dubs-dynasty", cat: "rosters", diff: "hard",
    prompt: "Name a player on the championship-winning 2014-15, 2016-17 or 2017-18 Warriors (Steph Curry's team).",
    note: "Anyone who played for them during the 2014-15, 2016-17 or 2017-18 seasons.",
    tiers: {
      chalk: ["Stephen Curry|steph curry|steph","Kevin Durant|kd","Klay Thompson|klay","Draymond Green|draymond"],
      bandwagon: ["Andre Iguodala|iggy","Harrison Barnes","Shaun Livingston","Zaza Pachulia|zaza","JaVale McGee|javale","David West","Andrew Bogut|bogut"],
      starter: ["Nick Young|swaggy p","Kevon Looney|looney","Leandro Barbosa","Marreese Speights|mo buckets","Festus Ezeli","Ian Clark","Patrick McCaw","Jordan Bell","Omri Casspi","Matt Barnes"],
      film: ["Justin Holiday","James Michael McAdoo","Brandon Rush","David Lee","Damian Jones","Quinn Cook","Chris Boucher","Ognjen Kuzmic","Anderson Varejao","Briante Weber"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ch-shaq-kobe", cat: "rosters", diff: "hard",
    prompt: "Name a player on the championship-winning 2000, 2001 or 2002 Lakers (Shaq and Kobe's team).",
    note: "Anyone who played for them during the 1999-2000, 2000-01 or 2001-02 seasons.",
    tiers: {
      chalk: ["Shaquille O'Neal|shaq","Kobe Bryant|kobe"],
      bandwagon: ["Derek Fisher|fisher","Robert Horry|big shot rob","Rick Fox","Glen Rice","Ron Harper","Horace Grant"],
      starter: ["Brian Shaw","A.C. Green|ac green","Devean George","Lindsey Hunter","Mark Madsen|mad dog","Samaki Walker","John Salley","Isaiah Rider|j.r. rider","Mitch Richmond","Tyronn Lue|ty lue"],
      film: ["Travis Knight","Greg Foster","Stanislav Medvedenko|slava","Mike Penberthy","Jelani McCoy"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ch-kobe-pau", cat: "rosters", diff: "hard",
    prompt: "Name a player on the championship-winning 2009 or 2010 Lakers (Kobe's team).",
    note: "Anyone who played for them during the 2008-09 or 2009-10 seasons.",
    tiers: {
      chalk: ["Kobe Bryant|kobe","Pau Gasol|pau"],
      bandwagon: ["Lamar Odom","Derek Fisher|fisher","Andrew Bynum|bynum","Ron Artest|metta world peace|metta","Trevor Ariza|ariza"],
      starter: ["Shannon Brown","Jordan Farmar|farmar","Sasha Vujacic|the machine","Luke Walton","Josh Powell","DJ Mbenga|d.j. mbenga","Adam Morrison"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-lebron", cat: "connections", diff: "hard",
    prompt: "Name a teammate of LeBron James.",
    note: "Played on the same team in the same season (Cavaliers 2003-10 & 2014-18, Heat 2010-14, Lakers 2018-25), through 2024-25.",
    tiers: {
      chalk: ["Dwyane Wade|d-wade|dwade","Kyrie Irving|kyrie","Anthony Davis|ad","Chris Bosh|bosh"],
      bandwagon: ["Kevin Love|k-love","Ray Allen","Russell Westbrook|westbrook|russ","Austin Reaves|reaves","Shaquille O'Neal|shaq","Carmelo Anthony|melo","Dwight Howard|dwight","Rajon Rondo|rondo","Bronny James|bronny","Luka Doncic|luka","D'Angelo Russell|dlo"],
      starter: ["J.R. Smith|jr smith","Tristan Thompson","Zydrunas Ilgauskas|big z","Mo Williams","Anderson Varejao","Larry Hughes","Mario Chalmers|rio","Shane Battier|battier","Udonis Haslem|haslem","Mike Miller","Iman Shumpert|shump","Richard Jefferson","Channing Frye","Kyle Korver","Jeff Green","George Hill","Isaiah Thomas","Kyle Kuzma|kuz","Alex Caruso|caruso","Danny Green","Kentavious Caldwell-Pope|kcp","JaVale McGee|javale","Lonzo Ball|lonzo","Brandon Ingram|bi","Josh Hart","Rui Hachimura|rui","Malik Beasley","Jarred Vanderbilt|vando","Dennis Schroder|schroder","Andre Drummond","Montrezl Harrell|trez","Dorian Finney-Smith","Max Christie","Dalton Knecht","Gabe Vincent","Christian Wood"],
      film: ["Drew Gooden","Daniel Gibson|boobie","Sasha Pavlovic","Delonte West","Wally Szczerbiak","Ben Wallace","Antawn Jamison","Eric Snow","Damon Jones","Donyell Marshall","Jeff McInnis","Ira Newble","Norris Cole","Chris Andersen|birdman","Joel Anthony","Rashard Lewis","James Jones","Matthew Dellavedova|delly","Timofey Mozgov","Jordan Clarkson","Larry Nance Jr.","Rodney Hood","Cedi Osman","Derrick Rose|d-rose","Lance Stephenson|born ready","Michael Beasley","Avery Bradley","Markieff Morris","Talen Horton-Tucker|tht","Wesley Matthews","Wenyen Gabriel","Patrick Beverley|pat bev","Troy Brown Jr.","Jaxson Hayes","Taurean Prince","Cam Reddish","Spencer Dinwiddie","Jalen Hood-Schifino"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-curry", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Stephen Curry.",
    note: "Played on the same team in the same season (Warriors, 2009-25), through 2024-25.",
    tiers: {
      chalk: ["Klay Thompson|klay","Draymond Green|draymond","Kevin Durant|kd","Andre Iguodala|iggy"],
      bandwagon: ["Andrew Wiggins|wiggins","Jordan Poole","Jimmy Butler|jimmy buckets","Monta Ellis|monta","David Lee","Andrew Bogut|bogut","Harrison Barnes","Kevon Looney|looney","Chris Paul|cp3","DeMarcus Cousins|boogie","Jonathan Kuminga|kuminga","Gary Payton II|gp2"],
      starter: ["Shaun Livingston","Zaza Pachulia|zaza","JaVale McGee|javale","David West","Nick Young|swaggy p","Leandro Barbosa","Marreese Speights|mo buckets","Festus Ezeli","Jarrett Jack","Carl Landry","Brandon Rush","Richard Jefferson","Stephen Jackson|jack","Dorell Wright","Corey Maggette","D'Angelo Russell|dlo","Kelly Oubre Jr.|kelly oubre","Eric Paschall","Otto Porter Jr.|otto porter","Moses Moody","Brandin Podziemski|podz","Trayce Jackson-Davis|tjd","Buddy Hield|buddy","Dennis Schroder|schroder","Kyle Anderson|slo-mo","De'Anthony Melton","Quinten Post"],
      film: ["Ian Clark","Patrick McCaw","Jordan Bell","Omri Casspi","Quinn Cook","Damian Jones","Alfonzo McKinnie","Jacob Evans","Willie Cauley-Stein","Alec Burks","Marquese Chriss","Glenn Robinson III","Juan Toscano-Anderson|jta","Damion Lee","Mychal Mulder","James Wiseman","Kent Bazemore","Nemanja Bjelica","Chris Chiozza","Anthony Lamb","Ryan Rollins","Ty Jerome","Lester Quinones","Gui Santos","Lindy Waters III","Pat Spencer","Acie Law","Reggie Williams","Anthony Morrow","Vladimir Radmanovic","Andris Biedrins","Ekpe Udoh"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-kobe", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Kobe Bryant.",
    note: "Played on the same team in the same season (Lakers, 1996-2016), through 2024-25.",
    tiers: {
      chalk: ["Shaquille O'Neal|shaq","Pau Gasol|pau","Derek Fisher|fisher","Lamar Odom"],
      bandwagon: ["Karl Malone|the mailman","Gary Payton|the glove","Dwight Howard|dwight","Steve Nash|nash","Ron Artest|metta world peace|metta","Andrew Bynum|bynum","Robert Horry|big shot rob","Rick Fox","Glen Rice","D'Angelo Russell|dlo","Julius Randle|randle","Jordan Clarkson","Larry Nance Jr."],
      starter: ["Eddie Jones","Nick Van Exel","Elden Campbell","Ron Harper","Horace Grant","Brian Shaw","A.C. Green|ac green","Devean George","Mark Madsen|mad dog","Trevor Ariza|ariza","Shannon Brown","Jordan Farmar|farmar","Sasha Vujacic|the machine","Luke Walton","Kwame Brown","Smush Parker","Caron Butler|tuff juice","Chris Mihm","Vladimir Radmanovic","Matt Barnes","Steve Blake","Antawn Jamison","Jodie Meeks","Nick Young|swaggy p","Wesley Johnson","Jeremy Lin","Roy Hibbert","Lou Williams|sweet lou","Brandon Bass","Carlos Boozer|boozer","Ramon Sessions","Chris Kaman","Xavier Henry","Ed Davis","Kendall Marshall","Ryan Kelly","Tarik Black","Robert Sacre","Jordan Hill","Marcelo Huertas"],
      film: ["Corie Blount","Jerome Kersey","Travis Knight","Tyronn Lue|ty lue","Isaiah Rider|j.r. rider","Mitch Richmond","Samaki Walker","Stanislav Medvedenko|slava","Brian Cook","Kareem Rush","Jannero Pargo","Bryon Russell","Chucky Atkins","Brian Grant","Aaron McKie","Von Wafer","Ronny Turiaf","Coby Karl","DJ Mbenga|d.j. mbenga","Josh Powell","Adam Morrison","Theo Ratliff","Derrick Caracter","Devin Ebanks","Andrew Goudelock","Darius Morris","Troy Murphy","Earl Clark","Chris Duhon","Wayne Ellington","Ronnie Price","Jabari Brown","Dwight Buycks"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-jordan", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Michael Jordan.",
    note: "Played on the same team in the same season (Bulls 1984-93 & 1995-98, Wizards 2001-03), through 2024-25.",
    tiers: {
      chalk: ["Scottie Pippen|pippen","Dennis Rodman|the worm","Steve Kerr|kerr","Horace Grant"],
      bandwagon: ["Toni Kukoc|kukoc","B.J. Armstrong|bj armstrong","John Paxson|paxson","Luc Longley","Ron Harper","Bill Cartwright","Rip Hamilton|richard hamilton|rip","Kwame Brown"],
      starter: ["Charles Oakley|oak","Orlando Woolridge","Sidney Green","Dave Corzine","Bill Wennington","Stacey King","Will Perdue","Scott Williams","Craig Hodges","Jud Buechler","Randy Brown","Cliff Levingston","Robert Parish","Brad Sellers","Sam Vincent","Christian Laettner|laettner","Larry Hughes","Tyronn Lue|ty lue","Brendan Haywood","Chris Whitney","Popeye Jones","Hubert Davis","Bryon Russell","Juan Dixon","Etan Thomas","Jahidi White","Courtney Alexander"],
      film: ["Rod Higgins","Gene Banks","Quintin Dailey","Ennis Whatley","Wes Matthews","Jawann Oldham","Mike Brown","Dennis Hopson","Rodney McCray","Trent Tucker","Corey Williams","Darrell Walker","Dickey Simpkins","Jason Caffey","James Edwards","John Salley","Joe Kleine","Scott Burrell"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-shaq", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Shaquille O'Neal.",
    note: "Played on the same team in the same season (Magic 1992-96, Lakers 1996-2004, Heat 2004-08, Suns 2008-09, Cavs 2009-10, Celtics 2010-11), through 2024-25.",
    tiers: {
      chalk: ["Kobe Bryant|kobe","Dwyane Wade|d-wade|dwade","Penny Hardaway|penny","LeBron James|lebron|king james"],
      bandwagon: ["Steve Nash|nash","Amar'e Stoudemire|amare stoudemire|stat","Derek Fisher|fisher","Robert Horry|big shot rob","Karl Malone|the mailman","Gary Payton|the glove","Paul Pierce|the truth","Kevin Garnett|kg","Ray Allen","Rajon Rondo|rondo","Alonzo Mourning|zo","Horace Grant","Rick Fox","Glen Rice"],
      starter: ["Nick Anderson","Dennis Scott|3d","Brian Shaw","Eddie Jones","Nick Van Exel","Elden Campbell","Ron Harper","A.C. Green|ac green","Devean George","Mark Madsen|mad dog","Udonis Haslem|haslem","Antoine Walker","Jason Williams|white chocolate","James Posey","Grant Hill","Leandro Barbosa","Jason Richardson|j-rich","Mo Williams","Anderson Varejao","Zydrunas Ilgauskas|big z","Antawn Jamison","Delonte West","Anthony Parker","Jermaine O'Neal","Kendrick Perkins|perk","Glen Davis|big baby","Jeff Green","Nate Robinson|kryptonate","Scott Skiles","Donald Royal","Jeff Turner"],
      film: ["Anthony Bowie","Tree Rollins","Jon Koncak","Isaiah Rider|j.r. rider","Mitch Richmond","Samaki Walker","Travis Knight","Shandon Anderson","Michael Doleac","Dorell Wright","Boris Diaw","Raja Bell","Matt Barnes","Louis Amundson","Goran Dragic","Jamario Moon","Daniel Gibson|boobie","J.J. Hickson","Semih Erden","Von Wafer"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-duncan", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Tim Duncan.",
    note: "Played on the same team in the same season (Spurs, 1997-2016), through 2024-25.",
    tiers: {
      chalk: ["Tony Parker","Manu Ginobili|manu","Kawhi Leonard|kawhi","David Robinson|the admiral"],
      bandwagon: ["LaMarcus Aldridge|lma","Danny Green","Boris Diaw","Patty Mills|patty","Robert Horry|big shot rob","Bruce Bowen","Avery Johnson","Sean Elliott","Stephen Jackson|jack","Tiago Splitter","Michael Finley","Brent Barry","Richard Jefferson"],
      starter: ["Marco Belinelli","Matt Bonner|red mamba","Cory Joseph","Aron Baynes","Gary Neal","DeJuan Blair","George Hill","Steve Kerr|kerr","Mario Elie","Malik Rose","Antonio Daniels","Terry Porter","Speedy Claxton","Steve Smith","Nazr Mohammed","Rasho Nesterovic","Fabricio Oberto","Francisco Elson","Jacque Vaughn","Beno Udrih","Devin Brown","Kurt Thomas","Roger Mason","Antonio McDyess","Kyle Anderson|slo-mo","Jonathan Simmons","David West","Boban Marjanovic|boban","Kevin Martin","Jeff Ayres","Will Perdue","Derek Anderson","Danny Ferry"],
      film: ["Monty Williams","Chuck Person","Sean Marks","Glenn Robinson","Ian Mahinmi","Damon Stoudamire","Ime Udoka|udoka","Keith Bogans","Nando De Colo","James Anderson","Austin Daye","Ray McCallum","Reggie Williams","Rasual Butler"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-giannis", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Giannis Antetokounmpo.",
    note: "Played on the same team in the same season (Bucks, 2013-25), through 2024-25.",
    tiers: {
      chalk: ["Khris Middleton|middleton","Jrue Holiday|jrue","Damian Lillard|dame|dame time","Brook Lopez"],
      bandwagon: ["Bobby Portis|portis","Pat Connaughton","Eric Bledsoe","Jabari Parker","Malcolm Brogdon|brogdon","Thanasis Antetokounmpo|thanasis","P.J. Tucker|pj tucker","Donte DiVincenzo|divincenzo","Kyle Korver","Gary Trent Jr.|gary trent","Kyle Kuzma|kuz"],
      starter: ["Brandon Knight","O.J. Mayo|oj mayo","Michael Carter-Williams|mcw","Greg Monroe","John Henson","Tony Snell","Matthew Dellavedova|delly","Thon Maker","Mirza Teletovic","Jason Terry|jet","Ersan Ilyasova","George Hill","Wesley Matthews","Robin Lopez","Marvin Williams","Bryn Forbes","Jeff Teague","Grayson Allen","Jevon Carter","Joe Ingles","Jae Crowder","Cameron Payne","Malik Beasley","Patrick Beverley|pat bev","Andre Jackson Jr.","AJ Green","Taurean Prince","Delon Wright","Kevin Porter Jr.","Caron Butler|tuff juice","Zaza Pachulia|zaza","Nikola Mirotic|niko","Pau Gasol|pau","Sterling Brown"],
      film: ["Luke Ridnour","Larry Sanders","Ekpe Udoh","Nate Wolters","Miles Plumlee","Rashad Vaughn","Steve Novak","Greivis Vasquez","Spencer Hawes","D.J. Wilson|dj wilson","Jordan Nwora","Sam Merrill","Torrey Craig","Rodions Kurucs","Lindell Wigginton","MarJon Beauchamp","Chris Livingston"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-jokic", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Nikola Jokic.",
    note: "Played on the same team in the same season (Nuggets, 2015-25), through 2024-25.",
    tiers: {
      chalk: ["Jamal Murray|murray","Aaron Gordon|ag","Michael Porter Jr.|mpj|michael porter","Kentavious Caldwell-Pope|kcp"],
      bandwagon: ["Paul Millsap|millsap","Gary Harris","Will Barton|thrill","Bruce Brown","Jeff Green","Christian Braun","Russell Westbrook|westbrook|russ","Danilo Gallinari|gallo","Kenneth Faried|manimal","Emmanuel Mudiay|mudiay","Jusuf Nurkic|nurk","Monte Morris"],
      starter: ["Jerami Grant","Mason Plumlee","Torrey Craig","Malik Beasley","Juancho Hernangomez|juancho","Wilson Chandler","Darrell Arthur","Jameer Nelson","Mike Miller","Reggie Jackson","DeAndre Jordan|deandre jordan","Bones Hyland|nah'shon hyland","Peyton Watson","Zeke Nnaji","Vlatko Cancar","Julian Strawther","Dario Saric|saric","Jalen Pickett","Facundo Campazzo|facu","JaMychal Green","Bol Bol","PJ Dozier","Austin Rivers","Isaiah Thomas"],
      film: ["Tyler Lydon","Trey Lyles","Richard Jefferson","Devin Harris","Joffrey Lauvergne","Markus Howard","Davon Reed","Ish Smith","Thomas Bryant","Collin Gillespie","Hunter Tyson","Justin Holiday"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-luka", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Luka Doncic.",
    note: "Played on the same team in the same season (Mavericks 2018-25, Lakers 2025), through 2024-25.",
    tiers: {
      chalk: ["Kyrie Irving|kyrie","Kristaps Porzingis|kp|unicorn","LeBron James|lebron|king james","Dirk Nowitzki|dirk"],
      bandwagon: ["Jalen Brunson|brunson","Tim Hardaway Jr.|tim hardaway","Dereck Lively|lively","P.J. Washington|pj washington","Daniel Gafford|gafford","Spencer Dinwiddie","Christian Wood","Dwight Powell","Austin Reaves|reaves","Rui Hachimura|rui","Dorian Finney-Smith","Maxi Kleber|kleber","Seth Curry","Josh Green"],
      starter: ["J.J. Barea|jj barea","Harrison Barnes","DeAndre Jordan|deandre jordan","Wesley Matthews","Devin Harris","Dennis Smith Jr.","Trey Burke","Delon Wright","Boban Marjanovic|boban","Willie Cauley-Stein","Josh Richardson","James Johnson","Reggie Bullock","Sterling Brown","Frank Ntilikina","Marquese Chriss","Davis Bertans|bertans","JaVale McGee|javale","Jaden Hardy","Dante Exum","Grant Williams","Derrick Jones Jr.","Quentin Grimes","Olivier-Maxence Prosper","Naji Marshall","Klay Thompson|klay","Jarred Vanderbilt|vando","Gabe Vincent","Dalton Knecht","Jaxson Hayes","Bronny James|bronny"],
      film: ["Ryan Broekhoff","Courtney Lee","Justin Jackson","Moses Brown","Theo Pinson","A.J. Lawson","Markieff Morris","Alex Len","Shake Milton"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-tatum", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Jayson Tatum.",
    note: "Played on the same team in the same season (Celtics, 2017-25), through 2024-25.",
    tiers: {
      chalk: ["Jaylen Brown","Kyrie Irving|kyrie","Kemba Walker|kemba","Al Horford|horford"],
      bandwagon: ["Marcus Smart|smart","Jrue Holiday|jrue","Kristaps Porzingis|kp|unicorn","Derrick White","Gordon Hayward|hayward","Payton Pritchard","Robert Williams|time lord","Malcolm Brogdon|brogdon","Terry Rozier|scary terry"],
      starter: ["Daniel Theis","Marcus Morris","Aron Baynes","Enes Kanter|enes freedom","Tristan Thompson","Evan Fournier|fournier","Josh Richardson","Dennis Schroder|schroder","Grant Williams","Romeo Langford","Aaron Nesmith","Semi Ojeleye","Brad Wanamaker","Javonte Green","Sam Hauser","Luke Kornet","Blake Griffin|blake","Mike Muscala","Xavier Tillman","Oshae Brissett","Neemias Queta","Jaden Springer","Torrey Craig","Greg Monroe","Shane Larkin","Jabari Bird","Guerschon Yabusele|yabusele","Carsen Edwards","Tremont Waters","Vincent Poirier","Jordan Walsh"],
      film: ["Abdel Nader","Kadeem Allen","Svi Mykhailiuk","Dalano Banton","JD Davison","Drew Peterson","Lamar Stevens"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-harden", cat: "connections", diff: "hard",
    prompt: "Name a teammate of James Harden.",
    note: "Played on the same team in the same season (Thunder 2009-12, Rockets 2012-21, Nets 2021-22, 76ers 2022-23, Clippers 2023-25), through 2024-25.",
    tiers: {
      chalk: ["Kevin Durant|kd","Russell Westbrook|westbrook|russ","Chris Paul|cp3","Kawhi Leonard|kawhi"],
      bandwagon: ["Dwight Howard|dwight","Joel Embiid|embiid","Paul George|pg13","Kyrie Irving|kyrie","Serge Ibaka|ibaka","Clint Capela|capela","Eric Gordon","Tyrese Maxey|maxey","Trevor Ariza|ariza","P.J. Tucker|pj tucker","Chandler Parsons","Norman Powell","Ivica Zubac|zubac","Kendrick Perkins|perk"],
      starter: ["Thabo Sefolosha","Nick Collison","Jeremy Lin","Omer Asik","Patrick Beverley|pat bev","Terrence Jones","Josh Smith","Corey Brewer","Jason Terry|jet","Ryan Anderson","Lou Williams|sweet lou","Austin Rivers","Danuel House","Gerald Green","Robert Covington|rocovington","Ben McLemore","Jeff Green","Blake Griffin|blake","LaMarcus Aldridge|lma","Bruce Brown","Joe Harris","Patty Mills|patty","Tobias Harris|tobi","Georges Niang","De'Anthony Melton","Montrezl Harrell|trez","Terance Mann|tmann","Bones Hyland|nah'shon hyland","Amir Coffey","Kris Dunn","Nicolas Batum|batum","Derrick Jones Jr.","Paul Reed|bball paul"],
      film: ["Daequan Cook","Nazr Mohammed","Cole Aldrich","Royal Ivey","Reggie Jackson","Eric Maynor","Lazar Hayward","Hasheem Thabeet","Francisco Garcia","Greg Smith","Donatas Motiejunas","Isaiah Canaan","Troy Daniels","K.J. McDaniels","Michael Beasley","Sam Dekker","Nene","Gary Clark","Isaiah Hartenstein","Chris Clemons","Day'Ron Sharpe","Nic Claxton|claxton","Kessler Edwards","Cam Thomas","Shake Milton","Furkan Korkmaz","Jalen McDaniels","Kobe Brown","Moussa Diabate","Brandon Boston Jr.","Mason Plumlee","Daniel Theis"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-dirk", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Dirk Nowitzki.",
    note: "Played on the same team in the same season (Mavericks, 1998-2019), through 2024-25.",
    tiers: {
      chalk: ["Steve Nash|nash","Jason Kidd|kidd","Jason Terry|jet","Luka Doncic|luka"],
      bandwagon: ["Michael Finley","Tyson Chandler","Shawn Marion|matrix","J.J. Barea|jj barea","Josh Howard","Monta Ellis|monta","Rajon Rondo|rondo","Antoine Walker","Jerry Stackhouse","Devin Harris","Caron Butler|tuff juice","Vince Carter|vinsanity","Chandler Parsons","DeAndre Jordan|deandre jordan","Harrison Barnes","Deron Williams|d-will","Dennis Smith Jr.","Wesley Matthews"],
      starter: ["Erick Dampier","DeShawn Stevenson","Peja Stojakovic|peja","Brendan Haywood","Juwan Howard","Antawn Jamison","Raef LaFrentz","Nick Van Exel","Keith Van Horn","Danny Fortson","Adrian Griffin","Darrell Armstrong","Marquis Daniels","Devean George","Brandon Bass","Kris Humphries","Dwight Powell","Zaza Pachulia|zaza","Al-Farouq Aminu","Samuel Dalembert","Seth Curry","Yogi Ferrell","Nerlens Noel","Lamar Odom","Delonte West","Darren Collison","Mike James","Jose Calderon","O.J. Mayo|oj mayo","Elton Brand","Chris Kaman","Brandan Wright","Tim Hardaway Jr.|tim hardaway","Maxi Kleber|kleber","Jalen Brunson|brunson","Salah Mejri"],
      film: ["Shawn Bradley","Cedric Ceballos","Hubert Davis","Eduardo Najera","Avery Johnson","Ian Mahinmi","Corey Brewer","Brian Cardinal|the janitor","Rodrigue Beaubois|roddy b","Sasha Pavlovic","Dominique Jones","Jae Crowder","Bernard James","Ricky Ledo","Jameer Nelson","Raymond Felton","Charlie Villanueva","Justin Anderson","Dorian Finney-Smith","Ryan Broekhoff"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-westbrook", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Russell Westbrook.",
    note: "Played on the same team in the same season (Thunder 2008-19, Rockets 2019-20, Wizards 2020-21, Lakers 2021-23, Clippers 2023-24, Nuggets 2024-25), through 2024-25.",
    tiers: {
      chalk: ["Kevin Durant|kd","James Harden|harden","LeBron James|lebron|king james","Nikola Jokic|jokic|joker"],
      bandwagon: ["Paul George|pg13","Serge Ibaka|ibaka","Steven Adams|big kiwi","Enes Kanter|enes freedom","Victor Oladipo|dipo","Carmelo Anthony|melo","Anthony Davis|ad","Bradley Beal|beal","Kawhi Leonard|kawhi","Jamal Murray|murray","Aaron Gordon|ag","Michael Porter Jr.|mpj","Kendrick Perkins|perk","Thabo Sefolosha","Dion Waiters"],
      starter: ["Jeff Green","Nick Collison","Andre Roberson","Reggie Jackson","Derek Fisher|fisher","Kevin Martin","Caron Butler|tuff juice","Austin Reaves|reaves","D'Angelo Russell|dlo","Malik Beasley","Jarred Vanderbilt|vando","Rui Hachimura|rui","Kyle Kuzma|kuz","Daniel Gafford|gafford","Ivica Zubac|zubac","Norman Powell","Terance Mann|tmann","Christian Braun","Peyton Watson","Jerami Grant","Patrick Patterson","Raymond Felton","Alex Abrines","Clint Capela|capela","P.J. Tucker|pj tucker","Robert Covington","Eric Gordon","Danuel House","Austin Rivers","Ben McLemore","Raul Neto","Davis Bertans|bertans","Thomas Bryant","Ish Smith","Robin Lopez"],
      film: ["Nenad Krstic","Eric Maynor","Daequan Cook","Hasheem Thabeet","Ronnie Brewer","Mitch McGary","Anthony Morrow","Kyle Singler","Josh Huestis","Dakari Johnson","Terrance Ferguson","Hamidou Diallo","Deonte Burton","Nerlens Noel","Markieff Morris","Talen Horton-Tucker|tht","Kendrick Nunn","Wenyen Gabriel","Amir Coffey","Mason Plumlee","Zeke Nnaji","Julian Strawther","Vlatko Cancar","Dario Saric|saric","Hunter Tyson"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-wemby", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Victor Wembanyama.",
    note: "Played on the same team in the same season (Spurs, 2023-25), through 2024-25.",
    tiers: {
      chalk: ["De'Aaron Fox|fox|swipa","Stephon Castle|steph castle","Chris Paul|cp3"],
      bandwagon: ["Devin Vassell|vassell","Keldon Johnson","Jeremy Sochan|sochan","Harrison Barnes","Tre Jones"],
      starter: ["Zach Collins","Julian Champagnie","Malaki Branham","Blake Wesley","Sandro Mamukelashvili|mamu","Cedi Osman","Doug McDermott","Devonte' Graham|devonte graham","Charles Bassey","Sidy Cissoko","Dominick Barlow","Bismack Biyombo|biz"],
      film: ["Jamaree Bouyea","Riley Minix","David Duke Jr.","Harrison Ingram"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-nash", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Steve Nash (like Kobe Bryant).",
    note: "Played on the same team in the same season (Suns, Mavericks, Lakers), through 2024-25.",
    tiers: {
      chalk: ["Kobe Bryant|kobe","Dirk Nowitzki|dirk","Amar'e Stoudemire|amare|stat"],
      bandwagon: ["Shawn Marion|the matrix","Shaquille O'Neal|shaq","Michael Finley","Dwight Howard|dwight","Pau Gasol|pau","Grant Hill","Joe Johnson|iso joe","Jason Kidd|kidd"],
      starter: ["Raja Bell","Leandro Barbosa|the brazilian blur","Boris Diaw","Jason Richardson","Quentin Richardson","Antawn Jamison","Metta World Peace|ron artest","Jason Terry|jet","Channing Frye","Jared Dudley","Goran Dragic|dragic","Marcin Gortat","Kurt Thomas","Nick Van Exel","Juwan Howard","Raef LaFrentz"],
      film: ["James Jones","Eddie House","Tim Thomas","Marcus Banks","Brian Skinner","Matt Barnes","Robin Lopez","Lou Amundson","Hakim Warrick","Josh Childress","Vince Carter","Mickael Pietrus","Aaron Brooks","Sebastian Telfair","Shannon Brown","Ronnie Price","Markieff Morris","Michael Redd","Steve Blake","Jodie Meeks","Jordan Hill","Earl Clark","Robert Sacre","Chris Duhon","Wesley Johnson","Xavier Henry","Jordan Farmar","Kendall Marshall","Nick Young","Shawn Bradley","Eduardo Najera","Avery Johnson","Tariq Abdul-Wahad","Adrian Griffin","Walt Williams","Rex Chapman"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-tmac", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Tracy McGrady.",
    note: "Played on the same team in the same season (Raptors, Magic, Rockets, Knicks, Pistons, Hawks, Spurs), through 2024-25.",
    tiers: {
      chalk: ["Yao Ming|yao","Vince Carter|vinsanity","Tim Duncan"],
      bandwagon: ["Grant Hill","Shane Battier|battier","Steve Francis|stevie franchise","Tony Parker|tp","Manu Ginobili|manu","Joe Johnson|iso joe","Josh Smith"],
      starter: ["Dikembe Mutombo|mutombo","Rafer Alston","Luis Scola|scola","Juwan Howard","Mike Miller","Darrell Armstrong","Al Horford|horford","Danny Green","Ben Wallace","Charles Oakley","Pat Garrity","Chucky Atkins","Bo Outlaw"],
      film: ["Doug Christie","Marcus Camby","Dee Brown","Kevin Willis","John Wallace","Damon Stoudamire","Alvin Williams","Horace Grant","Troy Hudson","Drew Gooden","Gordan Giricek","Shawn Kemp","Andrew DeClercq","Tyronn Lue","Jon Barry","David Wesley","Ryan Bowen","Bob Sura","Chuck Hayes","Bonzi Wells","Luther Head","Carl Landry","Aaron Brooks","Steve Novak","Brent Barry","Kyle Lowry","David Lee","Danilo Gallinari","Chris Duhon","Wilson Chandler","Rodney Stuckey","Austin Daye","Will Bynum","Charlie Villanueva","Jason Maxiell","Tayshaun Prince","Richard Hamilton","Kirk Hinrich","Jeff Teague","Marvin Williams","Zaza Pachulia","Ivan Johnson","Willie Green","Boris Diaw","Matt Bonner","Patty Mills","Gary Neal"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-rose", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Derrick Rose (like Joakim Noah).",
    note: "Played on the same team in the same season (Bulls, Knicks, Cavaliers, Timberwolves, Pistons, Grizzlies), through 2024-25.",
    tiers: {
      chalk: ["Joakim Noah|noah","Jimmy Butler|jimmy buckets","LeBron James|lebron|king james","Carmelo Anthony|melo","Ja Morant|ja"],
      bandwagon: ["Luol Deng|deng","Karl-Anthony Towns|kat|towns","Andrew Wiggins|wiggins","Jalen Brunson|brunson","Julius Randle|randle","Kristaps Porzingis|porzingis"],
      starter: ["Kirk Hinrich|hinrich","Carlos Boozer|boozer","Taj Gibson","Ben Gordon","Kyle Korver","Pau Gasol","Kevin Love","Blake Griffin","Jaren Jackson Jr.|jjj","Desmond Bane|bane","Courtney Lee","RJ Barrett","Immanuel Quickley|quickley","Mitchell Robinson","Josh Hart","Andre Drummond","Jerami Grant"],
      film: ["Tyrus Thomas","Thabo Sefolosha","Drew Gooden","Larry Hughes","John Salmons","Brad Miller","Tim Thomas","Jannero Pargo","Hakim Warrick","C.J. Watson","Ronnie Brewer","Omer Asik","Keith Bogans","Kurt Thomas","Rip Hamilton","Nate Robinson","Marco Belinelli","Mike Dunleavy Jr.","D.J. Augustin","Nazr Mohammed","Aaron Brooks","Tony Snell","Doug McDermott","Nikola Mirotic","E'Twaun Moore","Brandon Jennings","Lance Thomas","Willy Hernangomez","Justin Holiday","Kyle O'Quinn","Jeff Green","J.R. Smith","Jae Crowder","Jordan Clarkson","Rodney Hood","Gorgui Dieng","Tyus Jones","Dario Saric","Jeff Teague","Josh Okogie","Svi Mykhailiuk","Christian Wood","Luke Kennard","Bruce Brown","Sekou Doumbouya","Langston Galloway","Evan Fournier","Alec Burks","Obi Toppin","Nerlens Noel","Miles McBride","Santi Aldama","John Konchar","Xavier Tillman","GG Jackson","Vince Williams Jr.","Marcus Smart"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-yao", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Yao Ming (like Tracy McGrady).",
    note: "Played on the same team in the same season (Rockets, 2002-11), through 2024-25.",
    tiers: {
      chalk: ["Tracy McGrady|t-mac","Steve Francis|stevie franchise"],
      bandwagon: ["Shane Battier|battier","Ron Artest|metta world peace","Luis Scola|scola","Cuttino Mobley|cat mobley","Kevin Martin","Dikembe Mutombo|mutombo"],
      starter: ["Rafer Alston","Juwan Howard","Aaron Brooks","Carl Landry","Chuck Hayes","Kyle Lowry","Trevor Ariza","Bonzi Wells","Mike James","Jon Barry","Kelvin Cato","Maurice Taylor","Moochie Norris","Eddie Griffin","Jim Jackson","Mark Jackson","David Wesley","Luther Head","Bob Sura","Steve Novak","Brent Barry","Von Wafer","Brian Cook","Chase Budinger","Jordan Hill","Courtney Lee","Patrick Patterson","Goran Dragic","Brad Miller"],
      film: ["Glen Rice","Bostjan Nachbar","Clarence Weatherspoon","Charlie Ward","Ryan Bowen","Derek Anderson","Stromile Swift","Kirk Snyder","Mike Harris","John Lucas III","Vassilis Spanoulis","Loren Woods","Joey Dorsey","Ishmael Smith","Jermaine Taylor","Jared Jeffries"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-parker", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Tony Parker (like Tim Duncan).",
    note: "Played on the same team in the same season (Spurs, Hornets), through 2024-25.",
    tiers: {
      chalk: ["Tim Duncan","Manu Ginobili|manu","Kawhi Leonard|kawhi"],
      bandwagon: ["LaMarcus Aldridge|aldridge","David Robinson|the admiral","Kemba Walker|kemba","Pau Gasol|pau","Danny Green","Boris Diaw"],
      starter: ["Bruce Bowen|bowen","Robert Horry|big shot rob|horry","Michael Finley","Patty Mills","Tiago Splitter","Stephen Jackson","Richard Jefferson","Brent Barry","Matt Bonner|red mamba","Kyle Anderson","Dejounte Murray","Rudy Gay","Malik Rose","Nazr Mohammed","Rasho Nesterovic","Steve Kerr","Antonio Daniels","Speedy Claxton","Kevin Willis","Hedo Turkoglu","Jeremy Lamb","Nicolas Batum|batum","Miles Bridges"],
      film: ["Fabricio Oberto","Beno Udrih","Jacque Vaughn","Francisco Elson","Kurt Thomas","Ime Udoka","Roger Mason","George Hill","Antonio McDyess","Theo Ratliff","DeJuan Blair","Gary Neal","James Anderson","Cory Joseph","Nando De Colo","Aron Baynes","Marco Belinelli","Jeff Ayres","Austin Daye","David West","Jonathon Simmons","Andre Miller","Kevin Martin","Boban Marjanovic","Dewayne Dedmon","Davis Bertans","Bryn Forbes","Derrick White","Joffrey Lauvergne","Brandon Paul","Cody Zeller","Marvin Williams","Frank Kaminsky","Willy Hernangomez","Bismack Biyombo","Malik Monk","Dwayne Bacon","Devonte' Graham","Michael Kidd-Gilchrist"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ppg-30", cat: "records", diff: "hard",
    prompt: "Name a player who averaged 30+ points per game in a season (like Michael Jordan).",
    note: "Any full regular season, through 2024-25.",
    tiers: {
      chalk: ["Michael Jordan|mj","Kobe Bryant|kobe","LeBron James|lebron|king james","Wilt Chamberlain|wilt","Stephen Curry|steph curry|steph"],
      bandwagon: ["James Harden|harden","Kevin Durant|kd","Russell Westbrook|westbrook|russ","Luka Doncic|luka","Joel Embiid|embiid","Shai Gilgeous-Alexander|sga|shai","Giannis Antetokounmpo|giannis|greek freak","Allen Iverson|iverson|ai","Kareem Abdul-Jabbar|kareem"],
      starter: ["Tracy McGrady|t-mac","Dwyane Wade|d-wade|dwade","Damian Lillard|dame|lillard","Bradley Beal|beal","Jayson Tatum|tatum","Elgin Baylor","Jerry West","Rick Barry","Oscar Robertson|the big o","Pete Maravich|pistol pete","Dominique Wilkins|nique","Karl Malone|the mailman","George Gervin|iceman"],
      film: ["Bernard King","Adrian Dantley","Bob McAdoo","Nate Archibald|tiny archibald","Bob Pettit","Walt Bellamy","Moses Malone","Jack Twyman","World B. Free"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ncaa-nba", cat: "records", diff: "hard",
    prompt: "Name a player who won both an NCAA title and an NBA title (like Michael Jordan).",
    note: "As a player, any era.",
    tiers: {
      chalk: ["Michael Jordan|mj","Magic Johnson","Kareem Abdul-Jabbar|kareem"],
      bandwagon: ["Anthony Davis|ad|the brow","Bill Russell","James Worthy","Isiah Thomas","Bill Walton"],
      starter: ["Danny Green","Mario Chalmers|chalmers","Shane Battier|battier","Richard Hamilton|rip","Donte DiVincenzo","Christian Braun","Corey Brewer","Jason Terry|jet","Antoine Walker","Glen Rice"],
      film: ["Jamaal Wilkes","Gail Goodrich","Henry Bibby","Quinn Buckner","K.C. Jones","John Havlicek|hondo","Jerry Lucas","Nazr Mohammed","Brandon Rush","Quinn Cook","Rick Robey"],
      deep: ["Clyde Lovellette","Larry Siegfried","Lucius Allen","Sasha Kaun"],
      hail: []
    }
  },
  {
    id: "ch-showtime", cat: "rosters", diff: "hard",
    prompt: "Name a player on the championship-winning Showtime Lakers (Magic's team).",
    note: "Anyone who played for them during the 1980, 1982, 1985, 1987 or 1988 seasons.",
    tiers: {
      chalk: ["Magic Johnson","Kareem Abdul-Jabbar|kareem","James Worthy"],
      bandwagon: ["Byron Scott","Michael Cooper","Kurt Rambis|rambis","A.C. Green"],
      starter: ["Jamaal Wilkes|silk","Norm Nixon","Bob McAdoo","Mychal Thompson","Spencer Haywood"],
      film: ["Mitch Kupchak","Jim Chones","Mike McGee","Larry Spriggs","Wes Matthews","Milt Wagner","Tony Campbell","Ronnie Lester","Jim Brewer","Mark Landsberger","Billy Thompson","Kevin McKenna","Eddie Jordan","Brad Holland","Ron Boone","Butch Lee"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ch-celtics-80s", cat: "rosters", diff: "hard",
    prompt: "Name a player on the championship-winning 1980s Celtics (Larry Bird's team).",
    note: "Anyone who played for them during the 1981, 1984 or 1986 seasons.",
    tiers: {
      chalk: ["Larry Bird","Kevin McHale|mchale","Robert Parish|the chief"],
      bandwagon: ["Dennis Johnson|dj","Danny Ainge|ainge","Bill Walton|walton","Cedric Maxwell|cornbread"],
      starter: ["Nate Archibald|tiny archibald","Gerald Henderson","M.L. Carr","Scott Wedman","Chris Ford","Rick Robey"],
      film: ["Quinn Buckner","Jerry Sichting","David Thirdkill","Greg Kite","Sam Vincent","Rick Carlisle|carlisle","Carlos Clark","Wayne Kreklow","Eric Fernsten","Terry Duerod"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ch-badboys", cat: "rosters", diff: "hard",
    prompt: "Name a player on the championship-winning Bad Boys Pistons (Isiah's team).",
    note: "Anyone who played for them during the 1989 or 1990 seasons.",
    tiers: {
      chalk: ["Isiah Thomas","Dennis Rodman|rodman","Bill Laimbeer|laimbeer"],
      bandwagon: ["Joe Dumars|dumars","Vinnie Johnson|the microwave","Mark Aguirre","Rick Mahorn"],
      starter: ["John Salley","James Edwards|buddha","Adrian Dantley"],
      film: ["Fennis Dembo","Micheal Williams","John Long","Darryl Dawkins","Pace Mannion","Jim Rowinski","David Greenwood","Scott Hastings","Gerald Henderson","Stan Kimbrough"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ch-rockets-9495", cat: "rosters", diff: "hard",
    prompt: "Name a player on the championship-winning Rockets (Hakeem's team).",
    note: "Anyone who played for them during the 1993-94 or 1994-95 seasons.",
    tiers: {
      chalk: ["Hakeem Olajuwon|hakeem|the dream","Clyde Drexler|clyde the glide"],
      bandwagon: ["Robert Horry|big shot rob|horry","Kenny Smith|the jet","Sam Cassell","Vernon Maxwell|mad max","Otis Thorpe"],
      starter: ["Mario Elie","Chucky Brown","Carl Herrera","Pete Chilcutt"],
      film: ["Scott Brooks","Matt Bullard","Earl Cureton","Richard Petruska","Zan Tabak","Charles Jones","Tim Breaux","Eric Riley"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-durant", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Kevin Durant.",
    note: "Played on the same team in the same season (Sonics, Thunder, Warriors, Nets, Suns), through 2024-25.",
    tiers: {
      chalk: ["Russell Westbrook|westbrook|russ","Stephen Curry|steph curry|steph","James Harden|harden","Kyrie Irving|kyrie"],
      bandwagon: ["Klay Thompson|klay","Draymond Green|draymond","Devin Booker|booker","Bradley Beal|beal","Serge Ibaka|ibaka","Andre Iguodala|iggy","Chris Paul|cp3"],
      starter: ["Steven Adams","Kendrick Perkins|perk","Thabo Sefolosha","Nick Collison","Ray Allen","Jeff Green","Derek Fisher","Reggie Jackson","Dion Waiters","Enes Kanter|enes freedom","Zaza Pachulia|zaza","JaVale McGee","David West","Shaun Livingston","DeMarcus Cousins|boogie","Kevon Looney","Spencer Dinwiddie","Joe Harris","Blake Griffin","LaMarcus Aldridge","Ben Simmons","Mikal Bridges","Deandre Ayton|ayton","Jusuf Nurkic","Grayson Allen","Eric Gordon","Royce O'Neale"],
      film: ["Luke Ridnour","Chris Wilcox","Earl Watson","Daequan Cook","Eric Maynor","Nenad Krstic","Royal Ivey","Cole Aldrich","Hasheem Thabeet","Kevin Martin","Jeremy Lamb","Andre Roberson","Caron Butler","Anthony Morrow","D.J. Augustin","Mitch McGary","Marreese Speights","Ian Clark","Patrick McCaw","Nick Young","Jordan Bell","Damian Jones","Quinn Cook","Jonas Jerebko","Andrew Bogut","Matt Barnes","Bruce Brown","Nic Claxton","Landry Shamet","DeAndre Jordan","Patty Mills","Cam Thomas","Day'Ron Sharpe","Goran Dragic","Andre Drummond","Seth Curry","Josh Okogie","Torrey Craig","Terrence Ross","T.J. Warren","Drew Eubanks","Bol Bol","Keita Bates-Diop","Saben Lee","Damion Lee","Monte Morris","Ryan Dunn","Tyus Jones","Mason Plumlee","Nick Richards","Cody Martin","Collin Gillespie","Oso Ighodaro","Vasilije Micic"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-kawhi", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Kawhi Leonard.",
    note: "Played on the same team in the same season (Spurs, Raptors, Clippers), through 2024-25.",
    tiers: {
      chalk: ["Tim Duncan","Paul George|pg13","Kyle Lowry|lowry","James Harden|harden"],
      bandwagon: ["Tony Parker|tp","Manu Ginobili|manu","LaMarcus Aldridge|aldridge","Pascal Siakam|siakam","Russell Westbrook|westbrook|russ","Marc Gasol","Danny Green","Fred VanVleet|fvv"],
      starter: ["Boris Diaw","Patty Mills","Tiago Splitter","Serge Ibaka|ibaka","Norman Powell","Ivica Zubac|zubac","Lou Williams|sweet lou","Montrezl Harrell","Patrick Beverley|pat bev","Marcus Morris","Reggie Jackson","Nicolas Batum|batum","Terance Mann","Pau Gasol","David West","Jonathon Simmons","Dewayne Dedmon","OG Anunoby|anunoby"],
      film: ["Matt Bonner","Cory Joseph","Aron Baynes","Marco Belinelli","Jeff Ayres","Austin Daye","Kyle Anderson","Boban Marjanovic","Kevin Martin","Andre Miller","Rasual Butler","David Lee","Davis Bertans","Bryn Forbes","Dejounte Murray","Jeremy Lin","Patrick McCaw","Chris Boucher","Jodie Meeks","Malcolm Miller","Jordan Loyd","JaMychal Green","Landry Shamet","Maurice Harkless","Rodney McGruder","Amir Coffey","Luke Kennard","Rajon Rondo","DeMarcus Cousins","Robert Covington","Eric Bledsoe","Brandon Boston Jr.","Mason Plumlee","Bones Hyland","Daniel Theis","Kris Dunn","Derrick Jones Jr.","Kevin Porter Jr.","P.J. Tucker","Moses Brown","Kobe Brown","Jordan Miller","Mo Bamba","Drew Eubanks","Ben Simmons","Kai Jones","Bogdan Bogdanovic|bogdanovic"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-kyrie", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Kyrie Irving.",
    note: "Played on the same team in the same season (Cavs, Celtics, Nets, Mavericks), through 2024-25.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Kevin Durant|kd","Luka Doncic|luka","James Harden|harden"],
      bandwagon: ["Kevin Love","Jayson Tatum|tatum","Jaylen Brown","Al Horford|horford","Anthony Davis|ad|the brow","Klay Thompson|klay","Gordon Hayward|hayward"],
      starter: ["Tristan Thompson","J.R. Smith|jr smith","Anderson Varejao|varejao","Iman Shumpert","Dion Waiters","Marcus Smart|smart","Terry Rozier|scary terry","Kyle Korver","Richard Jefferson","Channing Frye","Matthew Dellavedova|delly","Timofey Mozgov","Ben Simmons","Spencer Dinwiddie","Joe Harris","Blake Griffin","LaMarcus Aldridge","Dereck Lively II|dereck lively|lively","Daniel Gafford","P.J. Washington","Tim Hardaway Jr.","Dorian Finney-Smith","Derrick Jones Jr.","Josh Green"],
      film: ["Antawn Jamison","Ramon Sessions","Anthony Parker","Alonzo Gee","Daniel Gibson","Samardo Samuels","Tyler Zeller","Anthony Bennett","Andrew Bynum","C.J. Miles","Jarrett Jack","Sergey Karasev","Shawn Marion","Mike Miller","James Jones","Mo Williams","Dahntay Jones","Jordan McRae","Marcus Morris","Aron Baynes","Semi Ojeleye","Daniel Theis","Guerschon Yabusele","Brad Wanamaker","Robert Williams","Grant Williams","Taurean Prince","DeAndre Jordan","Caris LeVert","Garrett Temple","Jeff Green","Bruce Brown","Patty Mills","Paul Millsap","Nic Claxton","Cam Thomas","Kessler Edwards","Seth Curry","Andre Drummond","Goran Dragic","Day'Ron Sharpe","Royce O'Neale","Christian Wood","Jaden Hardy","Maxi Kleber","Dwight Powell","Dante Exum","Markieff Morris","Quentin Grimes","Naji Marshall","Max Christie","Caleb Martin","Olivier-Maxence Prosper","Brandon Williams"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-ad", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Anthony Davis.",
    note: "Played on the same team in the same season (Pelicans, Lakers, Mavericks), through 2024-25.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Kyrie Irving|kyrie","DeMarcus Cousins|boogie"],
      bandwagon: ["Jrue Holiday","Russell Westbrook|westbrook|russ","Austin Reaves|reaves","Rajon Rondo|rondo","Carmelo Anthony|melo","D'Angelo Russell|dangelo russell","Klay Thompson|klay"],
      starter: ["Eric Gordon","Ryan Anderson","Tyreke Evans","E'Twaun Moore","Nikola Mirotic|mirotic","Julius Randle|randle","Elfrid Payton","Kentavious Caldwell-Pope|kcp","Danny Green","Dwight Howard|dwight","Alex Caruso|caruso","Kyle Kuzma|kuzma","Rui Hachimura|hachimura","Dennis Schroder","Andre Drummond","Malik Monk|monk","Talen Horton-Tucker","Patrick Beverley","Lonnie Walker IV","Jarred Vanderbilt","Gabe Vincent","Jaxson Hayes","Dorian Finney-Smith","Max Christie","Dereck Lively II|lively","P.J. Washington","Daniel Gafford"],
      film: ["Austin Rivers","Greivis Vasquez","Robin Lopez","Al-Farouq Aminu","Jason Smith","Brian Roberts","Anthony Morrow","Jimmer Fredette","Omer Asik","Quincy Pondexter","Norris Cole","Dante Cunningham","Alexis Ajinca","Toney Douglas","Ish Smith","Bryce Dejean-Jones","Kendrick Perkins","Alonzo Gee","Luke Babbitt","Buddy Hield","Langston Galloway","Solomon Hill","Darius Miller","Cheick Diallo","Ian Clark","Jameer Nelson","Emeka Okafor","Wesley Johnson","Frank Jackson","Kenrich Williams","Avery Bradley","JaVale McGee","Markieff Morris","Montrezl Harrell","Marc Gasol","Wesley Matthews","Ben McLemore","Wenyen Gabriel","Stanley Johnson","Thomas Bryant","Troy Brown Jr.","Mo Bamba","Taurean Prince","Christian Wood","Cam Reddish","Spencer Dinwiddie","Jalen Hood-Schifino","Dalton Knecht","Bronny James","Naji Marshall","Caleb Martin","Dwight Powell"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-cp3", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Chris Paul.",
    note: "Played on the same team in the same season (Hornets, Clippers, Rockets, Thunder, Suns, Warriors, Spurs), through 2024-25.",
    tiers: {
      chalk: ["Stephen Curry|steph curry|steph","Blake Griffin","James Harden|harden","Devin Booker|booker","Victor Wembanyama|wemby"],
      bandwagon: ["David West","Tyson Chandler","Peja Stojakovic|peja","DeAndre Jordan|deandre","J.J. Redick|jj redick","Jamal Crawford","Shai Gilgeous-Alexander|sga|shai","Kevin Durant|kd","Klay Thompson|klay","Draymond Green|draymond","Deandre Ayton|ayton","Mikal Bridges|bridges"],
      starter: ["Danilo Gallinari|gallinari","Steven Adams","Clint Capela|capela","Eric Gordon","P.J. Tucker","Trevor Ariza|ariza","Chauncey Billups|billups","Caron Butler","Matt Barnes","Lamar Odom","Jae Crowder","Cameron Johnson","Jalen Smith","Andrew Wiggins|wiggins","Jonathan Kuminga|kuminga","Kevon Looney","De'Aaron Fox","Harrison Barnes","Devin Vassell","Keldon Johnson","Jeremy Sochan"],
      film: ["Desmond Mason","Rasual Butler","Bobby Jackson","Jannero Pargo","Julian Wright","Hilton Armstrong","Morris Peterson","Mike James","Darren Collison","Emeka Okafor","Marcus Thornton","Willie Green","Eric Bledsoe","Randy Foye","Mo Williams","Reggie Evans","Kenyon Martin","Ronny Turiaf","Ryan Hollins","Grant Hill","Glen Davis","Spencer Hawes","Hedo Turkoglu","Austin Rivers","Paul Pierce","Cole Aldrich","Pablo Prigioni","Lance Stephenson","Wesley Johnson","Raymond Felton","Gerald Green","Luc Mbah a Moute","Ryan Anderson","Nene","Danuel House","Kenneth Faried","Terrance Ferguson","Dennis Schroder","Luguentz Dort|lu dort|dort","Darius Bazley","Nerlens Noel","Mike Muscala","Abdel Nader","Torrey Craig","Frank Kaminsky","Langston Galloway","Cameron Payne","Landry Shamet","JaVale McGee","Bismack Biyombo","Ish Wainright","Damion Lee","Josh Okogie","Brandin Podziemski|podz","Moses Moody","Gary Payton II","Dario Saric","Trayce Jackson-Davis","Stephon Castle","Zach Collins","Julian Champagnie","Sandro Mamukelashvili"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-wade", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Dwyane Wade.",
    note: "Played on the same team in the same season (Heat, Bulls, Cavaliers), through 2024-25.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Shaquille O'Neal|shaq","Chris Bosh|bosh","Jimmy Butler|jimmy buckets"],
      bandwagon: ["Udonis Haslem|haslem","Alonzo Mourning|zo","Ray Allen","Gary Payton|the glove","Rajon Rondo|rondo","Hassan Whiteside|whiteside","Goran Dragic|dragic","Kevin Love","Bam Adebayo|bam"],
      starter: ["Mario Chalmers|chalmers","Shane Battier|battier","Mike Miller","Antoine Walker","Jason Williams|white chocolate","Lamar Odom","Eddie Jones","Caron Butler","Michael Beasley","Jermaine O'Neal","Chris Andersen|birdman","Josh Richardson","Justise Winslow","Tyler Johnson","Isaiah Thomas","Jae Crowder","Kelly Olynyk","James Johnson","Dion Waiters","Wayne Ellington","Robin Lopez","Joel Anthony","Luol Deng","Tristan Thompson"],
      film: ["Rafer Alston","Brian Grant","Damon Jones","Christian Laettner","Shandon Anderson","Keyon Dooling","Michael Doleac","James Posey","Jason Kapono","Dorell Wright","Penny Hardaway","Ricky Davis","Smush Parker","Mark Blount","Shawn Marion","Marcus Banks","Daequan Cook","Jamaal Magloire","Quentin Richardson","Carlos Arroyo","Dexter Pittman","Juwan Howard","Erick Dampier","Eddie House","Zydrunas Ilgauskas","Mike Bibby","James Jones","Rashard Lewis","Norris Cole","Greg Oden","Danny Granger","Josh McRoberts","Gerald Green","Amar'e Stoudemire","Taj Gibson","Nikola Mirotic","Doug McDermott","Denzel Valentine","Paul Zipser","Michael Carter-Williams","Jerian Grant","Cristiano Felicio","Derrick Rose","J.R. Smith","Kyle Korver","Jeff Green","Jose Calderon","Cedi Osman","Channing Frye","Rodney McGruder","Derrick Jones Jr.","Duncan Robinson","Yante Maten"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-kg", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Kevin Garnett.",
    note: "Played on the same team in the same season (Timberwolves, Celtics, Nets), through 2024-25.",
    tiers: {
      chalk: ["Paul Pierce|pierce","Ray Allen","Rajon Rondo|rondo"],
      bandwagon: ["Stephon Marbury|starbury","Sam Cassell","Latrell Sprewell|spree","Deron Williams|d will","Brook Lopez","Joe Johnson|iso joe","Andrew Wiggins|wiggins","Zach LaVine|lavine","Karl-Anthony Towns|kat|towns"],
      starter: ["Wally Szczerbiak","Chauncey Billups|billups","Terrell Brandon","Kendrick Perkins|perk","Glen Davis|big baby","Avery Bradley","Jeff Green","Shaquille O'Neal|shaq","Rasheed Wallace|sheed","Jason Terry|jet","Courtney Lee","Andrei Kirilenko|ak47","Ricky Rubio|rubio","Tom Gugliotta"],
      film: ["Troy Hudson","Trenton Hassell","Mark Madsen","Michael Olowokandi","Fred Hoiberg","Ervin Johnson","Rasho Nesterovic","Joe Smith","Kendall Gill","Anthony Peeler","Felipe Lopez","Gary Trent","Ricky Davis","Marko Jaric","Eddie Griffin","Mark Blount","Justin Reed","Rashad McCants","Randy Foye","Ryan Gomes","Eddie House","James Posey","Leon Powe","Tony Allen","P.J. Brown","Brian Scalabrine|scal","Mikki Moore","Marquis Daniels","Nate Robinson","Michael Finley","Delonte West","Jermaine O'Neal","Troy Murphy","Carlos Arroyo","Keyon Dooling","Mickael Pietrus","Sasha Pavlovic","Greg Stiemsma","Brandon Bass","Jason Collins","Chris Wilcox","Ryan Hollins","Jared Sullinger","Leandro Barbosa","Terrence Williams","Shavlik Randolph","Andray Blatche","Mirza Teletovic","Alan Anderson","Shaun Livingston","Mason Plumlee","Marcus Thornton","Kevin Martin","Gorgui Dieng","Shabazz Muhammad","Andre Miller","Tayshaun Prince","Nemanja Bjelica","Tyus Jones"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-pierce", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Paul Pierce.",
    note: "Played on the same team in the same season (Celtics, Nets, Wizards, Clippers), through 2024-25.",
    tiers: {
      chalk: ["Kevin Garnett|kg","Ray Allen","Rajon Rondo|rondo","Antoine Walker"],
      bandwagon: ["Chris Paul|cp3","Blake Griffin","John Wall","Bradley Beal|beal","Deron Williams|d will","Brook Lopez","Joe Johnson|iso joe","Kendrick Perkins|perk"],
      starter: ["Kenny Anderson","Tony Battie","Walter McCarty","Eric Williams","Vin Baker","Ricky Davis","Al Jefferson","Delonte West","Wally Szczerbiak","Gary Payton|the glove","Glen Davis|big baby","Avery Bradley","Jeff Green","Shaquille O'Neal|shaq","Rasheed Wallace|sheed","Jason Terry|jet","Courtney Lee","Marcin Gortat|gortat","Nene","Otto Porter Jr.","J.J. Redick|jj redick","DeAndre Jordan|deandre","Jamal Crawford"],
      film: ["Adrian Griffin","Erick Strickland","Rodney Rogers","Joe Forte","Mark Blount","Chris Mihm","Jiri Welsch","Marcus Banks","Raef LaFrentz","Tony Allen","Gerald Green","Sebastian Telfair","Ryan Gomes","Brian Scalabrine","James Posey","Eddie House","Leon Powe","P.J. Brown","Sam Cassell","Stephon Marbury","Mikki Moore","Marquis Daniels","Nate Robinson","Michael Finley","Jermaine O'Neal","Troy Murphy","Keyon Dooling","Mickael Pietrus","Greg Stiemsma","Brandon Bass","Jared Sullinger","Leandro Barbosa","Andray Blatche","Mirza Teletovic","Alan Anderson","Shaun Livingston","Mason Plumlee","Marcus Thornton","Kevin Martin","Drew Gooden","Kris Humphries","Ramon Sessions","Garrett Temple","Rasual Butler","Austin Rivers","Wesley Johnson","Cole Aldrich","Luc Mbah a Moute","Raymond Felton","Marreese Speights"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-melo", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Carmelo Anthony.",
    note: "Played on the same team in the same season (Nuggets, Knicks, Thunder, Rockets, Blazers, Lakers), through 2024-25.",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Allen Iverson|iverson|ai","Russell Westbrook|westbrook|russ","Damian Lillard|dame|lillard","James Harden|harden"],
      bandwagon: ["Chauncey Billups|billups","Amar'e Stoudemire|amare|stat","Paul George|pg13","Chris Paul|cp3","Anthony Davis|ad|the brow","Kristaps Porzingis|porzingis","Tyson Chandler","J.R. Smith|jr smith","Jeremy Lin|linsanity"],
      starter: ["Kenyon Martin","Nene","Marcus Camby","Andre Miller","Ty Lawson","Steven Adams","CJ McCollum|mccollum","Jusuf Nurkic","Raymond Felton","Iman Shumpert","Baron Davis","Jason Kidd|kidd","Earl Boykins","Chris Andersen|birdman","Linas Kleiza","Hassan Whiteside","Gary Trent Jr.","Robert Covington","Dwight Howard","Malik Monk","Talen Horton-Tucker","Austin Reaves"],
      film: ["Voshon Lenard","Nikoloz Tskitishvili","Rodney White","Francisco Elson","DerMarr Johnson","Greg Buckner","Eduardo Najera","Reggie Evans","Steven Hunter","Yakhouba Diawara","Anthony Carter","Renaldo Balkman","Dahntay Jones","Johan Petro","Chucky Atkins","Joey Graham","Arron Afflalo","Al Harrington","Landry Fields","Toney Douglas","Bill Walker","Shawne Williams","Mike Bibby","Steve Novak","Josh Harrellson","Pablo Prigioni","Chris Copeland","Kurt Thomas","Rasheed Wallace","Andrea Bargnani","Metta World Peace","Tim Hardaway Jr.","Jose Calderon","Langston Galloway","Robin Lopez","Kyle O'Quinn","Lance Thomas","Derrick Rose","Brandon Jennings","Courtney Lee","Jerami Grant","Patrick Patterson","Alex Abrines","Corey Brewer","P.J. Tucker","Clint Capela","Eric Gordon","Rodney Hood","Zach Collins","Anfernee Simons","Enes Kanter","Kent Bazemore","Wayne Ellington","Avery Bradley","DeAndre Jordan","Stanley Johnson","Wenyen Gabriel"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-iverson", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Allen Iverson.",
    note: "Played on the same team in the same season (76ers, Nuggets, Pistons, Grizzlies), through 2024-25.",
    tiers: {
      chalk: ["Carmelo Anthony|melo","Dikembe Mutombo|mutombo"],
      bandwagon: ["Chris Webber|c-webb","Andre Iguodala|iggy","Rasheed Wallace|sheed","Richard Hamilton|rip","Tayshaun Prince|tayshaun","Kenyon Martin","Marcus Camby","Aaron McKie","Eric Snow"],
      starter: ["Theo Ratliff","Tyrone Hill","George Lynch","Matt Harpring","Derrick Coleman","Keith Van Horn","Kenny Thomas","Glenn Robinson","Kyle Korver","Samuel Dalembert","John Salmons","Nene","J.R. Smith|jr smith","Rodney Stuckey","Antonio McDyess","Marc Gasol","Mike Conley","O.J. Mayo","Rudy Gay","Lou Williams|sweet lou"],
      film: ["Toni Kukoc","Jumaine Jones","Raja Bell","Todd MacCulloch","Speedy Claxton","Pepe Sanchez","Larry Hughes","Tim Thomas","Matt Geiger","Jerry Stackhouse","Clarence Weatherspoon","Derrick McKey","Corie Blount","Monty Williams","Greg Buckner","Brian Skinner","Marc Jackson","Willie Green","Steven Hunter","Shavlik Randolph","Michael Bradley","Linas Kleiza","Eduardo Najera","Earl Boykins","Reggie Evans","Yakhouba Diawara","Anthony Carter","Chucky Atkins","Jason Maxiell","Arron Afflalo","Amir Johnson","Walter Herrmann","Kwame Brown","Will Bynum","Hamed Haddadi","Hasheem Thabeet","Marko Jaric","Jamaal Tinsley","Quinton Ross","Darius Songaila","Royal Ivey","Elton Brand","Jrue Holiday","Jason Kapono"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-dwight", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Dwight Howard (like Kobe Bryant).",
    note: "Played on the same team in the same season (Magic, Lakers, Rockets, Hawks, Hornets, Wizards, 76ers), through 2024-25.",
    tiers: {
      chalk: ["Kobe Bryant|kobe","LeBron James|lebron|king james","James Harden|harden","Anthony Davis|ad|the brow"],
      bandwagon: ["Steve Nash|nash","Pau Gasol|pau","Jameer Nelson|jameer","Hedo Turkoglu|hedo","Vince Carter|vinsanity","Grant Hill","Rashard Lewis","Joel Embiid|embiid","Ben Simmons","Russell Westbrook|westbrook|russ","Bradley Beal|beal","Kemba Walker|kemba","Carmelo Anthony|melo"],
      starter: ["J.J. Redick|jj redick","Tracy McGrady|t-mac","Steve Francis","Trevor Ariza|ariza","Chandler Parsons","Jeremy Lin|linsanity","Patrick Beverley","Paul Millsap|millsap","Dennis Schroder","Nicolas Batum|batum","Kent Bazemore","Metta World Peace","Antawn Jamison","Kyle Kuzma|kuzma","Alex Caruso|caruso","Rajon Rondo|rondo","Danny Green","Kentavious Caldwell-Pope|kcp","Seth Curry","Tobias Harris","Tyrese Maxey|maxey"],
      film: ["Mickael Pietrus","Marcin Gortat","Ryan Anderson","Brandon Bass","Courtney Lee","Rafer Alston","Matt Barnes","Gilbert Arenas","Glen Davis","Jason Richardson","Keith Bogans","Tony Battie","Carlos Arroyo","Keyon Dooling","Jodie Meeks","Chris Duhon","Earl Clark","Darius Morris","Jordan Hill","Robert Sacre","Omer Asik","Terrence Jones","Josh Smith","Donatas Motiejunas","Corey Brewer","Jason Terry","Ty Lawson","Michael Beasley","Marreese Speights","Thabo Sefolosha","Mike Muscala","Taurean Prince","Ersan Ilyasova","Kris Humphries","Malik Monk","Jeremy Lamb","Frank Kaminsky","Cody Zeller","Michael Kidd-Gilchrist","Marvin Williams","Jabari Parker","Thomas Bryant","Ian Mahinmi","JaVale McGee","Avery Bradley","Markieff Morris","Quinn Cook","Mike Scott","Shake Milton","Furkan Korkmaz","Matisse Thybulle","Tony Bradley","Wayne Ellington","Austin Reaves"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-dame", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Damian Lillard (like Giannis).",
    note: "Played on the same team in the same season (Trail Blazers, Bucks), through 2024-25.",
    tiers: {
      chalk: ["Giannis Antetokounmpo|giannis|greek freak","CJ McCollum|mccollum","LaMarcus Aldridge|aldridge","Carmelo Anthony|melo"],
      bandwagon: ["Khris Middleton|middleton","Jusuf Nurkic|nurkic","Anfernee Simons|ant simons","Brook Lopez|splash mountain","Bobby Portis|portis","Nicolas Batum|batum","Wesley Matthews","Jerami Grant"],
      starter: ["Robin Lopez","Mason Plumlee","Al-Farouq Aminu","Ed Davis","Maurice Harkless|moe harkless","Evan Turner","Allen Crabbe","Enes Kanter|enes freedom","Hassan Whiteside","Gary Trent Jr.","Norman Powell","Rodney Hood","Zach Collins","Kyle Kuzma|kuzma","Pat Connaughton","Malik Beasley","Jae Crowder"],
      film: ["J.J. Hickson","Meyers Leonard","Will Barton","Victor Claver","Joel Freeland","Sasha Pavlovic","Luke Babbitt","Thomas Robinson","Mo Williams","Dorell Wright","Earl Watson","Chris Kaman","Steve Blake","Alonzo Gee","Tim Frazier","Gerald Henderson","Noah Vonleh","Shabazz Napier","Jake Layman","Caleb Swanigan","Seth Curry","Skal Labissiere","Mario Hezonja","Trevor Ariza","Derrick Jones Jr.","Harry Giles","Dennis Smith Jr.","Cody Zeller","Tony Snell","Ben McLemore","Larry Nance Jr.","Josh Hart","Nassir Little","Trendon Watford","Keon Johnson","Justise Winslow","Drew Eubanks","Shaedon Sharpe","Jabari Walker","Cameron Payne","Patrick Beverley","MarJon Beauchamp","AJ Green","Andre Jackson Jr.","Chris Livingston","Thanasis Antetokounmpo","Taurean Prince","Delon Wright","Ryan Rollins","Stanley Umude","Kevin Porter Jr."],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-embiid", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Joel Embiid (like James Harden).",
    note: "Played on the same team in the same season (76ers), through 2024-25.",
    tiers: {
      chalk: ["James Harden|harden","Ben Simmons","Tyrese Maxey|maxey","Paul George|pg13"],
      bandwagon: ["Tobias Harris","Jimmy Butler|jimmy buckets","Al Horford|horford","J.J. Redick|jj redick","Dwight Howard|dwight","Kyle Lowry|lowry","Dario Saric"],
      starter: ["Robert Covington","Seth Curry","Danny Green","P.J. Tucker","De'Anthony Melton","Josh Richardson","T.J. McConnell|tj mcconnell","Markelle Fultz","Matisse Thybulle|thybulle","Furkan Korkmaz","Shake Milton","Georges Niang","Kelly Oubre Jr.|kelly oubre","Nicolas Batum|batum","Buddy Hield","Paul Reed|bball paul","Caleb Martin","Eric Gordon","Guerschon Yabusele","Jared McCain","Quentin Grimes","Andre Drummond"],
      film: ["Jahlil Okafor","Richaun Holmes","Nik Stauskas","Gerald Henderson","Ersan Ilyasova","Sergio Rodriguez","Jerryd Bayless","Amir Johnson","Marco Belinelli","Justin Anderson","Wilson Chandler","Landry Shamet","Mike Scott","Jonathon Simmons","James Ennis","Boban Marjanovic","Raul Neto","Norvel Pelle","Alec Burks","Glenn Robinson III","George Hill","Isaiah Joe","Tony Bradley","Charles Bassey","DeAndre Jordan","Montrezl Harrell","Danuel House","Jalen McDaniels","Patrick Beverley","Cameron Payne","Mo Bamba","Kenyon Martin Jr.","Ricky Council IV","Jeff Dowtin Jr.","Lonnie Walker IV","Justin Edwards","Adem Bona"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-butler", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Jimmy Butler (like Dwyane Wade).",
    note: "Played on the same team in the same season (Bulls, Timberwolves, 76ers, Heat, Warriors), through 2024-25.",
    tiers: {
      chalk: ["Dwyane Wade|d-wade|dwade","Derrick Rose|d rose","Stephen Curry|steph curry|steph","Joel Embiid|embiid"],
      bandwagon: ["Joakim Noah|noah","Karl-Anthony Towns|kat|towns","Andrew Wiggins|wiggins","Bam Adebayo|bam","Tyler Herro|herro","Kyle Lowry|lowry","Draymond Green|draymond","Ben Simmons","Tobias Harris","Luol Deng"],
      starter: ["Taj Gibson","Carlos Boozer|boozer","Pau Gasol","Kirk Hinrich|hinrich","Goran Dragic|dragic","Duncan Robinson","Jae Crowder","Max Strus","Gabe Vincent","Caleb Martin","Terry Rozier|scary terry","J.J. Redick|jj redick","Jeff Teague","Rajon Rondo|rondo","Kyle Korver","Jonathan Kuminga","Buddy Hield","Brandin Podziemski"],
      film: ["Ronnie Brewer","C.J. Watson","Omer Asik","Nate Robinson","Marco Belinelli","Mike Dunleavy Jr.","Aaron Brooks","Tony Snell","Nikola Mirotic","Doug McDermott","E'Twaun Moore","Bobby Portis","Robin Lopez","Cristiano Felicio","Michael Carter-Williams","Jerian Grant","Isaiah Canaan","Gorgui Dieng","Jamal Crawford","Nemanja Bjelica","Tyus Jones","Mike Scott","Boban Marjanovic","James Ennis","Jonathon Simmons","Greg Monroe","Meyers Leonard","Kendrick Nunn","Kelly Olynyk","Derrick Jones Jr.","Andre Iguodala","Victor Oladipo","P.J. Tucker","Dewayne Dedmon","Markieff Morris","Kevin Love","Cody Zeller","Haywood Highsmith","Thomas Bryant","Nikola Jovic","Jaime Jaquez Jr.","Josh Richardson","Delon Wright","Patty Mills","Kevon Looney","Moses Moody","Gary Payton II","Quinten Post","Pat Spencer","Trayce Jackson-Davis"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-booker", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Devin Booker (like Kevin Durant).",
    note: "Played on the same team in the same season (Suns), through 2024-25.",
    tiers: {
      chalk: ["Kevin Durant|kd","Chris Paul|cp3","Bradley Beal|beal"],
      bandwagon: ["Deandre Ayton|ayton","Mikal Bridges|bridges","Eric Bledsoe","Brandon Knight","Tyson Chandler","Jusuf Nurkic|nurkic","T.J. Warren"],
      starter: ["Jae Crowder","Cameron Johnson","Dario Saric","Cameron Payne","Ricky Rubio|rubio","Kelly Oubre Jr.|kelly oubre","Josh Jackson","Grayson Allen","Royce O'Neale","Eric Gordon","Isaiah Thomas","Alex Len","Marquese Chriss","Dragan Bender","P.J. Tucker","Jared Dudley","Trevor Ariza","Torrey Craig","Landry Shamet","JaVale McGee","Frank Kaminsky","Elie Okobo"],
      film: ["Markieff Morris","Ronnie Price","Mirza Teletovic","Archie Goodwin","Jon Leuer","Sonny Weems","Chase Budinger","Alan Williams","Derrick Jones Jr.","Leandro Barbosa","Tyler Ulis","Troy Daniels","Alec Peters","Davon Reed","Shaquille Harrison","Mike James","Elfrid Payton","Isaiah Canaan","Richaun Holmes","De'Anthony Melton","Ray Spalding","Jamal Crawford","Ty Jerome","Cheick Diallo","Jevon Carter","Langston Galloway","Abdel Nader","Jalen Smith","E'Twaun Moore","Bismack Biyombo","Ish Wainright","Duane Washington Jr.","Damion Lee","Josh Okogie","Saben Lee","Darius Bazley","Terrence Ross","Drew Eubanks","Bol Bol","Keita Bates-Diop","Chimezie Metu","Yuta Watanabe","Udoka Azubuike","David Roddy","Thaddeus Young","Ryan Dunn","Oso Ighodaro","Collin Gillespie","Monte Morris","Tyus Jones","Mason Plumlee","Nick Richards","Cody Martin","Vasilije Micic"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-mitchell", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Donovan Mitchell (like Rudy Gobert).",
    note: "Played on the same team in the same season (Jazz, Cavaliers), through 2024-25.",
    tiers: {
      chalk: ["Rudy Gobert|gobert","Darius Garland|garland","Evan Mobley|mobley"],
      bandwagon: ["Mike Conley","Jarrett Allen","Joe Ingles|jingles","Bojan Bogdanovic|bogdanovic","Jordan Clarkson|clarkson","Ricky Rubio|rubio","Max Strus","Caris LeVert|levert"],
      starter: ["Derrick Favors","Royce O'Neale","Jae Crowder","Kyle Korver","Georges Niang","Rudy Gay","Hassan Whiteside","Isaac Okoro","Dean Wade","Ty Jerome","De'Andre Hunter","Sam Merrill","Tristan Thompson"],
      film: ["Ekpe Udoh","Thabo Sefolosha","Rodney Hood","Alec Burks","Dante Exum","Raul Neto","Jonas Jerebko","Grayson Allen","Emmanuel Mudiay","Ed Davis","Jeff Green","Tony Bradley","Miye Oni","Juwan Morgan","Rayjon Tucker","Matt Thomas","Jarrell Brantley","Trent Forrest","Elijah Hughes","Udoka Azubuike","Jared Butler","Danuel House","Eric Paschall","Juancho Hernangomez","Cedi Osman","Lamar Stevens","Robin Lopez","Danny Green","Mamadi Diakite","Damian Jones","Dylan Windler","Isaiah Mobley","Craig Porter Jr.","Emoni Bates","Marcus Morris","Jaylon Tyson","Javonte Green"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-ja", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Ja Morant (like Jaren Jackson Jr.).",
    note: "Played on the same team in the same season (Grizzlies), through 2024-25.",
    tiers: {
      chalk: ["Jaren Jackson Jr.|jaren jackson|jjj","Desmond Bane|bane"],
      bandwagon: ["Dillon Brooks","Steven Adams","Jonas Valanciunas|valanciunas","Marcus Smart|smart","Brandon Clarke","Zach Edey|edey","Tyus Jones"],
      starter: ["Kyle Anderson","Justise Winslow","De'Anthony Melton","Grayson Allen","Xavier Tillman","Santi Aldama","Ziaire Williams","John Konchar","Luke Kennard","Derrick Rose","GG Jackson","Vince Williams Jr.","Jaylen Wells","Scotty Pippen Jr."],
      film: ["Jae Crowder","Solomon Hill","Josh Jackson","Gorgui Dieng","Killian Tillie","Sean McDermott","Tim Frazier","Jontay Porter","Jarrett Culver","Kris Dunn","Yuta Watanabe","Kenneth Lofton Jr.","David Roddy","Jake LaRavia","Danny Green","Jordan Goodwin","Lamar Stevens","Trey Jemison","Jay Huff","Cam Spencer","Yuki Kawamura|kawamura","Marvin Bagley III"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-sga", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Shai Gilgeous-Alexander (like Chet Holmgren).",
    note: "Played on the same team in the same season (Clippers, Thunder), through 2024-25.",
    tiers: {
      chalk: ["Chet Holmgren|chet","Jalen Williams|j dub|jdub","Chris Paul|cp3"],
      bandwagon: ["Luguentz Dort|lu dort|dort","Josh Giddey|giddey","Alex Caruso|caruso","Isaiah Hartenstein|hartenstein","Danilo Gallinari|gallinari","Steven Adams","Dennis Schroder","Lou Williams|sweet lou","Montrezl Harrell","Tobias Harris"],
      starter: ["Cason Wallace","Aaron Wiggins","Kenrich Williams","Isaiah Joe","Gordon Hayward","Al Horford","Mike Muscala","Darius Bazley","Hamidou Diallo","Theo Maledon","George Hill","Tre Mann","Aleksej Pokusevski|poku","Jeremiah Robinson-Earl","Derrick Favors","Ousmane Dieng","Jaylin Williams","Ajay Mitchell","Patrick Beverley","Marcin Gortat","Boban Marjanovic","Avery Bradley","Ivica Zubac","Landry Shamet","JaMychal Green"],
      film: ["Nerlens Noel","Abdel Nader","Terrance Ferguson","Deonte Burton","Justin Patton","Isaiah Roby","Moses Brown","Svi Mykhailiuk","Ty Jerome","Charlie Brown Jr.","Vit Krejci","Lindy Waters III","Olivier Sarr","Eugene Omoruyi","Jaylen Hoard","Jared Butler","Dillon Jones","Adam Flagler","Branden Carlson","Wilson Chandler","Garrett Temple","Sindarius Thornwell","Tyrone Wallace","Mike Scott","Johnathan Motley","Jerome Robinson"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-ant", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Anthony Edwards (like KAT).",
    note: "Played on the same team in the same season (Timberwolves), through 2024-25.",
    tiers: {
      chalk: ["Karl-Anthony Towns|kat|towns","Rudy Gobert|gobert","Julius Randle|randle"],
      bandwagon: ["D'Angelo Russell|dangelo russell","Mike Conley","Jaden McDaniels","Naz Reid","Donte DiVincenzo"],
      starter: ["Malik Beasley","Patrick Beverley|pat bev","Jarred Vanderbilt","Kyle Anderson","Taurean Prince","Nickeil Alexander-Walker|naw","Jordan McLaughlin","Ricky Rubio","Juancho Hernangomez","Jaylen Nowell","Josh Okogie","Monte Morris","Rob Dillingham","Joe Ingles","Jarrett Culver"],
      film: ["Ed Davis","Jake Layman","Leandro Bolmaro","Greg Monroe","Nathan Knight","Luka Garza","Wendell Moore Jr.","Josh Minott","Bryn Forbes","Austin Rivers","Matt Ryan","Troy Brown Jr.","Leonard Miller","Jaylen Clark","Terrence Shannon Jr.","Jesse Edwards"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-trae", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Trae Young (like Dejounte Murray).",
    note: "Played on the same team in the same season (Hawks), through 2024-25.",
    tiers: {
      chalk: ["Dejounte Murray","John Collins","Jalen Johnson"],
      bandwagon: ["Clint Capela|capela","Bogdan Bogdanovic|bogdanovic","De'Andre Hunter","Kevin Huerter|huerter","Danilo Gallinari|gallinari","Dyson Daniels","Zaccharie Risacher|risacher","Vince Carter|vinsanity","Lou Williams|sweet lou"],
      starter: ["Onyeka Okongwu|okongwu","Cam Reddish","Kent Bazemore","Taurean Prince","Saddiq Bey","Delon Wright","Gorgui Dieng","Dewayne Dedmon","Alex Len","Jeff Teague","Kris Dunn","Rajon Rondo|rondo","Tony Snell","Solomon Hill","Larry Nance Jr.","Caris LeVert|levert","Terance Mann","Georges Niang"],
      film: ["Miles Plumlee","Omari Spellman","Jaylen Adams","Daniel Hamilton","Justin Anderson","Bruno Fernando","Treveon Graham","Brandon Goodwin","Charlie Brown Jr.","Skal Labissiere","Nathan Knight","Kevin Knox","Sharife Cooper","Aaron Holiday","Justin Holiday","AJ Griffin","Trent Forrest","Frank Kaminsky","Vit Krejci","Garrison Mathews","Kobe Bufkin","Mouhamed Gueye","Seth Lundy","David Roddy","Dominick Barlow","Keaton Wallace"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-brunson", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Jalen Brunson (like Luka Doncic).",
    note: "Played on the same team in the same season (Mavericks, Knicks), through 2024-25.",
    tiers: {
      chalk: ["Luka Doncic|luka","Karl-Anthony Towns|kat|towns","Julius Randle|randle"],
      bandwagon: ["Mikal Bridges|bridges","OG Anunoby|anunoby","Josh Hart","Kristaps Porzingis|porzingis","Dirk Nowitzki|dirk","Mitchell Robinson","RJ Barrett","Immanuel Quickley|quickley","Donte DiVincenzo"],
      starter: ["Tim Hardaway Jr.","Dorian Finney-Smith","Maxi Kleber","Dwight Powell","Isaiah Hartenstein|hartenstein","Josh Richardson","Seth Curry","Spencer Dinwiddie","Reggie Bullock","Quentin Grimes","Obi Toppin","Precious Achiuwa","Miles McBride","Bojan Bogdanovic","Cameron Payne","Landry Shamet","Harrison Barnes","DeAndre Jordan","Wesley Matthews","J.J. Barea|barea"],
      film: ["Dennis Smith Jr.","Devin Harris","Salah Mejri","Yogi Ferrell","Ray Spalding","Ryan Broekhoff","Delon Wright","Justin Jackson","Courtney Lee","Boban Marjanovic","Willie Cauley-Stein","Michael Kidd-Gilchrist","Trey Burke","Josh Green","James Johnson","Nate Hinton","Tyrell Terry","Wes Iwundu","Nicolo Melli","Moses Brown","Frank Ntilikina","Theo Pinson","Sterling Brown","Marquese Chriss","Jericho Sims","Evan Fournier","Cam Reddish","Derrick Rose","Isaiah Roby","Charlie Brown Jr.","DaQuan Jeffries","Jacob Toppin","Duane Washington Jr.","Mamadi Diakite","Ariel Hukporti","Tyler Kolek","Pacome Dadiet","P.J. Tucker"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-hakeem", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Hakeem Olajuwon (like Clyde Drexler).",
    note: "Played on the same team in the same season (Rockets 1984-2001, Raptors 2001-02).",
    tiers: {
      chalk: ["Clyde Drexler|clyde the glide","Charles Barkley|sir charles","Scottie Pippen|pippen","Vince Carter|vinsanity"],
      bandwagon: ["Robert Horry|big shot rob|horry","Ralph Sampson","Kenny Smith|the jet","Sam Cassell","Steve Francis|stevie franchise","Otis Thorpe","Vernon Maxwell|mad max"],
      starter: ["Mario Elie","Cuttino Mobley|cat mobley","Sleepy Floyd|eric floyd","Rodney McCray","Lewis Lloyd","Robert Reid","Allen Leavell","Buck Johnson","Eddie Johnson","Kevin Willis","Matt Maloney","Antonio Davis","Alvin Williams","Morris Peterson","Chris Childs","Keon Clark","Jerome Williams","Lindsey Hunter"],
      film: ["Mike Woodson","Avery Johnson","Chucky Brown","Carl Herrera","Pete Chilcutt","Matt Bullard","Scott Brooks","Brent Price","Shandon Anderson","Walt Williams","Kelvin Cato","Michael Dickerson","Bryce Drew","Moochie Norris","Mitchell Wiggins","Tim McCormick","Larry Smith","Dave Jamerson","Sam Mack","Mark Bryant","Emanual Davis","Othella Harrington","Joe Barry Carroll","Purvis Short","Jim Petersen","Dirk Minniefield","Cedric Maxwell","Tree Rollins","Dell Curry","Eric Montross","Michael Stewart","Mamadou N'Diaye"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-magic", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Magic Johnson.",
    note: "Played on the same team in the same season (Lakers 1979-91, 1995-96).",
    tiers: {
      chalk: ["Kareem Abdul-Jabbar|kareem","James Worthy"],
      bandwagon: ["Byron Scott","Michael Cooper","Jamaal Wilkes|silk","A.C. Green","Kurt Rambis|rambis","Vlade Divac|vlade","Norm Nixon","Bob McAdoo"],
      starter: ["Mychal Thompson","Cedric Ceballos","Nick Van Exel","Eddie Jones","Elden Campbell","Sam Perkins","Spencer Haywood","Mitch Kupchak","Jim Chones","Orlando Woolridge","Terry Teagle","Larry Drew","Sedale Threatt","George Lynch","Anthony Peeler","Corie Blount","Derek Strong","Mike McGee","Wes Matthews","Billy Thompson","Milt Wagner","Tony Campbell"],
      film: ["Ron Boone","Butch Lee","Brad Holland","Mark Landsberger","Jim Brewer","Eddie Jordan","Kevin McKenna","Larry Spriggs","Ronnie Lester","Mike Smrek","Jeff Lamp","Mel McCants","Irving Thomas","Tony Smith","Frank Brickowski","Adrian Branch","Petur Gudmundsson"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-bird", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Larry Bird.",
    note: "Played on the same team in the same season (Celtics 1979-92).",
    tiers: {
      chalk: ["Kevin McHale|mchale","Robert Parish|the chief"],
      bandwagon: ["Dennis Johnson|dj","Danny Ainge|ainge","Bill Walton|walton","Cedric Maxwell|cornbread","Reggie Lewis","Nate Archibald|tiny archibald"],
      starter: ["Dave Cowens","Gerald Henderson","M.L. Carr","Scott Wedman","Chris Ford","Rick Robey","Brian Shaw","Dee Brown","Kevin Gamble","Jim Paxson","Ed Pinckney","Joe Kleine","Rick Fox"],
      film: ["Pete Maravich|pistol pete","Quinn Buckner","Jerry Sichting","David Thirdkill","Greg Kite","Sam Vincent","Rick Carlisle|carlisle","Carlos Clark","Wayne Kreklow","Eric Fernsten","Terry Duerod","Fred Roberts","Mark Acres","Brad Lohaus","Darren Daye","Conner Henry","John Bagley","Michael Smith","Kelvin Upshaw","Charles Smith","Stojko Vrankovic","Derek Smith","Jeff Judkins"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-barkley", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Charles Barkley (like Hakeem Olajuwon).",
    note: "Played on the same team in the same season (76ers 1984-92, Suns 1992-96, Rockets 1996-2000).",
    tiers: {
      chalk: ["Hakeem Olajuwon|hakeem|the dream","Julius Erving|dr j","Scottie Pippen|pippen","Clyde Drexler|clyde the glide","Moses Malone"],
      bandwagon: ["Kevin Johnson|kj","Dan Majerle|thunder dan","Maurice Cheeks|mo cheeks","Hersey Hawkins","Tom Chambers","Andrew Toney"],
      starter: ["Danny Ainge","A.C. Green","Cedric Ceballos","Wesley Person","Mario Elie","Matt Maloney","Kevin Willis","Rick Mahorn","Johnny Dawkins","Armen Gilliam","Bobby Jones","Mike Gminski","Michael Finley","Wayman Tisdale","Danny Manning","Eddie Johnson","Brent Price","Steve Francis","Cuttino Mobley","Shandon Anderson","Walt Williams","Oliver Miller","Richard Dumas","Mark West"],
      film: ["Ron Anderson","Manute Bol","Charles Shackleford","Jayson Williams","Kenny Payne","Derek Smith","Scott Brooks","Ben Coleman","David Wingate","Cliff Robinson","Sedale Threatt","Clint Richardson","Clemon Johnson","Marc Iavaroni","Sam Williams","Kenny Green","Joe Kleine","Frank Johnson","Negele Knight","Jerrod Mustaf","Elliot Perry","Hot Rod Williams","Danny Schayes","Chucky Brown","Charles Jones","Kelvin Cato","Bryce Drew","Michael Dickerson","Antoine Carr","Othella Harrington","Moochie Norris","Sam Mack"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-malone", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Karl Malone (like John Stockton).",
    note: "Played on the same team in the same season (Jazz 1985-2003, Lakers 2003-04).",
    tiers: {
      chalk: ["John Stockton|stockton","Kobe Bryant|kobe","Shaquille O'Neal|shaq","Gary Payton|the glove"],
      bandwagon: ["Jeff Hornacek|hornacek","Mark Eaton","Bryon Russell","Andrei Kirilenko|ak47","Greg Ostertag|ostertag","Derek Fisher|fisher"],
      starter: ["Thurl Bailey","Darrell Griffith","Tom Chambers","Antoine Carr","Howard Eisley","Shandon Anderson","Adam Keefe","Jeff Malone","Blue Edwards","Matt Harpring","Donyell Marshall","DeShawn Stevenson","John Starks","Rick Fox","Devean George","Luke Walton","Horace Grant","Kareem Rush","Slava Medvedenko|stanislav medvedenko"],
      film: ["Rickey Green","Bobby Hansen","Kelly Tripucka","Mike Brown","Jim Les","Eric Leckner","Marc Iavaroni","Mel Turpin","Delaney Rudd","Tyrone Corbin","David Benoit","Felton Spencer","Jay Humphries","Larry Krystkowiak","Chris Morris","Olden Polynice","Greg Foster","Jacque Vaughn","Quincy Lewis","Scott Padgett","Armen Gilliam","Jarron Collins","Calbert Cheaney","Mark Jackson","John Amaechi","Danny Manning","Brian Cook","Jannero Pargo"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-vince", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Vince Carter (like Tracy McGrady).",
    note: "Played on the same team in the same season (Raptors, Nets, Magic, Suns, Mavericks, Grizzlies, Kings, Hawks (1998-2020)).",
    tiers: {
      chalk: ["Tracy McGrady|t-mac","Dirk Nowitzki|dirk","Jason Kidd|kidd","Trae Young|trae","Dwight Howard|dwight"],
      bandwagon: ["Chris Bosh|bosh","Richard Jefferson|rj","Marc Gasol","Zach Randolph|z-bo|zbo","Mike Conley","Monta Ellis","Jason Terry|jet","Charles Oakley","Antonio Davis"],
      starter: ["Alvin Williams","Morris Peterson","Jalen Rose","Hakeem Olajuwon|hakeem","Kevin Willis","Nenad Krstic","Devin Harris","Rashard Lewis","Hedo Turkoglu|hedo","Jameer Nelson|jameer","Grant Hill","Steve Nash","Shawn Marion|the matrix","Tony Allen","De'Aaron Fox|fox","Buddy Hield","Willie Cauley-Stein","John Collins","Kevin Huerter|huerter","Taurean Prince","Dewayne Dedmon","Kent Bazemore"],
      film: ["Dell Curry","Muggsy Bogues","Doug Christie","Dee Brown","Keon Clark","Jerome Williams","Michael Stewart","Lindsey Hunter","Chris Childs","Rafer Alston","Donyell Marshall","Brian Scalabrine","Jason Collins","Marcus Williams","Josh Boone","Bostjan Nachbar","Sean Williams","Brook Lopez","Mikki Moore","Yi Jianlian","Chris Douglas-Roberts","J.J. Redick","Mickael Pietrus","Marcin Gortat","Ryan Anderson","Matt Barnes","Jason Williams","Robin Lopez","Jared Dudley","Hakim Warrick","Aaron Brooks","Brandan Wright","Rodrigue Beaubois","Delonte West","Elton Brand","Chris Kaman","O.J. Mayo","Darren Collison","Jae Crowder","Samuel Dalembert","Jose Calderon","Wayne Ellington","Jeff Green","Kosta Koufos","Courtney Lee","JaMychal Green","Troy Daniels","Andrew Harrison","Wayne Selden","Garrett Temple","Skal Labissiere","Frank Mason","Justin Jackson","Bogdan Bogdanovic","George Hill","Iman Shumpert","Jeremy Lin","Alex Len","Omari Spellman","DeAndre' Bembry","Justin Anderson","Miles Plumlee","Daniel Hamilton","Jaylen Adams","Cam Reddish","Bruno Fernando","Treveon Graham","Damian Jones","Jabari Parker","Brandon Goodwin","Charlie Brown Jr.","Clint Capela"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-rayallen", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Ray Allen (like Kevin Garnett).",
    note: "Played on the same team in the same season (Bucks, Sonics, Celtics, Heat (1996-2014)).",
    tiers: {
      chalk: ["Kevin Garnett|kg","Paul Pierce|pierce","LeBron James|lebron|king james","Dwyane Wade|d-wade|dwade"],
      bandwagon: ["Rajon Rondo|rondo","Chris Bosh|bosh","Glenn Robinson|big dog","Sam Cassell","Rashard Lewis","Vin Baker","Terrell Brandon"],
      starter: ["Kendrick Perkins|perk","Glen Davis|big baby","Tim Thomas","Shane Battier|battier","Mario Chalmers|chalmers","Udonis Haslem|haslem","Chris Andersen|birdman","Brent Barry","Luke Ridnour","Nick Collison","Shaquille O'Neal|shaq","Rasheed Wallace|sheed","Michael Redd","Anthony Mason","Ervin Johnson","Scott Williams","Robert Traylor","Mike James","Danny Fortson","Earl Watson","Jerome James","Antonio Daniels","Damien Wilkins"],
      film: ["Johnny Newman","Andrew Lang","Elliot Perry","Sherman Douglas","Armen Gilliam","Shawn Respert","Dell Curry","Haywood Workman","J.R. Reid","Darvin Ham","Vinny Del Negro","Danny Manning","Michael Curry","Lindsey Hunter","Jason Caffey","Joel Przybilla","Marcus Haislip","Calvin Booth","Reggie Evans","Ronald Murray","Vitaly Potapenko","Ibrahim Kutluay","Mateen Cleaves","Vladimir Radmanovic","Robert Swift","Chris Wilcox","Johan Petro","Mickael Gelabale","James Posey","Eddie House","Leon Powe","Tony Allen","P.J. Brown","Brian Scalabrine","Stephon Marbury","Mikki Moore","Marquis Daniels","Nate Robinson","Michael Finley","Jermaine O'Neal","Troy Murphy","Keyon Dooling","Mike Bibby","Norris Cole","Mike Miller","James Jones","Joel Anthony","Greg Oden","Michael Beasley"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-pg", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Paul George (like Russell Westbrook).",
    note: "Played on the same team in the same season (Pacers, Thunder, Clippers, 76ers (2010-25)).",
    tiers: {
      chalk: ["Russell Westbrook|westbrook|russ","Kawhi Leonard|kawhi","James Harden|harden","Joel Embiid|embiid","Carmelo Anthony|melo"],
      bandwagon: ["Danny Granger","Roy Hibbert|hibbert","David West","George Hill","Lance Stephenson|born ready","Steven Adams","Shai Gilgeous-Alexander|sga|shai","Tyrese Maxey|maxey","Lou Williams|sweet lou","Myles Turner"],
      starter: ["Monta Ellis","Jeff Teague","Thaddeus Young","C.J. Miles","Rodney Stuckey","Luis Scola","Jerami Grant","Dennis Schroder","Patrick Patterson","Raymond Felton","Ivica Zubac|zubac","Montrezl Harrell","Marcus Morris","Reggie Jackson","Nicolas Batum|batum","Terance Mann","Norman Powell","Kelly Oubre Jr.","Guerschon Yabusele","Andre Drummond"],
      film: ["Dahntay Jones","T.J. Ford","Mike Dunleavy Jr.","Tyler Hansbrough","Darren Collison","Josh McRoberts","Brandon Rush","Leandro Barbosa","Ian Mahinmi","Sam Young","Orlando Johnson","Gerald Green","D.J. Augustin","Chris Copeland","Evan Turner","Rasual Butler","Solomon Hill","Damjan Rudez","Lavoy Allen","Shayne Whittington","Donald Sloan","C.J. Watson","Glenn Robinson III","Jordan Hill","Joe Young","Rakeem Christmas","Al Jefferson","Aaron Brooks","Kevin Seraphin","Corey Brewer","Alex Abrines","Josh Huestis","Terrance Ferguson","Nerlens Noel","Hamidou Diallo","Markieff Morris","Abdel Nader","Deonte Burton","Patrick Beverley","Landry Shamet","JaMychal Green","Rodney McGruder","Serge Ibaka","Luke Kennard","Rajon Rondo","DeMarcus Cousins","Robert Covington","Eric Bledsoe","Amir Coffey","Jason Preston","Brandon Boston Jr.","Mason Plumlee","Daniel Theis","Kris Dunn","KJ Martin","Caleb Martin","Eric Gordon","Kyle Lowry","Jared McCain","Quentin Grimes","Ricky Council IV","Justin Edwards"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-pau", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Pau Gasol (like Kobe Bryant).",
    note: "Played on the same team in the same season (Grizzlies, Lakers, Bulls, Spurs, Bucks (2001-19)).",
    tiers: {
      chalk: ["Kobe Bryant|kobe","Derrick Rose|d rose","Jimmy Butler|jimmy buckets","Kawhi Leonard|kawhi"],
      bandwagon: ["Lamar Odom|odom","Derek Fisher|fisher","Andrew Bynum|bynum","Ron Artest|metta world peace","Steve Nash|nash","Dwight Howard|dwight","Joakim Noah|noah","Tony Parker|tp","Manu Ginobili|manu","LaMarcus Aldridge|aldridge","Giannis Antetokounmpo|giannis|greek freak"],
      starter: ["Mike Miller","Jason Williams|white chocolate","Shane Battier|battier","Mike Bibby","Stromile Swift","James Posey","Bonzi Wells","Damon Stoudamire","Rudy Gay","Kyle Lowry","Shannon Brown","Sasha Vujacic|the machine","Jordan Farmar","Luke Walton","Trevor Ariza","Matt Barnes","Taj Gibson","Mike Dunleavy Jr.","Aaron Brooks","Nikola Mirotic","Danny Green","Patty Mills","Dejounte Murray","Khris Middleton","Eric Bledsoe"],
      film: ["Lorenzen Wright","Earl Watson","Wesley Person","Brevin Knight","Grant Long","Michael Dickerson","Jake Tsakalidis","Bo Outlaw","Dahntay Jones","Antonio Burks","Ryan Humphrey","Brian Cardinal","Eddie Jones","Hakim Warrick","Juan Carlos Navarro","Tarence Kinsey","Chucky Atkins","Ronny Turiaf","Vladimir Radmanovic","Chris Mihm","DJ Mbenga","Adam Morrison","Josh Powell","Steve Blake","Jodie Meeks","Jordan Hill","Robert Sacre","Chris Duhon","Earl Clark","Antawn Jamison","Kendall Marshall","Xavier Henry","Nick Young","Kirk Hinrich","Doug McDermott","E'Twaun Moore","Tony Snell","Bobby Portis","Justin Holiday","Cameron Bairstow","Cristiano Felicio","Davis Bertans","Dewayne Dedmon","Bryn Forbes","Kyle Anderson","Joffrey Lauvergne","Brandon Paul","Jakob Poeltl","Marco Belinelli","Derrick White","Lonnie Walker IV","George Hill","Brook Lopez","Ersan Ilyasova","Pat Connaughton","Sterling Brown","Malcolm Brogdon"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-bosh", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Chris Bosh (like LeBron James).",
    note: "Played on the same team in the same season (Raptors 2003-10, Heat 2010-16).",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Dwyane Wade|d-wade|dwade","Vince Carter|vinsanity"],
      bandwagon: ["Ray Allen","Shane Battier|battier","Mario Chalmers|chalmers","Udonis Haslem|haslem","Goran Dragic|dragic","Hassan Whiteside|whiteside","Jalen Rose","Jose Calderon","Andrea Bargnani|bargnani","T.J. Ford","Hedo Turkoglu|hedo"],
      starter: ["Mike Miller","Chris Andersen|birdman","Rashard Lewis","Michael Beasley","Luol Deng","Norris Cole","James Jones","Joel Anthony","Morris Peterson","Anthony Parker","Jason Kapono","Jermaine O'Neal","Shawn Marion","Amir Johnson","DeMar DeRozan|derozan","Sonny Weems","Jarrett Jack","Antonio Davis","Rafer Alston","Mike James","Donyell Marshall","Lamond Murray"],
      film: ["Alvin Williams","Michael Curry","Jerome Moiso","Matt Bonner","Rafael Araujo","Loren Woods","Pape Sow","Charlie Villanueva","Joey Graham","Eric Williams","Juan Dixon","Darrick Martin","Kris Humphries","Luke Jackson","Carlos Delfino","Roko Ukic","Nathan Jawai","Jake Voskuhl","Will Solomon","Marcus Banks","Patrick O'Bryant","Reggie Evans","Leandro Barbosa","Antoine Wright","Quincy Douby","Zydrunas Ilgauskas","Eddie House","Mike Bibby","Juwan Howard","Erick Dampier","Dexter Pittman","Jamaal Magloire","Terrel Harris","Ronny Turiaf","Greg Oden","Toney Douglas","Josh McRoberts","Danny Granger","Henry Walker","Tyler Johnson","Zoran Dragic","Gerald Green","Amar'e Stoudemire","Justise Winslow","Josh Richardson","Joe Johnson"],
      deep: ["Jorge Garbajosa|garbajosa"],
      hail: []
    }
  },
  {
    id: "tm-love", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Kevin Love (like LeBron James).",
    note: "Played on the same team in the same season (Timberwolves, Cavaliers, Heat, Jazz (2008-25)).",
    tiers: {
      chalk: ["LeBron James|lebron|king james","Kyrie Irving|kyrie","Jimmy Butler|jimmy buckets","Donovan Mitchell|spida"],
      bandwagon: ["Al Jefferson|big al","Ricky Rubio|rubio","Nikola Pekovic|pekovic","Kevin Martin","Tristan Thompson","J.R. Smith|jr smith","Bam Adebayo|bam","Tyler Herro|herro","Darius Garland|garland","Evan Mobley|mobley","Collin Sexton|sexton"],
      starter: ["Randy Foye","Mike Miller","Ryan Gomes","Corey Brewer","Jonny Flynn","Michael Beasley","Luke Ridnour","Anthony Randolph","Derrick Williams","J.J. Barea|barea","Andrei Kirilenko|ak47","Iman Shumpert","Timofey Mozgov","Anderson Varejao|varejao","Matthew Dellavedova|delly","Channing Frye","Richard Jefferson","Kyle Korver","Isaiah Thomas","Jae Crowder","Jarrett Allen","Cedi Osman","Larry Nance Jr.","Lauri Markkanen|markkanen","Kyle Lowry","Duncan Robinson","Caleb Martin","Haywood Highsmith"],
      film: ["Sebastian Telfair","Craig Smith","Rashad McCants","Rodney Carney","Mark Madsen","Kevin Ollie","Bobby Brown","Damien Wilkins","Wayne Ellington","Ryan Hollins","Oleksiy Pecherov","Sundiata Gaines","Darko Milicic","Lazar Hayward","Martell Webster","Anthony Tolliver","Wes Johnson","Brad Miller","Malcolm Lee","Greg Stiemsma","Alexey Shved","Chase Budinger","Dante Cunningham","Lou Amundson","Mickael Gelabale","Chris Johnson","Ronny Turiaf","Robbie Hummel","A.J. Price","Shabazz Muhammad","Gorgui Dieng","James Jones","Shawn Marion","Brendan Haywood","Joe Harris","Mo Williams","Sasha Kaun","Jordan McRae","Chris Andersen","Edy Tavares","Deron Williams","Jose Calderon","Dwyane Wade","Jeff Green","Rodney Hood","George Hill","Ante Zizic","Jordan Clarkson","Marquese Chriss","Brandon Knight","John Henson","Andre Drummond","Dante Exum","Kevin Porter Jr.","Isaac Okoro","Dean Wade","Lamar Stevens","Ed Davis","Rajon Rondo","Thomas Bryant","Nikola Jovic","Jaime Jaquez Jr.","Josh Richardson","Patty Mills","Delon Wright","Kel'el Ware","Pelle Larsson","Svi Mykhailiuk","Walker Kessler","Keyonte George"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-zion", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Zion Williamson (like Brandon Ingram).",
    note: "Played on the same team in the same season (Pelicans 2019-25).",
    tiers: {
      chalk: ["Brandon Ingram|ingram","CJ McCollum|mccollum","Jrue Holiday"],
      bandwagon: ["Jonas Valanciunas|valanciunas","Lonzo Ball|lonzo","Dejounte Murray","Herb Jones|herbert jones","Trey Murphy III|trey murphy","Josh Hart","JJ Redick|jj redick"],
      starter: ["Larry Nance Jr.","Jose Alvarado|grand theft alvarado","Naji Marshall","Steven Adams","Eric Bledsoe","Devonte' Graham|devonte graham","Nickeil Alexander-Walker|naw","Derrick Favors","Jaxson Hayes","Yves Missi","Kelly Olynyk","Kira Lewis Jr.","Dyson Daniels","Javonte Green"],
      film: ["Nicolo Melli","E'Twaun Moore","Frank Jackson","Kenrich Williams","Jahlil Okafor","Darius Miller","Sindarius Thornwell","Wenyen Gabriel","James Johnson","Willy Hernangomez","Didi Louzada","Tomas Satoransky","Garrett Temple","Daniel Theis","Dereon Seabron","E.J. Liddell","Jordan Hawkins","Karlo Matkovic","Antonio Reeves","Brandon Boston Jr.","Jamal Cain","Bruce Brown","Elfrid Payton","Keion Brooks Jr."],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-lamelo", cat: "connections", diff: "hard",
    prompt: "Name a teammate of LaMelo Ball (like Miles Bridges).",
    note: "Played on the same team in the same season (Hornets 2020-25).",
    tiers: {
      chalk: ["Miles Bridges","Gordon Hayward|hayward","Terry Rozier|scary terry"],
      bandwagon: ["Brandon Miller","P.J. Washington","Mark Williams","Kelly Oubre Jr.|kelly oubre","Devonte' Graham|devonte graham","Malik Monk|monk"],
      starter: ["Cody Zeller","Montrezl Harrell","Ish Smith","Grant Williams","Nick Richards","Josh Green","Seth Curry","Cody Martin","Jusuf Nurkic","Tre Mann","Dennis Smith Jr.","Caleb Martin","Bismack Biyombo"],
      film: ["Jalen McDaniels","Brad Wanamaker","Vernon Carey Jr.","James Bouknight","Kai Jones","JT Thor","Mason Plumlee","Theo Maledon","Bryce McGowens","Svi Mykhailiuk","Kobi Simmons","Nick Smith Jr.","Leaky Black","Aleksej Pokusevski","Vasilije Micic","Tidjane Salaun","Moussa Diabate","DaQuan Jeffries","Josh Okogie","Wendell Moore Jr.","Taj Gibson","Damion Baugh"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-paolo", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Paolo Banchero (like Franz Wagner).",
    note: "Played on the same team in the same season (Magic 2022-25).",
    tiers: {
      chalk: ["Franz Wagner","Jalen Suggs|suggs"],
      bandwagon: ["Wendell Carter Jr.","Markelle Fultz","Kentavious Caldwell-Pope|kcp","Cole Anthony","Jonathan Isaac"],
      starter: ["Moritz Wagner|moe wagner","Gary Harris","Goga Bitadze","Anthony Black","Jett Howard","Caleb Houstan","Bol Bol","Mo Bamba","Joe Ingles","Terrence Ross","Chuma Okeke","Tristan da Silva","Cory Joseph"],
      film: ["Admiral Schofield","Kevon Harris","Trevelin Queen","Jay Scrubb","Michael Carter-Williams","Mac McClung"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-cade", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Cade Cunningham (like Jalen Duren).",
    note: "Played on the same team in the same season (Pistons 2021-25).",
    tiers: {
      chalk: ["Jalen Duren","Jaden Ivey","Tobias Harris"],
      bandwagon: ["Ausar Thompson","Saddiq Bey","Jerami Grant","Bojan Bogdanovic|bogdanovic","Isaiah Stewart|stewart","Malik Beasley","Tim Hardaway Jr."],
      starter: ["Killian Hayes","Marvin Bagley III|marvin bagley","Alec Burks","Cory Joseph","Hamidou Diallo","Kelly Olynyk","Simone Fontecchio","Dennis Schroder","Ron Holland","Marcus Sasser","James Wiseman","Quentin Grimes","Monte Morris","Evan Fournier","Mike Muscala","Troy Brown Jr.","Paul Reed"],
      film: ["Frank Jackson","Trey Lyles","Josh Jackson","Rodney McGruder","Luka Garza","Saben Lee","Chris Smith","Jamorko Pickett","Braxton Key","Kevin Knox","Eugene Omoruyi","R.J. Hampton","Jared Rhoden","Buddy Boeheim","Shake Milton","Daniss Jenkins","Malachi Flynn","Stanley Umude","Danilo Gallinari","Tosan Evbuomwan","Bobi Klintman","Wendell Moore Jr."],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-hali", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Tyrese Haliburton (like Pascal Siakam).",
    note: "Played on the same team in the same season (Kings 2020-22, Pacers 2022-25).",
    tiers: {
      chalk: ["Pascal Siakam|siakam","De'Aaron Fox|fox","Myles Turner"],
      bandwagon: ["Buddy Hield|hield","Domantas Sabonis|sabonis","Bennedict Mathurin|mathurin","Andrew Nembhard","Aaron Nesmith","Harrison Barnes","Richaun Holmes"],
      starter: ["T.J. McConnell|tj mcconnell","Obi Toppin","Bruce Brown","Marvin Bagley III|marvin bagley","Davion Mitchell","Jalen Smith","Isaiah Jackson","Ben Sheppard","Jarace Walker","Thomas Bryant","Malcolm Brogdon","Chris Duarte"],
      film: ["Cory Joseph","Nemanja Bjelica","Glenn Robinson III","Hassan Whiteside","Kyle Guy","Moe Harkless","Terence Davis","Chimezie Metu","Tristan Thompson","Alex Len","Delon Wright","Damian Jones","Louis King","Justin James","Robert Woodard II","Mason Jones","Oshae Brissett","Goga Bitadze","Kendall Brown","Jordan Nwora","Daniel Theis","James Johnson","Johnny Furphy","Quenton Jackson","James Wiseman","Enrique Freeman","Tony Bradley"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-fox", cat: "connections", diff: "hard",
    prompt: "Name a teammate of De'Aaron Fox (like Domantas Sabonis).",
    note: "Played on the same team in the same season (Kings 2017-25, Spurs 2025).",
    tiers: {
      chalk: ["Domantas Sabonis|sabonis","Victor Wembanyama|wemby","DeMar DeRozan|derozan","Tyrese Haliburton|haliburton"],
      bandwagon: ["Buddy Hield|hield","Malik Monk|monk","Keegan Murray","Zach LaVine|lavine","Harrison Barnes","Kevin Huerter|huerter","Bogdan Bogdanovic|bogdanovic","Chris Paul|cp3"],
      starter: ["Marvin Bagley III|marvin bagley","Willie Cauley-Stein","Zach Randolph|z-bo|zbo","Vince Carter|vinsanity","George Hill","Iman Shumpert","Kosta Koufos","Nemanja Bjelica","Yogi Ferrell","Richaun Holmes","Cory Joseph","Davion Mitchell","Trey Lyles","Keon Ellis","Stephon Castle","Devin Vassell","Keldon Johnson","Jeremy Sochan"],
      film: ["Skal Labissiere","Justin Jackson","Frank Mason","Garrett Temple","JaKarr Sampson","Bruno Caboclo","Troy Williams","Ben McLemore","Wenyen Gabriel","Caleb Swanigan","Dewayne Dedmon","Jabari Parker","Alex Len","Kent Bazemore","Kyle Guy","Hassan Whiteside","Glenn Robinson III","Terence Davis","Chimezie Metu","Moe Harkless","Tristan Thompson","Donte DiVincenzo","Sasha Vezenkov","Chris Duarte","JaVale McGee","Jalen Slawson","Colby Jones","Jordan Ford","Mason Jones","Jake LaRavia","Doug McDermott","Orlando Robinson","Isaac Jones","Devin Carter","Julian Champagnie","Sandro Mamukelashvili","Bismack Biyombo","Jordan McLaughlin","Blake Wesley"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-siakam", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Pascal Siakam (like Kawhi Leonard).",
    note: "Played on the same team in the same season (Raptors 2016-24, Pacers 2024-25).",
    tiers: {
      chalk: ["Kawhi Leonard|kawhi","Kyle Lowry|lowry","Tyrese Haliburton|haliburton"],
      bandwagon: ["DeMar DeRozan|derozan","Fred VanVleet|fvv","OG Anunoby|anunoby","Scottie Barnes","Marc Gasol","Serge Ibaka|ibaka","Myles Turner","Danny Green"],
      starter: ["Jonas Valanciunas|valanciunas","Norman Powell","Gary Trent Jr.","Jakob Poeltl|poeltl","Precious Achiuwa","Chris Boucher","Delon Wright","C.J. Miles","Andrew Nembhard","Aaron Nesmith","Bennedict Mathurin|mathurin","T.J. McConnell|tj mcconnell","Obi Toppin","Ben Sheppard","Jarace Walker","Isaiah Jackson"],
      film: ["DeMarre Carroll","Patrick Patterson","Cory Joseph","Terrence Ross","Lucas Nogueira","Bruno Caboclo","P.J. Tucker","Jeremy Lin","Patrick McCaw","Malcolm Miller","Jordan Loyd","Rondae Hollis-Jefferson","Stanley Johnson","Matt Thomas","Terence Davis","Oshae Brissett","Paul Watson","Aron Baynes","DeAndre' Bembry","Alex Len","Yuta Watanabe","Khem Birch","Thaddeus Young","Dalano Banton","Svi Mykhailiuk","Christian Koloko","Juancho Hernangomez","Otto Porter Jr.","Jalen McDaniels","Will Barton","Gradey Dick","Immanuel Quickley","RJ Barrett","Doug McDermott","Kendall Brown","James Johnson","Jalen Smith","Johnny Furphy","Quenton Jackson","James Wiseman","Thomas Bryant"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-lowry", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Kyle Lowry (like Kawhi Leonard).",
    note: "Played on the same team in the same season (Grizzlies, Rockets, Raptors, Heat, 76ers (2006-25)).",
    tiers: {
      chalk: ["Kawhi Leonard|kawhi","DeMar DeRozan|derozan","Jimmy Butler|jimmy buckets","Joel Embiid|embiid","James Harden|harden"],
      bandwagon: ["Pascal Siakam|siakam","Fred VanVleet|fvv","Bam Adebayo|bam","Tyler Herro|herro","Tyrese Maxey|maxey","Paul George|pg13","Pau Gasol|pau","Rudy Gay","Yao Ming|yao","Tracy McGrady|t-mac"],
      starter: ["Jonas Valanciunas|valanciunas","Serge Ibaka|ibaka","Marc Gasol","Danny Green","OG Anunoby|anunoby","Norman Powell","Terrence Ross","DeMarre Carroll","Amir Johnson","Patrick Patterson","Cory Joseph","Luis Scola","Lou Williams|sweet lou","Mike Conley","Shane Battier","Kevin Martin","Aaron Brooks","Chuck Hayes","Trevor Ariza","Duncan Robinson","Max Strus","Gabe Vincent","Caleb Martin","Kevin Love","Tobias Harris","Kelly Oubre Jr."],
      film: ["Hakim Warrick","Mike Miller","Stromile Swift","Juan Carlos Navarro","Tarence Kinsey","Darko Milicic","Javaris Crittenton","Kwame Brown","Carl Landry","Brian Cook","Von Wafer","Jordan Hill","Jared Jeffries","Courtney Lee","Goran Dragic","Chase Budinger","Hasheem Thabeet","Marcus Morris","Jonny Flynn","Jose Calderon","Andrea Bargnani","Linas Kleiza","Ed Davis","James Johnson","Alan Anderson","Landry Fields","John Lucas III","Greivis Vasquez","Tyler Hansbrough","Bismack Biyombo","Lucas Nogueira","Delon Wright","Jakob Poeltl","P.J. Tucker","C.J. Miles","Jeremy Lin","Chris Boucher","Patrick McCaw","Rondae Hollis-Jefferson","Stanley Johnson","Matt Thomas","Aron Baynes","Victor Oladipo","Dewayne Dedmon","Markieff Morris","Cody Zeller","Haywood Highsmith","Nikola Jovic","Jaime Jaquez Jr.","Paul Reed","Nicolas Batum","Buddy Hield","Cameron Payne","Mo Bamba","Kenyon Martin Jr.","Eric Gordon","Andre Drummond","Guerschon Yabusele","Jared McCain","Quentin Grimes"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-derozan", cat: "connections", diff: "hard",
    prompt: "Name a teammate of DeMar DeRozan (like Kyle Lowry).",
    note: "Played on the same team in the same season (Raptors, Spurs, Bulls, Kings (2009-25)).",
    tiers: {
      chalk: ["Kyle Lowry|lowry","Zach LaVine|lavine","Domantas Sabonis|sabonis","De'Aaron Fox|fox","Chris Bosh|bosh"],
      bandwagon: ["LaMarcus Aldridge|aldridge","Nikola Vucevic|vucevic","Pau Gasol|pau","Jonas Valanciunas|valanciunas","Lonzo Ball|lonzo","Patty Mills","Dejounte Murray","Derrick White","Rudy Gay","Malik Monk|monk","Keegan Murray","Kevin Huerter|huerter"],
      starter: ["Andrea Bargnani|bargnani","Jose Calderon","Amir Johnson","Terrence Ross","Serge Ibaka|ibaka","Norman Powell","Patrick Patterson","Cory Joseph","DeMarre Carroll","Bismack Biyombo","Fred VanVleet|fvv","Pascal Siakam|siakam","Jakob Poeltl|poeltl","Bryn Forbes","Davis Bertans","Marco Belinelli","Lonnie Walker IV","Alex Caruso|caruso","Coby White","Ayo Dosunmu","Patrick Williams","Andre Drummond","Javonte Green","Keon Ellis"],
      film: ["Hedo Turkoglu","Jarrett Jack","Sonny Weems","Reggie Evans","Leandro Barbosa","Linas Kleiza","Jerryd Bayless","Ed Davis","James Johnson","Gary Forbes","Aaron Gray","Landry Fields","John Lucas III","Alan Anderson","Greivis Vasquez","Tyler Hansbrough","Chuck Hayes","Lou Williams","Lucas Nogueira","Luis Scola","Jared Sullinger","P.J. Tucker","Delon Wright","C.J. Miles","Dante Cunningham","Quincy Pondexter","Chimezie Metu","Trey Lyles","Drew Eubanks","Keldon Johnson","Tre Jones","Devin Vassell","Tony Bradley","Troy Brown Jr.","Matt Thomas","Derrick Jones Jr.","Goran Dragic","Tristan Thompson","Patrick Beverley","Carlik Jones","Dalen Terry","Torrey Craig","Jevon Carter","Julian Phillips","Onuralp Bitim","Adama Sanogo","Jake LaRavia","Isaac Jones","Devin Carter","Doug McDermott","Jordan McLaughlin","Mason Jones","Jordan Ford","Markelle Fultz"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-kat", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Karl-Anthony Towns (like Anthony Edwards).",
    note: "Played on the same team in the same season (Timberwolves 2015-24, Knicks 2024-25).",
    tiers: {
      chalk: ["Anthony Edwards|ant|ant-man","Jalen Brunson|brunson","Jimmy Butler|jimmy buckets"],
      bandwagon: ["Andrew Wiggins|wiggins","Rudy Gobert|gobert","D'Angelo Russell|dangelo russell","Zach LaVine|lavine","Kevin Garnett|kg","Mikal Bridges|bridges","OG Anunoby|anunoby","Josh Hart"],
      starter: ["Ricky Rubio|rubio","Jeff Teague","Derrick Rose|d rose","Taj Gibson","Gorgui Dieng","Mike Conley","Jaden McDaniels","Naz Reid","Kyle Anderson","Malik Beasley","Patrick Beverley|pat bev","Jarred Vanderbilt","Tyus Jones","Robert Covington","Andre Miller","Tayshaun Prince","Kevin Martin","Shabazz Muhammad","Nemanja Bjelica","Mitchell Robinson","Miles McBride","Cameron Payne","Precious Achiuwa","Landry Shamet"],
      film: ["Kris Dunn","Brandon Rush","Cole Aldrich","Jordan Hill","Lance Stephenson","Damjan Rudez","Adreian Payne","Marcus Georges-Hunt","Aaron Brooks","Jamal Crawford","Anthony Brown","Josh Okogie","Dario Saric","Luol Deng","Jerryd Bayless","Anthony Tolliver","Keita Bates-Diop","Jake Layman","Jordan McLaughlin","Juancho Hernangomez","Jaylen Nowell","James Johnson","Ed Davis","Leandro Bolmaro","Jarrett Culver","Austin Rivers","Greg Monroe","Nathan Knight","Luka Garza","Wendell Moore Jr.","Josh Minott","Bryn Forbes","Matt Ryan","Troy Brown Jr.","Leonard Miller","Jaylen Clark","Monte Morris","T.J. Warren","P.J. Tucker","Ariel Hukporti","Tyler Kolek","Pacome Dadiet","Jericho Sims","Delon Wright"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-bam", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Bam Adebayo (like Jimmy Butler).",
    note: "Played on the same team in the same season (Heat 2017-25).",
    tiers: {
      chalk: ["Jimmy Butler|jimmy buckets","Dwyane Wade|d-wade|dwade","Tyler Herro|herro"],
      bandwagon: ["Kyle Lowry|lowry","Goran Dragic|dragic","Duncan Robinson","Hassan Whiteside|whiteside","Andre Iguodala|iggy","Jae Crowder","Terry Rozier|scary terry","Kevin Love"],
      starter: ["Josh Richardson","Justise Winslow","Kelly Olynyk","James Johnson","Dion Waiters","Wayne Ellington","Rodney McGruder","Derrick Jones Jr.","Kendrick Nunn","Victor Oladipo","P.J. Tucker","Max Strus","Gabe Vincent","Caleb Martin","Markieff Morris","Dewayne Dedmon","Cody Zeller","Haywood Highsmith","Nikola Jovic","Jaime Jaquez Jr.|jaime jaquez|jaquez","Thomas Bryant","Delon Wright","Patty Mills","Kel'el Ware","Alec Burks","Andrew Wiggins|wiggins","Davion Mitchell","Pelle Larsson"],
      film: ["Tyler Johnson","Udonis Haslem|haslem","Jordan Mickey","Okaro White","Yante Maten","Ryan Anderson","Chris Silva","KZ Okpala","Daryl Macon","Kyle Alexander","Precious Achiuwa","Avery Bradley","Trevor Ariza","Omer Yurtseven","Dru Smith","Orlando Robinson","Jamal Cain","Alondes Williams","Cole Swider","Josh Christopher","Isaiah Stevens","Keshad Johnson","Kyle Anderson"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-jrue", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Jrue Holiday (like Giannis).",
    note: "Played on the same team in the same season (76ers, Pelicans, Bucks, Celtics (2009-25)).",
    tiers: {
      chalk: ["Giannis Antetokounmpo|giannis|greek freak","Jayson Tatum|tatum","Anthony Davis|ad|the brow","Zion Williamson|zion"],
      bandwagon: ["Jaylen Brown","Khris Middleton|middleton","DeMarcus Cousins|boogie","Brandon Ingram|ingram","Andre Iguodala|iggy","Elton Brand","Kristaps Porzingis|porzingis","Derrick White","Al Horford|horford"],
      starter: ["Thaddeus Young","Lou Williams|sweet lou","Evan Turner","Spencer Hawes","Ryan Anderson","Eric Gordon","Tyreke Evans","Rajon Rondo|rondo","Nikola Mirotic|mirotic","E'Twaun Moore","Lonzo Ball|lonzo","Josh Hart","Brook Lopez","Bobby Portis|portis","P.J. Tucker","Pat Connaughton","Donte DiVincenzo","Bryn Forbes","Grayson Allen","Payton Pritchard|pritchard","Sam Hauser","Robert Williams|time lord"],
      film: ["Samuel Dalembert","Willie Green","Jason Kapono","Royal Ivey","Rodney Carney","Marreese Speights","Allen Iverson","Andres Nocioni","Jodie Meeks","Nikola Vucevic","Lavoy Allen","Dorell Wright","Nick Young","Kwame Brown","Damien Wilkins","Austin Rivers","Greivis Vasquez","Al-Farouq Aminu","Robin Lopez","Brian Roberts","Anthony Morrow","Omer Asik","Quincy Pondexter","Norris Cole","Dante Cunningham","Alexis Ajinca","Toney Douglas","Ish Smith","Luke Babbitt","Solomon Hill","Darius Miller","Cheick Diallo","Ian Clark","Jahlil Okafor","Kenrich Williams","Frank Jackson","Derrick Favors","Jaxson Hayes","Nicolo Melli","Jeff Teague","Thanasis Antetokounmpo","Jordan Nwora","Jevon Carter","Joe Ingles","Jae Crowder","Wesley Matthews","Luke Kornet","Oshae Brissett","Neemias Queta","Xavier Tillman","Svi Mykhailiuk","Jaden Springer","Jordan Walsh","Dalano Banton"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-gobert", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Rudy Gobert (like Donovan Mitchell).",
    note: "Played on the same team in the same season (Jazz 2013-22, Timberwolves 2022-25).",
    tiers: {
      chalk: ["Donovan Mitchell|spida","Anthony Edwards|ant|ant-man","Karl-Anthony Towns|kat|towns","Gordon Hayward|hayward"],
      bandwagon: ["Mike Conley","Joe Ingles|jingles","Derrick Favors","George Hill","Ricky Rubio|rubio","Bojan Bogdanovic|bogdanovic","Jordan Clarkson|clarkson","Julius Randle|randle","Donte DiVincenzo"],
      starter: ["Rodney Hood","Trey Burke","Alec Burks","Dante Exum","Raul Neto","Royce O'Neale","Jae Crowder","Kyle Korver","Rudy Gay","Hassan Whiteside","Joe Johnson","Boris Diaw","Shelvin Mack","Jaden McDaniels","Naz Reid","D'Angelo Russell|dangelo russell","Kyle Anderson","Nickeil Alexander-Walker|naw","Taurean Prince","Jaylen Nowell"],
      film: ["Marvin Williams","Richard Jefferson","John Lucas III","Enes Kanter","Jeremy Evans","Ian Clark","Brandon Rush","Diante Garrett","Andris Biedrins","Trevor Booker","Steve Novak","Elijah Millsap","Chris Johnson","Jeff Withey","Bryce Cotton","Trey Lyles","Tibor Pleiss","Jonas Jerebko","Thabo Sefolosha","Ekpe Udoh","Georges Niang","Grayson Allen","Emmanuel Mudiay","Ed Davis","Jeff Green","Miye Oni","Juwan Morgan","Rayjon Tucker","Matt Thomas","Jarrell Brantley","Trent Forrest","Elijah Hughes","Udoka Azubuike","Jared Butler","Danuel House","Eric Paschall","Juancho Hernangomez","Austin Rivers","Bryn Forbes","Josh Minott","Luka Garza","Wendell Moore Jr.","Leonard Miller","Monte Morris","Rob Dillingham","Terrence Shannon Jr.","Jaylen Clark","Jesse Edwards"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ch-twin-towers", cat: "rosters", diff: "hard",
    prompt: "Name a player on the championship-winning Spurs (Tim Duncan's team).",
    note: "Anyone who played for them during the 1998-99 or 2002-03 seasons.",
    tiers: {
      chalk: ["Tim Duncan","David Robinson|the admiral"],
      bandwagon: ["Tony Parker|tp","Manu Ginobili|manu","Sean Elliott","Avery Johnson|the little general"],
      starter: ["Stephen Jackson","Malik Rose","Bruce Bowen|bowen","Steve Kerr|kerr","Mario Elie","Jaren Jackson","Speedy Claxton","Kevin Willis","Steve Smith"],
      film: ["Antonio Daniels","Will Perdue","Jerome Kersey","Danny Ferry","Gerard King","Andrew Gaze","Brandon Williams","Mengke Bateer|bateer"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ch-83-sixers", cat: "rosters", diff: "hard",
    prompt: "Name a player on the championship-winning 76ers (Dr. J's team).",
    note: "Anyone who played for them during the 1982-83 season.",
    tiers: {
      chalk: ["Julius Erving|dr j","Moses Malone"],
      bandwagon: ["Maurice Cheeks|mo cheeks","Andrew Toney|the boston strangler","Bobby Jones"],
      starter: ["Clint Richardson","Marc Iavaroni","Clemon Johnson","Earl Cureton"],
      film: ["Franklin Edwards","Reggie Johnson","Mark McNamara","Russ Schoene"],
      deep: [],
      hail: []
    }
  },
  {
    id: "fmvp-80s90s", cat: "finals", diff: "easy",
    prompt: "Name a Finals MVP from the 1980s or 1990s.",
    note: "The 1980 through 1999 Finals MVPs.",
    tiers: {
      chalk: ["Michael Jordan|mj","Magic Johnson","Larry Bird"],
      bandwagon: ["Hakeem Olajuwon|hakeem|the dream","Kareem Abdul-Jabbar|kareem","Tim Duncan","Isiah Thomas"],
      starter: ["James Worthy","Moses Malone","Joe Dumars|dumars"],
      film: ["Cedric Maxwell|cornbread"],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-brown", cat: "names", diff: "easy",
    prompt: "Name an NBA player with the last name Brown.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Jaylen Brown"],
      bandwagon: ["Bruce Brown","Kobe Brown","Troy Brown Jr.","Shannon Brown","Dee Brown","Moses Brown"],
      starter: ["Sterling Brown","Kwame Brown","Mike Brown","P.J. Brown","Devin Brown","Chucky Brown","Marcus Brown","Charlie Brown Jr.","Lorenzo Brown","Markel Brown","Jabari Brown","Anthony Brown","Randy Brown","Tony Brown","Fred Brown|downtown freddie brown","Kedrick Brown","Damone Brown","Rickey Brown","Kendall Brown","Greg Brown III"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-davis", cat: "names", diff: "easy",
    prompt: "Name an NBA player with the last name Davis.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Anthony Davis|ad|the brow","Baron Davis|boom dizzle"],
      bandwagon: ["Glen Davis|big baby","Antonio Davis","Dale Davis","Ed Davis","Terence Davis","Johnny Davis"],
      starter: ["Hubert Davis","Ricky Davis","Brad Davis","Walter Davis","Mark Davis","Emanual Davis","Terry Davis","Deyonta Davis","Josh Davis","Charles Davis","Paul Davis","Ben Davis","Mike Davis","Dwight Davis"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-thompson", cat: "names", diff: "easy",
    prompt: "Name an NBA player with the last name Thompson.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Klay Thompson|klay"],
      bandwagon: ["Tristan Thompson","Amen Thompson","Ausar Thompson","Mychal Thompson","David Thompson|skywalker"],
      starter: ["Jason Thompson","Hollis Thompson","John Thompson","LaSalle Thompson","Billy Thompson","Brooks Thompson","Mychel Thompson","Kevin Thompson","Ethan Thompson","Bernard Thompson","George Thompson"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-green", cat: "names", diff: "easy",
    prompt: "Name an NBA player with the last name Green.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Draymond Green|draymond"],
      bandwagon: ["Danny Green","Jalen Green","Jeff Green","JaMychal Green","A.C. Green","Gerald Green","Josh Green"],
      starter: ["Javonte Green","Willie Green","Rickey Green","Sidney Green","Kenny Green","Litterial Green","Erick Green","Devin Green","Johnny Green","Lamar Green","A.J. Green|aj green","Mike Green"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-robinson", cat: "names", diff: "easy",
    prompt: "Name an NBA player with the last name Robinson.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["David Robinson|the admiral","Nate Robinson"],
      bandwagon: ["Glenn Robinson|big dog","Duncan Robinson","Mitchell Robinson","Cliff Robinson|clifford robinson"],
      starter: ["Thomas Robinson","Glenn Robinson III","Orlando Robinson","Jerome Robinson","Rumeal Robinson","Larry Robinson","James Robinson","Truck Robinson","Flynn Robinson","Chris Robinson","Bernard Robinson","Jackie Robinson","Wayne Robinson","Justin Robinson","Devin Robinson"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-allen", cat: "names", diff: "easy",
    prompt: "Name an NBA player with the last name Allen.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Ray Allen","Grayson Allen"],
      bandwagon: ["Jarrett Allen","Tony Allen|grindfather"],
      starter: ["Lavoy Allen","Kadeem Allen","Malik Allen","Lucius Allen","Jerome Allen","Randy Allen"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-walker", cat: "names", diff: "easy",
    prompt: "Name an NBA player with the last name Walker.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Kemba Walker|kemba","Antoine Walker"],
      bandwagon: ["Lonnie Walker IV|lonnie walker","Jarace Walker","Samaki Walker","Jabari Walker"],
      starter: ["Bill Walker","Henry Walker","Darrell Walker","Kenny Walker","Chet Walker","Wally Walker","Jimmy Walker","Foots Walker","M.J. Walker"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-miller", cat: "names", diff: "easy",
    prompt: "Name an NBA player with the last name Miller.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Reggie Miller","Brandon Miller"],
      bandwagon: ["Andre Miller","Mike Miller","Brad Miller","Darius Miller","Malcolm Miller"],
      starter: ["Oliver Miller|big o","Leonard Miller","Jordan Miller","Quincy Miller","Anthony Miller"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-anderson", cat: "names", diff: "easy",
    prompt: "Name an NBA player with the last name Anderson.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Kyle Anderson|slo mo","Ryan Anderson","Nick Anderson"],
      bandwagon: ["Kenny Anderson","Derek Anderson","Shandon Anderson","Justin Anderson","Alan Anderson","James Anderson"],
      starter: ["Willie Anderson","Greg Anderson","Ron Anderson","Chris Andersen|birdman","David Andersen","Mitchell Anderson","Michael Anderson","J.J. Anderson","Richard Anderson","Antonio Anderson"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-jackson", cat: "names", diff: "easy",
    prompt: "Name an NBA player with the last name Jackson.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Jaren Jackson Jr.|jaren jackson|jjj","Phil Jackson","Mark Jackson"],
      bandwagon: ["Reggie Jackson","Stephen Jackson|captain jack","Josh Jackson","Jim Jackson|jimmy jackson","Luke Jackson","Isaiah Jackson","GG Jackson","Andre Jackson Jr."],
      starter: ["Bobby Jackson","Frank Jackson","Justin Jackson","Demetrius Jackson","Marc Jackson","Pierre Jackson","Tony Jackson","Chris Jackson|mahmoud abdul-rauf","Quenton Jackson","Cedric Jackson","Darnell Jackson","Lucious Jackson","Jermaine Jackson","Trayce Jackson-Davis|tjd"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-harris", cat: "names", diff: "easy",
    prompt: "Name an NBA player with the last name Harris.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Tobias Harris","Joe Harris","Gary Harris"],
      bandwagon: ["Devin Harris","Lucious Harris","Terrel Harris","Manny Harris","Elias Harris"],
      starter: ["Mike Harris","Steve Harris","Tony Harris","Kevon Harris","Jalen Harris"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-thomas", cat: "names", diff: "easy",
    prompt: "Name an NBA player with the last name Thomas.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Isiah Thomas","Isaiah Thomas"],
      bandwagon: ["Cam Thomas","Kurt Thomas","Tim Thomas","Etan Thomas","Lance Thomas","Tyrus Thomas"],
      starter: ["Kenny Thomas","Matt Thomas","Billy Thomas","Irving Thomas","Jim Thomas","Charles Thomas","John Thomas","Brodric Thomas","Khyri Thomas","Malcolm Thomas","Adonis Thomas","Carl Thomas"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-wallace", cat: "names", diff: "easy",
    prompt: "Name an NBA player with the last name Wallace.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Ben Wallace|big ben","Rasheed Wallace|sheed"],
      bandwagon: ["Gerald Wallace|crash","John Wallace","Cason Wallace"],
      starter: ["Tyrone Wallace","Keaton Wallace"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-gordon", cat: "names", diff: "easy",
    prompt: "Name an NBA player with the last name Gordon.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Aaron Gordon|ag","Eric Gordon"],
      bandwagon: ["Ben Gordon","Drew Gordon"],
      starter: ["Lancaster Gordon"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-young", cat: "names", diff: "easy",
    prompt: "Name an NBA player with the last name Young.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Trae Young|trae","Nick Young|swaggy p"],
      bandwagon: ["Thaddeus Young","Joe Young","Sam Young","Michael Young"],
      starter: ["Danny Young","Korleone Young","James Young","Tim Young"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-michael", cat: "names", diff: "easy",
    prompt: "Name an NBA player whose first name is Michael.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Michael Jordan|mj"],
      bandwagon: ["Michael Porter Jr.|mpj","Michael Redd","Michael Finley","Michael Cooper","Michael Beasley|beasley","Michael Carter-Williams|mcw"],
      starter: ["Michael Kidd-Gilchrist|mkg","Michael Olowokandi|kandi man","Michael Cage","Michael Adams","Michael Dickerson","Michael Doleac","Michael Curry","Michael Ray Richardson","Michael Smith","Michael Stewart","Micheal Williams","Michael Young","Michael Ruffin","Michael Bradley","Michael Wright","Michael Gbinije"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-anthony", cat: "names", diff: "easy",
    prompt: "Name an NBA player whose first name is Anthony.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Anthony Davis|ad|the brow","Anthony Edwards|ant|ant-man"],
      bandwagon: ["Anthony Mason","Anthony Black","Anthony Bennett","Anthony Morrow","Anthony Randolph","Anthony Parker","Anthony Peeler"],
      starter: ["Anthony Tolliver","Anthony Johnson","Anthony Carter","Anthony Avent","Anthony Bowie","Anthony Goldwire","Anthony Gill","Anthony Lamb","Anthony Bonner","Anthony Brown","Anthony Roberson"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-james", cat: "names", diff: "easy",
    prompt: "Name an NBA player whose first name is James.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["James Harden|harden","James Worthy"],
      bandwagon: ["James Wiseman|wiseman","James Johnson","James Posey","James Jones","James Edwards|buddha"],
      starter: ["James Ennis","James Anderson","James Augustine","James Bouknight","James Donaldson","James Robinson","James Singleton","James White","James Young","James Nunnally","James Michael McAdoo","James Silas"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-kyle", cat: "names", diff: "easy",
    prompt: "Name an NBA player whose first name is Kyle.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Kyle Lowry|lowry","Kyle Kuzma|kuzma"],
      bandwagon: ["Kyle Korver|korver","Kyle Anderson|slo mo","Kyle Filipowski"],
      starter: ["Kyle O'Quinn","Kyle Singler","Kyle Guy","Kyle Weaver","Kyle Macy","Kyle Alexander","Kyle Wiltjer"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-jalen", cat: "names", diff: "easy",
    prompt: "Name an NBA player whose first name is Jalen.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Jalen Brunson|brunson","Jalen Williams|j dub|jdub","Jalen Green"],
      bandwagon: ["Jalen Rose","Jalen Duren","Jalen Johnson","Jalen Suggs|suggs","Jalen Smith"],
      starter: ["Jalen Hood-Schifino","Jalen McDaniels","Jalen Wilson","Jalen Pickett","Jalen Jones","Jalen Lecque","Jalen Harris","Jalen Slawson"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-tyler", cat: "names", diff: "easy",
    prompt: "Name an NBA player whose first name is Tyler.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Tyler Herro|herro"],
      bandwagon: ["Tyler Hansbrough|psycho t","Tyler Johnson","Tyler Zeller"],
      starter: ["Tyler Ennis","Tyler Ulis","Tyler Kolek","Tyler Dorsey","Tyler Cook","Tyler Smith","Tyler Bey","Tyler Honeycutt","Tyler Lydon"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-marcus", cat: "names", diff: "easy",
    prompt: "Name an NBA player whose first name is Marcus.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Marcus Smart|smart"],
      bandwagon: ["Marcus Morris","Marcus Camby|camby","Marcus Sasser"],
      starter: ["Marcus Thornton","Marcus Banks","Marcus Williams","Marcus Fizer","Marcus Haislip","Marcus Georges-Hunt","Marcus Liberty","Marcus Webb","Marcus Landry"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-derrick", cat: "names", diff: "easy",
    prompt: "Name an NBA player whose first name is Derrick.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Derrick Rose|d rose"],
      bandwagon: ["Derrick White","Derrick Favors","Derrick Jones Jr.","Derrick Coleman|dc"],
      starter: ["Derrick Williams","Derrick McKey","Derrick Walton","Derrick Caracter","Derrick Byars","Derrick Chievous"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "name-jason", cat: "names", diff: "easy",
    prompt: "Name an NBA player whose first name is Jason.",
    note: "Any NBA player, any era.",
    tiers: {
      chalk: ["Jason Kidd|kidd","Jason Terry|jet"],
      bandwagon: ["Jason Williams|white chocolate","Jason Richardson|j rich","Jason Collins","Jason Kapono"],
      starter: ["Jason Smith","Jason Caffey","Jason Hart","Jason Thompson","Jason Preston","Jason Collier","Jason Maxiell"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "teams-of-kd", cat: "journeys", diff: "easy",
    prompt: "Name a team Kevin Durant has played for.",
    note: "Any NBA team he played at least one game for, through 2025-26.",
    tiers: {
      chalk: ["Golden State Warriors|warriors|golden state","Oklahoma City Thunder|thunder|okc"],
      bandwagon: ["Brooklyn Nets|nets|brooklyn","Phoenix Suns|suns|phoenix"],
      starter: ["Seattle SuperSonics|supersonics|sonics|seattle","Houston Rockets|rockets|houston"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "teams-of-cp3", cat: "journeys", diff: "easy",
    prompt: "Name a team Chris Paul has played for.",
    note: "Any NBA team he played at least one game for, through 2025-26.",
    tiers: {
      chalk: ["Los Angeles Clippers|clippers|la clippers","Phoenix Suns|suns|phoenix"],
      bandwagon: ["Houston Rockets|rockets|houston","New Orleans Hornets|hornets|new orleans|pelicans","Golden State Warriors|warriors|golden state"],
      starter: ["Oklahoma City Thunder|thunder|okc","San Antonio Spurs|spurs|san antonio"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "teams-of-melo", cat: "journeys", diff: "easy",
    prompt: "Name a team Carmelo Anthony has played for.",
    note: "Any NBA team he played at least one game for, through 2025-26.",
    tiers: {
      chalk: ["Denver Nuggets|nuggets|denver","New York Knicks|knicks|new york"],
      bandwagon: ["Los Angeles Lakers|lakers|la lakers","Oklahoma City Thunder|thunder|okc"],
      starter: ["Portland Trail Blazers|trail blazers|blazers|portland","Houston Rockets|rockets|houston"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "teams-of-russ", cat: "journeys", diff: "easy",
    prompt: "Name a team Russell Westbrook has played for.",
    note: "Any NBA team he played at least one game for, through 2025-26.",
    tiers: {
      chalk: ["Oklahoma City Thunder|thunder|okc","Los Angeles Lakers|lakers|la lakers"],
      bandwagon: ["Houston Rockets|rockets|houston","Washington Wizards|wizards|washington","Los Angeles Clippers|clippers|la clippers"],
      starter: ["Denver Nuggets|nuggets|denver","Sacramento Kings|kings|sacramento"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "teams-of-harden", cat: "journeys", diff: "easy",
    prompt: "Name a team James Harden has played for.",
    note: "Any NBA team he played at least one game for, through 2025-26.",
    tiers: {
      chalk: ["Houston Rockets|rockets|houston","Oklahoma City Thunder|thunder|okc"],
      bandwagon: ["Brooklyn Nets|nets|brooklyn","Philadelphia 76ers|76ers|sixers|philadelphia|philly"],
      starter: ["Los Angeles Clippers|clippers|la clippers"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "teams-of-shaq", cat: "journeys", diff: "easy",
    prompt: "Name a team Shaquille O'Neal has played for.",
    note: "Any NBA team he played at least one game for, through 2025-26.",
    tiers: {
      chalk: ["Los Angeles Lakers|lakers|la lakers","Orlando Magic|magic|orlando"],
      bandwagon: ["Miami Heat|heat|miami"],
      starter: ["Phoenix Suns|suns|phoenix","Cleveland Cavaliers|cavaliers|cavs|cleveland"],
      film: ["Boston Celtics|celtics|boston"],
      deep: [],
      hail: []
    }
  },
  {
    id: "teams-of-dwight", cat: "journeys", diff: "easy",
    prompt: "Name a team Dwight Howard has played for.",
    note: "Any NBA team he played at least one game for, through 2025-26.",
    tiers: {
      chalk: ["Orlando Magic|magic|orlando","Los Angeles Lakers|lakers|la lakers"],
      bandwagon: ["Houston Rockets|rockets|houston"],
      starter: ["Atlanta Hawks|hawks|atlanta","Philadelphia 76ers|76ers|sixers|philadelphia|philly"],
      film: ["Charlotte Hornets|hornets|charlotte","Washington Wizards|wizards|washington"],
      deep: [],
      hail: []
    }
  },
  {
    id: "teams-of-kyrie", cat: "journeys", diff: "easy",
    prompt: "Name a team Kyrie Irving has played for.",
    note: "Any NBA team he played at least one game for, through 2025-26.",
    tiers: {
      chalk: ["Cleveland Cavaliers|cavaliers|cavs|cleveland","Boston Celtics|celtics|boston"],
      bandwagon: ["Brooklyn Nets|nets|brooklyn","Dallas Mavericks|mavericks|mavs|dallas"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "teams-of-butler", cat: "journeys", diff: "easy",
    prompt: "Name a team Jimmy Butler has played for.",
    note: "Any NBA team he played at least one game for, through 2025-26.",
    tiers: {
      chalk: ["Miami Heat|heat|miami","Chicago Bulls|bulls|chicago"],
      bandwagon: ["Golden State Warriors|warriors|golden state","Philadelphia 76ers|76ers|sixers|philadelphia|philly"],
      starter: ["Minnesota Timberwolves|timberwolves|wolves|minnesota"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "teams-of-vince", cat: "journeys", diff: "easy",
    prompt: "Name a team Vince Carter has played for.",
    note: "Any NBA team he played at least one game for, through 2025-26.",
    tiers: {
      chalk: ["Toronto Raptors|raptors|toronto"],
      bandwagon: ["New Jersey Nets|nets|new jersey|brooklyn","Dallas Mavericks|mavericks|mavs|dallas","Orlando Magic|magic|orlando"],
      starter: ["Memphis Grizzlies|grizzlies|memphis","Atlanta Hawks|hawks|atlanta"],
      film: ["Phoenix Suns|suns|phoenix","Sacramento Kings|kings|sacramento"],
      deep: [],
      hail: []
    }
  },
  {
    id: "teams-of-ad", cat: "journeys", diff: "easy",
    prompt: "Name a team Anthony Davis has played for.",
    note: "Any NBA team he played at least one game for, through 2025-26.",
    tiers: {
      chalk: ["Los Angeles Lakers|lakers|la lakers"],
      bandwagon: ["New Orleans Pelicans|pelicans|new orleans"],
      starter: ["Dallas Mavericks|mavericks|mavs|dallas"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "teams-of-lebron", cat: "journeys", diff: "easy",
    prompt: "Name a team LeBron James has played for.",
    note: "Any NBA team he played at least one game for, through 2025-26.",
    tiers: {
      chalk: ["Los Angeles Lakers|lakers|la lakers","Cleveland Cavaliers|cavaliers|cavs|cleveland"],
      bandwagon: ["Miami Heat|heat|miami"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "top5-since-2015", cat: "draft", diff: "easy",
    prompt: "Name a top-5 pick in the NBA Draft since 2015 (like Jayson Tatum).",
    note: "Any of the first five picks from 2015 to 2025.",
    tiers: {
      chalk: ["Jayson Tatum|tatum","Luka Doncic|luka|doncic","Anthony Edwards|ant|ant-man","Victor Wembanyama|wemby|wembanyama","Ja Morant|ja","Zion Williamson|zion","Trae Young|trae","Ben Simmons","Karl-Anthony Towns|kat","Jaylen Brown","LaMelo Ball|melo","Cooper Flagg|flagg","Paolo Banchero|paolo"],
      bandwagon: ["De'Aaron Fox|fox","Cade Cunningham|cade","Evan Mobley|mobley","Chet Holmgren|chet","Scottie Barnes","Lonzo Ball|lonzo","Brandon Ingram|ingram","Kristaps Porzingis|porzingis|kp","D'Angelo Russell|dlo","Darius Garland|garland","Jaren Jackson Jr.|jaren jackson|jjj","Deandre Ayton|ayton","Markelle Fultz|fultz","Jalen Green","Amen Thompson|amen","Brandon Miller"],
      starter: ["RJ Barrett|r.j. barrett|barrett","Jabari Smith Jr.|jabari smith|jabari","Jalen Suggs|suggs","Scoot Henderson|scoot","Ausar Thompson|ausar","Keegan Murray","Jaden Ivey|ivey","Stephon Castle|castle","Dylan Harper","Marvin Bagley III|marvin bagley|bagley","De'Andre Hunter|deandre hunter","Josh Jackson","Patrick Williams","James Wiseman|wiseman","Jahlil Okafor|okafor","Alex Sarr|sarr","Zaccharie Risacher|risacher"],
      film: ["Reed Sheppard|sheppard","Ace Bailey","VJ Edgecombe|edgecombe","Kon Knueppel|knueppel","Ron Holland","Isaac Okoro|okoro","Kris Dunn"],
      deep: ["Dragan Bender|bender","Mario Hezonja|hezonja"],
      hail: []
    }
  }
];

/* The daily rotation: day N deals entries 7N..7N+6. A prompt returns only once the
   whole list is spent. Keep the length a multiple of 7 or the tail is never dealt. */
const PROMPT_ORDER = [
  "tm-luka",
  "ch-22-warriors",
  "jersey-13",
  "big-mvp",
  "jersey-2",
  "cover-2k",
  "finals-mvp",
  "roy-modern",
  "team-kings",
  "t90-bulls",
  "name-michael",
  "teams-of-kd",
  "tm-lebron",
  "dunk-champs",
  "tm-sga",
  "tm-rose",
  "name-robinson",
  "team-celtics",
  "col-nova",
  "t90-mavs",
  "usa-2020",
  "tm-trae",
  "ch-25-thunder",
  "atl-central",
  "wing-allstars",
  "teams-of-harden",
  "mvp",
  "title-teams",
  "tm-nash",
  "tm-curry",
  "team-warriors",
  "name-gordon",
  "col-uconn",
  "fifty-forty-ninety",
  "no1-80s90s",
  "tm-dwight",
  "ch-16-cavs",
  "name-james",
  "team-magic",
  "t90-heat",
  "player-coach-champs",
  "col-lsu",
  "tm-iverson",
  "tm-malone",
  "team-lakers",
  "name-anderson",
  "mascots",
  "c-allstars",
  "expansion",
  "tm-jrue",
  "tm-cp3",
  "t90-suns",
  "teams-of-lebron",
  "champs-2000s",
  "mvp-fmvp",
  "team-clippers",
  "tm-wade",
  "ch-90s-bulls",
  "name-kyle",
  "kentucky",
  "movie-hoopers",
  "undrafted",
  "pts-30k",
  "tm-pg",
  "tm-pau",
  "team-grizzlies",
  "name-marcus",
  "t90-hawks",
  "col-houston",
  "german",
  "tm-jordan",
  "ch-dubs-dynasty",
  "name-young",
  "team-knicks",
  "east-teams",
  "teams-of-butler",
  "dpoy",
  "tm-dirk",
  "tm-kat",
  "col-marquette",
  "t90-raptors",
  "nicknames",
  "champs-70s",
  "title-coaches",
  "tm-fox",
  "ch-badboys",
  "name-williams",
  "team-pistons",
  "no1-mvp",
  "triple-double-100",
  "ucla",
  "tm-kyrie",
  "tm-vince",
  "team-cavs",
  "name-tyler",
  "t90-bucks",
  "animal-teams",
  "french",
  "tm-bird",
  "tm-brunson",
  "name-allen",
  "team-heat",
  "usa-2016",
  "teams-of-ad",
  "mvp-modern",
  "tm-zion",
  "ch-twin-towers",
  "duke",
  "t90-sonics",
  "finals-losers",
  "coach-kobe",
  "team-nuggets",
  "tm-kawhi",
  "tm-cade",
  "name-harris",
  "pg-allstars",
  "no-s-teams",
  "team-pacers",
  "col-cuse",
  "tm-lamelo",
  "ch-heat-big3",
  "name-jones",
  "t90-magic",
  "nba75",
  "teams-of-dwight",
  "asg-mvp",
  "tm-siakam",
  "tm-ad",
  "team-bulls",
  "col-gtown",
  "name-walker",
  "pts-25k",
  "no3-picks",
  "tm-kg",
  "tm-dame",
  "t90-sixers",
  "west-teams",
  "nba-sons",
  "champs-2010s",
  "name-thompson",
  "tm-gobert",
  "ch-23-nuggets",
  "team-jazz",
  "col-gonzaga",
  "sneakers",
  "name-jackson",
  "t90-rockets",
  "tm-tmac",
  "tm-westbrook",
  "team-suns",
  "roy-00s",
  "teams-of-melo",
  "allstar-14",
  "player-coaches",
  "tm-shaq",
  "ch-shaq-kobe",
  "name-davis",
  "team-mavs",
  "col-florida",
  "tv-analysts",
  "no2-picks",
  "tm-butler",
  "tm-lowry",
  "t90-wolves",
  "nw-pac",
  "canadians",
  "champs-90s",
  "arenas",
  "tm-magic",
  "tm-kobe",
  "team-raptors",
  "name-wallace",
  "unc",
  "three-champs",
  "pg-mvp",
  "tm-harden",
  "ch-19-raptors",
  "team-rockets",
  "name-chris",
  "t90-pacers",
  "kansas",
  "teams-of-kyrie",
  "tm-ant",
  "tm-derozan",
  "team-wizards",
  "name-green",
  "nba-teams",
  "brothers",
  "seventy-points",
  "tm-bam",
  "ch-showtime",
  "col-mich",
  "t90-jazz",
  "prep-to-pro",
  "champs-80s",
  "coach-mj",
  "tm-hali",
  "tm-booker",
  "team-pelicans",
  "name-anthony",
  "redeem-team",
  "teams-of-russ",
  "roy-mvp",
  "tm-yao",
  "tm-paolo",
  "name-derrick",
  "team-bucks",
  "col-wake",
  "t90-lakers",
  "aussies",
  "tm-tatum",
  "ch-24-celtics",
  "team-spurs",
  "name-brown",
  "se-sw",
  "top5-since-2015",
  "five-rings",
  "tm-ja",
  "tm-barkley",
  "col-texas",
  "t90-celtics",
  "usa-2024",
  "fmvp-80s90s",
  "team-wolves",
  "tm-love",
  "ch-20-lakers",
  "name-smith",
  "teams-of-cp3",
  "allnba1-modern",
  "africa-born",
  "never-won",
  "tm-jokic",
  "tm-duncan",
  "ch-rockets-9495",
  "team-blazers",
  "name-jalen",
  "col-iu",
  "t90-blazers",
  "tm-pierce",
  "ch-21-bucks",
  "team-thunder",
  "name-jason",
  "dream-team",
  "col-usc",
  "coach-curry",
  "tm-melo",
  "tm-embiid",
  "ch-kobe-pau",
  "t90-spurs",
  "teams-of-shaq",
  "second-round-stars",
  "scoring-champs",
  "tm-mitchell",
  "tm-bosh",
  "team-nets",
  "name-thomas",
  "multi-champs",
  "col-msu",
  "nba-cities",
  "tm-durant",
  "ppg-30",
  "ch-celtics-80s",
  "team-hawks",
  "t90-knicks",
  "name-johnson",
  "usa-2012",
  "tm-rayallen",
  "tm-wemby",
  "big-allstars",
  "col-ariz",
  "team-hornets",
  "name-miller",
  "coach-lebron",
  "tm-hakeem",
  "ncaa-nba",
  "ch-83-sixers",
  "teams-of-vince",
  "intl-mvp",
  "no1-picks",
  "space-jam",
  "tm-giannis",
  "tm-parker",
  "name-kevin",
  "champs-2020s",
  "moved-teams",
  "t90-pistons",
  "col-memphis"
];

/* Held back from the rotation entirely — spares, and anything parked on purpose. */
const ROTATION_RESERVE = [
  "chicago",
  "team-sixers"
];

module.exports = { BANK_NAME, DEEPBALL_LAUNCH, TIERS, PROMPTS, PROMPT_ORDER, ROTATION_RESERVE };
