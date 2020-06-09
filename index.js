require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");

// Creates express app
const app = express();
// The port used for Express server
// const PORT = 3000;
// Starts server
app.listen(process.env.PORT , function() {
  console.log('Bot is listening on port ' + process.env.PORT);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/*app.post('/', (req, res) => {
  var data = {form: {
    token: process.env.SLACK_AUTH_TOKEN,
    channel: "#general",
    text: "Hi! :wave: \n I'm your new bot."
  }};
  request.post('https://slack.com/api/chat.postMessage', data, function (error, response, body) {
    // Sends welcome message
    console.log(response.body);
    res.status(200).json(response.body);
  });
});*/

app.get('/', (req, res) => {
  var data = {form: {
    token: process.env.SLACK_AUTH_TOKEN,
    channel: "#general",
    text: "Hi! :wave: \n I'm your new bot, running in node with express.js"
  }};
  console.log('posting request');
  request.post('https://slack.com/api/chat.postMessage', data, function (error, response, body) {
    // Sends welcome message
    console.log(response.body);
    res.status(200).json(response.body);
  });
});