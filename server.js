// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var exported = require('./bot.js');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.send("Hello I'm here!");
});

app.get("/tweet", function (request, response) {
    var phrase = exported.chooseRandom();
    exported.bot.post('statuses/retweet/:id', { id: '854328673339625472' }, function (err, data, response) {
    console.log(data)
    })
    response.send('tweet sent : ' + phrase);
   
});


// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dreams);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
