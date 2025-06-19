var questions = [
  {
    id: 1,
    type: "multiple",
    question: "Melyek a két fő HTTP kérésmetódus és mire szolgálnak?",
    options: [
      "GET: információk lekérése, POST: információk felküldése",
      "PUT: létrehozás, DELETE: törlés",
      "HEAD: fejléc lekérése, OPTIONS: támogatott metódusok",
      "PATCH: részleges módosítás, CONNECT: proxy kapcsolat"
    ],
    correct: 0,
    explanation: "GET: információk lekérése (pl. oldal betöltése), POST: információk felküldése (pl. formok, szerveroldalon módosít)"
  },
  {
    id: 2,
    type: "checkbox",
    question: "Melyek HTML5 szemantikus elemek?",
    options: ["canvas", "figure", "section", "video", "audio", "sidebar", "div", "span"],
    correct: [0, 1, 2, 3, 4, 5],
    explanation: "HTML5 szemantikus elemek: canvas, figure, section, video, audio, sidebar (és még sok más). A div és span nem szemantikus elemek."
  },
  {
    id: 3,
    type: "code",
    question: "Írj JavaScript kódot, amely dinamikusan módosítja egy HTML elem tartalmát:",
    placeholder: "function insertText() {\\n  // írd ide a kódot\\n}",
    correct: ["document.getElementById", "innerHTML", "textContent"],
    explanation: "Helyes megoldás:\\nfunction insertText() {\\n  const exampleDiv = document.getElementById('example');\\n  exampleDiv.innerHTML = 'Hello world';\\n}"
  },
  {
    id: 4,
    type: "multiple",
    question: "Mi a különbség az urlencoded és multipart form adatok között?",
    options: [
      "urlencoded támogatja a fájlfeltöltést, multipart nem",
      "multipart támogatja a fájlfeltöltést, urlencoded nem",
      "Mindkettő ugyanazt csinálja",
      "urlencoded gyorsabb, multipart biztonságosabb"
    ],
    correct: 1,
    explanation: "urlencoded: alapértelmezett, nem támogatja a fájlfeltöltést. multipart: enctype-al kell beállítani, támogatja a fájlfeltöltést."
  },
  {
    id: 5,
    type: "text",
    question: "Mi a különbség az Authentication és Authorization között?",
    correct: ["authentication ki vagy", "authorization mire van jogod", "hitelesítés", "engedélyezés"],
    explanation: "Authentication: 'Ki vagy?' - Hitelesítés (felhasználónév/jelszó). Authorization: 'Mire van jogod?' - Engedélyezés (bejelentkezett felhasználó jogköre)."
  },
  {
    id: 6,
    type: "text",
    question: "Javítsd ki ezt a REST API hívást: POST /api/deletePicture?pictureId=42",
    correct: ["DELETE /api/pictures/42", "delete", "pictures"],
    explanation: "Helyes: DELETE /api/pictures/42. Hibák: POST helyett DELETE, 'deletePicture' helyett 'pictures' (többesszám), ID nem paraméterként, hanem erőforrásként."
  },
  {
    id: 7,
    type: "text",
    question: "Add meg egy URL általános szerkezetét:",
    correct: ["protokoll://host:port/utvonal", "scheme://host:port/path"],
    explanation: "< protokoll>://<host>[:<port>][/utvonal] pl. http://localhost:8080/index.html"
  },
  {
    id: 8,
    type: "boolean",
    question: "A hashelés visszafejthető folyamat.",
    correct: false,
    explanation: "Hamis. A hashelés egyirányú folyamat, nem ismered a bemeneti adatot. Az enkriptálás visszafejthető, ha megvan a kulcs."
  },
  {
    id: 9,
    type: "checkbox",
    question: "Melyek az Express routing mechanizmus elemei?",
    options: [
      "app.get('/route', callback)",
      "app.post('/route', callback)",
      "app.all('/route', callback)",
      "reguláris kifejezések használata",
      "dinamikus változók (:id)",
      "app.listen() metódus"
    ],
    correct: [0, 1, 2, 3, 4],
    explanation: "Express routing: HTTP metódusok (get, post, all), reguláris kifejezések, dinamikus változók (:id). Az app.listen() szerver indításra szolgál."
  },
  {
    id: 10,
    type: "text",
    question: "Mi az SQL injection és hogyan történik?",
    correct: ["sql injection", "felhasználói input", "sql parancs befolyásolása"],
    explanation: "SQL injection: amikor a felhasználótól kapott adatokat közvetlenül behelyettesítjük SQL parancsba, így a felhasználó befolyásolhatja a parancsot és kárt tehet az adatbázisban."
  },
  {
    id: 11,
    type: "multiple",
    question: "Melyik CSS betöltési módszer a legjobb gyakorlat?",
    options: [
      "Inline style attribútum",
      "HTML head-ben < style> tag",
      "Külső CSS fájl",
      "JavaScript-tel dinamikusan"
    ],
    correct: 2,
    explanation: "A külső CSS fájl a legjobb: jobb szétválasztás, több HTML fájlra használható, validálható önmagában."
  },
  {
    id: 12,
    type: "checkbox",
    question: "Mit tesz lehetővé a JavaScript a frontend fejlesztésben?",
    options: [
      "HTML tartalom módosítása",
      "Eseménykezelés",
      "Sütik létrehozása",
      "Böngésző specifikus tartalom",
      "Szerver oldali adatbázis kezelés",
      "Kliens oldali adatellenőrzés"
    ],
    correct: [0, 1, 2, 3, 5],
    explanation: "JavaScript frontend lehetőségei: HTML módosítás, eseménykezelés, sütik, böngésző specifikus tartalom, kliens oldali validáció. Szerver oldali adatbázis kezelést nem."
  },
  {
    id: 13,
    type: "text",
    question: "Mi a Node.js és mire szolgál?",
    correct: ["v8 javascript motor", "szerver oldali javascript", "egyszálú"],
    explanation: "Node.js: Google V8 JavaScript értelmező motorra épül, lehetővé teszi JS futtatását konzolon keresztül, egyszálú végrehajtás, hatékony I/O műveleteknél."
  },
  {
    id: 14,
    type: "multiple",
    question: "Mi történik minden HTTP hívás esetén session használatakor?",
    options: [
      "Ellenőrzi a connect.sid sütit",
      "Új session ID-t generál mindig",
      "Törli az összes sütit",
      "Elmenteni az összes POST adatot"
    ],
    correct: 0,
    explanation: "Minden HTTP híváskor ellenőrzi a connect.sid sütit, ha létezik betölti a session-t, ha nem akkor generál új azonosítót."
  },
  {
    id: 15,
    type: "text",
    question: "Mi a különbség POST és PUT között RESTful API-kban?",
    correct: ["post létrehoz", "put módosít", "put beszúr ha nem létezik"],
    explanation: "POST: létrehoz új erőforrást. PUT: módosít létező erőforrást, ha nem létezik akkor létrehozza."
  },
  {
    id: 16,
    type: "checkbox",
    question: "Melyek a HTTP státuszkód kategóriák?",
    options: ["1xx - információk", "2xx - sikeres", "3xx - átirányítás", "4xx - kliens hiba", "5xx - szerver hiba", "6xx - proxy hiba"],
    correct: [0, 1, 2, 3, 4],
    explanation: "HTTP státuszkódok: 1xx információk, 2xx sikeres, 3xx átirányítás, 4xx kliens hiba, 5xx szerver hiba. 6xx nem létezik."
  },
  {
    id: 17,
    type: "code",
    question: "Írj CSS szelektor amely minden h2 elem után következő .nextclass osztályú elemre érvényes:",
    correct: ["h2 + .nextclass", "h2+.nextclass"],
    explanation: "Helyes válasz: h2 + .nextclass { }\\nA + szelektorral jelöljük az egymás után következő testvér elemeket."
  },
  {
    id: 18,
    type: "text",
    question: "Nevezd meg a JSON és JavaScript objektum közötti átalakítási metódusokat:",
    correct: ["JSON.parse", "JSON.stringify"],
    explanation: "JSON.parse(jsonStr) - JSON stringből JavaScript objektumba. JSON.stringify(obj) - JavaScript objektumból JSON stringbe."
  },
  {
    id: 19,
    type: "multiple",
    question: "Mi a különbség az Express app.use() és app.get() között?",
    options: [
      "app.use() csak GET kérésekre, app.get() minden típusra",
      "app.get() csak GET kérésekre, app.use() minden típusra és alútvonalra",
      "Mindkettő ugyanazt csinálja",
      "app.use() gyorsabb, app.get() lassabb"
    ],
    correct: 1,
    explanation: "app.get(): csak GET típusú kérések kezelésére. app.use(): bármilyen típusú kérésre és alútvonalakra is érvényes middleware beszúrásra."
  },
  {
    id: 20,
    type: "text",
    question: "Hogyan implementálható egyszerűen role-based authorization Node.js-ben?",
    correct: ["session", "role", "request.session.role"],
    explanation: "Implementálás: felhasználó regisztrációjakor eltároljuk a szerepkört, loginkor elmentjük a sessionbe (request.session.role), endpoint-oknál ellenőrizzük."
  },
  {
    id: 21,
    type: "code",
    question: "Írj fetch API példát POST kéréshez /myendpoint URL-re JSON adattal:",
    placeholder: "fetch('/myendpoint', {\\n  // írd ide a konfigurációt\\n});",
    correct: ["method: 'POST'", "Content-Type': 'application/json'", "JSON.stringify"],
    explanation: "fetch('/myendpoint', {\\n  method: 'POST',\\n  headers: { 'Content-Type': 'application/json' },\\n  body: JSON.stringify({myKey: 42})\\n});"
  },
  {
    id: 22,
    type: "boolean",
    question: "A HTML űrlapok csak adatok küldésére szolgálnak a szervernek.",
    correct: true,
    explanation: "Igaz. A HTML űrlapok (formok) fő célja adatok küldése kliensről szerverre."
  },
  {
    id: 23,
    type: "text",
    question: "Mi az ECMAScript és mi a kapcsolata a JavaScript-tel?",
    correct: ["szabvány", "javascript", "ecmascript"],
    explanation: "ECMAScript: közös hivatalos szabvány, minden modern böngésző JavaScript motorja támogatja legalább az ES5.1 szabványt."
  },
  {
    id: 24,
    type: "multiple",
    question: "Mi különbözteti meg a middleware-t egy router lekezelőtől?",
    options: ["Middleware-nek van next() paramétere", "Router lekezelő válaszol a kérésre", "Middleware továbbítja a kérést", "Mindegyik fenti igaz"],
    correct: 3,
    explanation: "Middleware: (req, res, next) => {} - feldolgozza és továbbítja. Router: (req, res) => {} - válaszol a kérésre."
  },
  {
    id: 25,
    type: "code",
    question: "Hogyan írod felül egy HTML form alapértelmezett működését aszinkron küldéshez?",
    placeholder: "< form onsubmit=\\\"handleSubmit(event)\\\">\\n  // form elemek\\n</ form>",
    correct: ["event.preventDefault()", "fetch", "onsubmit"],
    explanation: "function handleSubmit(event) {\\n  event.preventDefault();\\n  // fetch API használata aszinkron küldéshez\\n}"
  },
  {
    id: 26,
    type: "checkbox",
    question: "Melyek a HTML form attribútumai?",
    options: ["method", "action", "enctype", "onsubmit", "target", "autocomplete", "id", "class"],
    correct: [0, 1, 2, 3, 4, 5],
    explanation: "Form-specifikus attribútumok: method, action, enctype, onsubmit, target, autocomplete. Az id és class általános HTML attribútumok."
  },
  {
    id: 27,
    type: "text",
    question: "Melyik Express middleware-t használjuk multipart form adatok feldolgozására?",
    correct: ["formidable", "multer"],
    explanation: "Multipart form data (fájlok): formidable vagy multer middleware. URLencoded adatokhoz: express.urlencoded()."
  },
  {
    id: 28,
    type: "text",
    question: "Mi a sózás (salting) és miért fontos a jelszavak hashelésekor?",
    correct: ["random string", "két egyforma jelszó", "biztonság"],
    explanation: "Sózás: random string hozzáadása a jelszóhoz hashelés előtt. Így két egyforma jelszó is különböző hash-t eredményez, növelve a biztonságot."
  },
  {
    id: 29,
    type: "code",
    question: "Írj CSS3 tranzíció példát egy div elem háttérszín változására:",
    placeholder: "div {\\n  /* CSS tranzíció ide */\\n}",
    correct: ["transition:", "background-color", ":hover"],
    explanation: "div {\\n  background-color: green;\\n  transition: background-color 3s;\\n}\\ndiv:hover {\\n  background-color: blue;\\n}"
  },
  {
    id: 30,
    type: "text",
    question: "Mit csinál az Express response.render() metódus?",
    correct: ["sablonmotor", "dinamikus", "view"],
    explanation: "response.render(): sablonmotorral dinamikusan generál HTML-t változók behelyettesítésével. Megmarad az MVC elv, ahol a sablon a View."
  },
  {
    id: 31,
    type: "checkbox",
    question: "Melyek a MEAN stack technológiái?",
    options: ["MongoDB", "Express", "Angular", "Node.js", "React", "MySQL"],
    correct: [0, 1, 2, 3],
    explanation: "MEAN: MongoDB (adatbázis), Express (backend framework), Angular (frontend framework), Node.js (runtime environment)."
  },
  {
    id: 32,
    type: "checkbox",
    question: "Melyek az XMLHttpRequest objektum főbb adattagjai?",
    options: ["readyState", "onreadystatechange", "status", "responseText", "response", "timeout", "innerHTML"],
    correct: [0, 1, 2, 3, 4, 5],
    explanation: "XMLHttpRequest tagok: readyState, onreadystatechange, status, responseText, response, timeout. Az innerHTML DOM element tulajdonság."
  },
  {
    id: 33,
    type: "code",
    question: "Írj CSS szelektor amely minden https:// kezdetű linkre érvényes:",
    correct: ["a[href^=\\\"https://\\\"]"],
    explanation: "a[href^=\\\"https://\\\"] { } - A ^ jelzi hogy az attribútum értéke az adott stringgel kezdődik."
  },
  {
    id: 34,
    type: "text",
    question: "Mivel nyújtanak többet a sablonmotorok az ES6 template literal-oknál?",
    correct: ["mvc", "szétválasztás", "külső fájl", "validálás"],
    explanation: "Sablonmotorok előnyei: MVC elv betartása, logika és megjelenítés szétválasztása, külső fájlok, kevesebb hibalehetőség, komplexebb műveletek támogatása."
  },
  {
    id: 35,
    type: "multiple",
    question: "Mi a különbség session és sütik között?",
    options: [
      "Session szerver oldalon, süti kliens oldalon tárolódik",
      "Session biztonságosabb mint a süti",
      "Session automatikusan kezelt, süti manuálisan",
      "Mindegyik igaz"
    ],
    correct: 3,
    explanation: "Session: szerver oldali tárolás, biztonságosabb, automatikus kezelés. Süti: kliens oldali tárolás, kevésbé biztonságos, manuális kezelés szükséges."
  },
  {
    id: 36,
    type: "text",
    question: "Mi a különbség PUT és PATCH között?",
    correct: ["put teljes update", "patch részleges update"],
    explanation: "PUT: teljes erőforrás lecserélése/létrehozása. PATCH: részleges módosítás meglévő erőforráson."
  },
  {
    id: 37,
    type: "multiple",
    question: "Mit jelent a 201 és 202 HTTP státuszkód?",
    options: ["201: Created, 202: Accepted", "201: OK, 202: Found", "201: Accepted, 202: Created", "201: Found, 202: OK"],
    correct: 0,
    explanation: "201 Created: valami létrejött. 202 Accepted: kérés elfogadva feldolgozásra, de még nem fejeződött be."
  },
  {
    id: 38,
    type: "text",
    question: "Mi a különbség === és == operátor között JavaScript-ben?",
    correct: ["típus", "strict", "identity"],
    explanation: "===: strict/identity operator, típust és értéket is összehasonlít. ==: csak értéket hasonlít össze, típuskonverziót végez."
  },
  {
    id: 39,
    type: "boolean",
    question: "A JavaScript Promise csak egyszer hajtódik végre, az események többször is.",
    correct: true,
    explanation: "Igaz. Promise csak egyszer fut le (.then().catch()), események többször is bekövetkezhetnek és kezelhetők."
  },
  {
    id: 40,
    type: "text",
    question: "Mi a HTTP Basic Authentication legnagyobb hátránya?",
    correct: ["base64", "nem biztonságos", "https"],
    explanation: "HTTP Basic Auth: base64 kódolású (nem titkosítás!), csak HTTPS-sel biztonságos, nincs saját felület, cache-t törölni kell."
  },
  {
    id: 41,
    type: "multiple",
    question: "Mit egyszerűsít a Fetch API az XMLHttpRequest-hez képest?",
    options: [
      "Promise alapú, könnyebb kezelés",
      "Automatikusan felépíti az XMLHttpRequest objektumot",
      "Egyszerűbb szintaxis",
      "Mindegyik igaz"
    ],
    correct: 3,
    explanation: "Fetch API: Promise alapú (.then()/.catch()), automatikusan kezeli az XMLHttpRequest objektumot, egyszerűbb szintaxis."
  },
  {
    id: 42,
    type: "code",
    question: "Add meg egy alapvető HTML dokumentum szerkezetét:",
    placeholder: "< !DOCTYPE html>\\n< html>\\n<!-- írd ide a struktúrát -->\\n</ html>",
    correct: ["< !DOCTYPE html>", "< head>", "< body>", "< title>"],
    explanation: "< !DOCTYPE html>\\n<html>\\n<head>\\n  <title>Page Title</title>\\n</head>\\n<body>\\n  <!-- tartalom -->\\n</body>\\n</html>"
  },
  {
    id: 43,
    type: "checkbox",
    question: "Melyek a MERN stack technológiái?",
    options: ["MongoDB", "Express", "React", "Node.js", "Angular", "MySQL"],
    correct: [0, 1, 2, 3],
    explanation: "MERN: MongoDB (adatbázis), Express (backend), React (frontend), Node.js (runtime). Angular a MEAN stack-ben van."
  },
  {
    id: 44,
    type: "text",
    question: "Mi a DOM és mire használható HTML alkalmazásokban?",
    correct: ["document object model", "fa szerkezet", "javascript manipulálás"],
    explanation: "DOM (Document Object Model): fa szerkezetű reprezentáció, JavaScript-tel manipulálhatjuk HTML elemeket (getElementById, createElement, stb.)"
  },
  {
    id: 45,
    type: "multiple",
    question: "Melyik HTTP fejléc szolgál hitelesítésre?",
    options: ["Authorization", "Authentication", "WWW-Authenticate", "Basic-Auth"],
    correct: 0,
    explanation: "Authorization: kliens hitelesítő adatait tartalmazza. WWW-Authenticate: szerver kéri a hitelesítést."
  },
  {
    id: 46,
    type: "text",
    question: "Javítsd ki ezt a RESTful hívást: PUT /api/saveimage?announcementId=42",
    correct: ["POST /api/announcements/42/images", "post", "images"],
    explanation: "Helyes: POST /api/announcements/42/images. Hibák: PUT helyett POST (új erőforrás), saveimage helyett images (főnév), ID nem paraméter."
  },
  {
    id: 47,
    type: "checkbox",
    question: "Melyek CSS3 újítások?",
    options: ["Media queries", "Flexbox", "Transitions", "Animations", "Border-radius", "Tables"],
    correct: [0, 1, 2, 3, 4],
    explanation: "CSS3 újítások: media queries, flexbox, transitions, animations, border-radius. A table CSS2-ben is létezett."
  },
  {
    id: 48,
    type: "text",
    question: "Mit jelent az Express middleware 'next' paraméter?",
    correct: ["továbbítás", "következő middleware", "next()"],
    explanation: "A next() függvény továbbítja a kérést a következő middleware-hez. Ha nem hívjuk meg, a kérés 'elakad'."
  },
  {
    id: 49,
    type: "boolean",
    question: "A localStorage API használható Claude.ai artifact környezetben.",
    correct: false,
    explanation: "Hamis. A localStorage nem támogatott Claude.ai artifact környezetben, helyette memóriában kell tárolni az adatokat."
  },
  {
    id: 50,
    type: "code",
    question: "Írj egy egyszerű Express route-ot GET /users/:id útvonalra:",
    placeholder: "app.get('/users/:id', (req, res) => {\\n  // kód ide\\n});",
    correct: ["req.params.id", "res.send", "res.json"],
    explanation: "app.get('/users/:id', (req, res) => {\\n  const userId = req.params.id;\\n  res.json({id: userId});\\n});"
  },
  {
    id: 51,
    type: "multiple",
    question: "Melyik Content-Type header értéket használjuk JSON adatok küldésekor?",
    options: ["application/json", "text/json", "application/x-json", "text/plain"],
    correct: 0,
    explanation: "JSON adatok küldésekor: Content-Type: application/json"
  },
  {
    id: 52,
    type: "text",
    question: "Mi a különbség szinkron és aszinkron JavaScript kód között?",
    correct: ["aszinkron nem blokkoló", "callback", "promise", "async/await"],
    explanation: "Szinkron: blokkoló, sorban végrehajtódik. Aszinkron: nem blokkoló, callback/Promise/async-await használatával."
  },
  {
    id: 53,
    type: "checkbox",
    question: "Melyek érvényes CSS length egységek?",
    options: ["px", "em", "rem", "%", "vh", "vw", "pt", "ex"],
    correct: [0, 1, 2, 3, 4, 5, 6, 7],
    explanation: "Mindegyik érvényes CSS length egység: px (pixel), em/rem (font-based), % (relatív), vh/vw (viewport), pt (point), ex (x-height)."
  },
  {
    id: 54,
    type: "text",
    question: "Hogyan lehet elkerülni az SQL injection támadásokat?",
    correct: ["prepared statement", "paraméteres lekérdezés", "escape"],
    explanation: "SQL injection elkerülése: prepared statements, paraméteres lekérdezések használata, input validáció és escape-elés."
  },
  {
    id: 55,
    type: "boolean",
    question: "A CORS (Cross-Origin Resource Sharing) kliens oldali biztonsági mechanizmus.",
    correct: false,
    explanation: "Hamis. A CORS böngésző oldali biztonsági mechanizmus, de szerver oldali konfigurációt igényel (Access-Control-Allow-Origin fejlécek)."
  },
  {
    id: 56,
    type: "multiple",
    question: "Melyik HTTP státuszkódot küldjük sikeres DELETE művelet után?",
    options: ["200 OK", "201 Created", "204 No Content", "202 Accepted"],
    correct: 2,
    explanation: "DELETE után: 204 No Content (sikeres törlés, nincs visszaküldendő tartalom) vagy 200 OK (ha van response body)."
  },
  {
    id: 57,
    type: "code",
    question: "Írj egy CSS grid layout példát 3 oszloppal:",
    placeholder: ".container {\\n  /* CSS grid tulajdonságok */\\n}",
    correct: ["display: grid", "grid-template-columns", "1fr"],
    explanation: ".container {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  /* vagy: repeat(3, 1fr) */\\n}"
  },
  {
    id: 58,
    type: "text",
    question: "Mi az event bubbling JavaScript-ben?",
    correct: ["esemény buborékolás", "szülő elem", "event.stopPropagation()"],
    explanation: "Event bubbling: az esemény a cél elemtől felfelé terjed a szülő elemtől szülő elemig. event.stopPropagation()-nal állítható meg."
  },
  {
    id: 59,
    type: "checkbox",
    question: "Melyek érvényes JavaScript változó deklarációs kulcsszavak?",
    options: ["var", "let", "const", "function", "class", "int"],
    correct: [0, 1, 2],
    explanation: "JavaScript változó deklaráció: var, let, const. A function és class deklarációs kulcsszavak, de nem változókhoz. Az int nem létezik JS-ben."
  },
  {
    id: 60,
    type: "text",
    question: "Mit csinál a JavaScript Array.map() metódus?",
    correct: ["új tömb", "transform", "callback minden elemre"],
    explanation: "Array.map(): új tömböt hoz létre úgy, hogy minden eredeti elemre meghívja a callback függvényt és az eredményeket gyűjti."
  },
  {
    id: 61,
    type: "boolean",
    question: "A CSS flexbox csak egy dimenzióban (sor vagy oszlop) rendezi az elemeket.",
    correct: true,
    explanation: "Igaz. Flexbox egydimenziós layout (flex-direction: row vagy column). Grid kétdimenziós layout rendszer."
  },
  {
    id: 62,
    type: "multiple",
    question: "Melyik nem HTTP metódus?",
    options: ["GET", "POST", "SEND", "DELETE"],
    correct: 2,
    explanation: "SEND nem HTTP metódus. Az érvényes HTTP metódusok: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, stb."
  },
  {
    id: 63,
    type: "code",
    question: "Írj egy addEventListener példát click eseményre:",
    placeholder: "element.addEventListener('click', function() {\\n  // kód ide\\n});",
    correct: ["addEventListener", "click", "function"],
    explanation: "element.addEventListener('click', function(event) {\\n  console.log('Clicked!');\\n  // eseménykezelő kód\\n});"
  },
  {
    id: 64,
    type: "text",
    question: "Mi a különbség margin és padding között CSS-ben?",
    correct: ["margin külső", "padding belső", "border"],
    explanation: "Margin: elem körüli külső távolság (border-en kívül). Padding: tartalom és border közötti belső távolság."
  },
  {
    id: 65,
    type: "checkbox",
    question: "Melyek érvényes HTML5 input típusok?",
    options: ["email", "password", "number", "date", "color", "range", "file", "button"],
    correct: [0, 1, 2, 3, 4, 5, 6],
    explanation: "HTML5 input típusok: email, password, number, date, color, range, file (és még sok más). A button külön HTML elem."
  },
  {
    id: 66,
    type: "text",
    question: "Hogyan lehet JavaScript-ben string-et számmá konvertálni?",
    correct: ["parseInt", "parseFloat", "Number", "+"],
    explanation: "String→szám konverzió: parseInt() (egész), parseFloat() (tizedes), Number() (automatikus), + operátor (gyors)."
  },
  {
    id: 67,
    type: "boolean",
    question: "A JavaScript === operátor típuskonverziót végez összehasonlítás előtt.",
    correct: false,
    explanation: "Hamis. A === (strict equality) NEM végez típuskonverziót. A == (loose equality) végez típuskonverziót."
  },
  {
    id: 68,
    type: "multiple",
    question: "Melyik CSS position érték teszi lehetővé az elem pozícionálását a viewport-hoz képest?",
    options: ["static", "relative", "absolute", "fixed"],
    correct: 3,
    explanation: "position: fixed - viewport-hoz viszonyított pozícionálás (görgetéskor is ugyanott marad)."
  },
  {
    id: 69,
    type: "text",
    question: "Mit jelent a 'hoisting' JavaScript-ben?",
    correct: ["változó felhúzás", "declaration", "top of scope"],
    explanation: "Hoisting: változó és függvény deklarációk 'felhúzódnak' a hatókör tetejére. A let/const temporal dead zone-t használ."
  },
  {
    id: 70,
    type: "code",
    question: "Írj egy JavaScript arrow function példát, amely két számot összeád:",
    placeholder: "const add = ",
    correct: ["=>", "(a, b)", "return a + b"],
    explanation: "const add = (a, b) => a + b;\\n// vagy\\nconst add = (a, b) => {\\n  return a + b;\\n};"
  }
];
