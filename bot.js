var Twit = require("twit");
require('dotenv').config();

var bot = new Twit({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

var phraseArray = [ "hello!",
                    "I am here!",
                    "bip bip bip",
                    "you are funny",
                    "I love cats",
                    "Game over!",
                    "Try again",
                     ];

function chooseRandom() {
  return phraseArray[Math.floor(Math.random() * phraseArray.length)];
}

//bot.post('statuses/retweet/:id', { id: '854328673339625472' }, function (err, data, response) {
  //console.log(data)

module.exports = {
  chooseRandom : chooseRandom,
  bot : bot
}