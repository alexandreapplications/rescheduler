const functions = require("firebase-functions");

// [START setup cors]
const cors = require("cors");
// [END setup cors]

// [START setup firebase]
var admin = require("firebase-admin");

var serviceAccount = require("./keys/sharing-schedule-firebase-adminsdk-blbvo-1829cf80b9.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sharing-schedule.firebaseio.com"
});
// [END setup firebase]

// [START setup roles]
const resTypeRouter = require("./src/routes/resTypeRouter");
const resItemRouter = require("./src/routes/resItemRouter");
const domainRouter = require("./src/routes/domainRouter");

const express = require("express");

function setupRoute(route) {
  const app = express();
  app.use(
    cors({
      origin: [
        "http://localhost:4200",
        "http://localhost:8080",
        "https://sharing-schedule.firebaseapp.com"
      ]
    })
  );
  app.use("/", route);
  return app;
}
exports.resType = functions.https.onRequest(setupRoute(resTypeRouter));
exports.resItem = functions.https.onRequest(setupRoute(resItemRouter));
exports.domain = functions.https.onRequest(setupRoute(domainRouter));
// [END setup roles]
