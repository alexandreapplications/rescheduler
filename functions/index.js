const functions = require('firebase-functions');
const cors = require("cors")({
  origin: true
});

const resTypeRoute = require("./src/routes/resTypeRoute");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const express = require("express");

function setupRoute(route) {
    console.log(`[START configing express ${route}`);
    const app = express();
    app.use(cors);
    // app.use(bodyParser.json());
    app.use("/", route);
    console.log(`[END configing express ${route}`);
    return app;
  }
  
  exports.resType = functions.https.onRequest(setupRoute(resTypeRoute));