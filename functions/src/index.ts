import * as functions from "firebase-functions";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.

exports.receiveBillingNotice = functions.pubsub.topic('billing').onPublish((message) => {
  const data = message.json;
  console.log('Received pubsub notification');
  console.log(data);
  return;
})