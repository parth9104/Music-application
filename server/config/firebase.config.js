
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://music-app-sgp-default-rtdb.firebaseio.com"
});
 

module.export = admin;