"use strict";
exports.__esModule = true;
exports.helloWorld = void 0;
var functions = require("firebase-functions");
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
exports.helloWorld = functions.https.onRequest(function (request, response) {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
exports.receiveBillingNotice = functions.pubsub.topic('billing').onPublish(function (message) {
    var data = message.json;
    console.log('Received pubsub notification');
    console.log(data);
});
