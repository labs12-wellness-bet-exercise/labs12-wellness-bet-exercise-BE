const { google } = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
  "243497202990-3u70k4j8afev7fnsmf6kgjdulqs3vde3.apps.googleusercontent.com", // client id
  "AStQqfwCTnxiYd47SqeySzxy", // client secret
  "https://wellness-bet-exercise.netlify.com/" // redirect URL ????
);

const scopes = ["https://www.googleapis.com/auth/fitness"];

const url = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: scopes
});

const fitness = google.fitness({
  version: "v3",
  auth: "AIzaSyAP1ZT1UChq0q2xogO3A9RKhZU1Chavlt4"
});
