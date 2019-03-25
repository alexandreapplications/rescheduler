const functions = require('firebase-functions');

// [START setup cors]
const cors = require("cors")({
  origin: true
});
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
const resTypeRoute = require("./src/routes/resTypeRoute");

const express = require("express");

function setupRoute(route) {
  const app = express();
  app.use(cors);
  app.use("/", route);
  return app;
}

exports.resType = functions.https.onRequest(setupRoute(resTypeRoute));
// [END setup roles]