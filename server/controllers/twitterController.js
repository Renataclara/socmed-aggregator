'use strict'
require('dotenv').config()
var {OAuth} = require('oauth');

var oauth = new OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.API_KEY,
  process.env.API_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
);

module.exports = {
  general: function (req,res) {
    oauth.get(
       'https://api.twitter.com/1.1/trends/place.json?id=23424977',
       process.env.ACCESS_TOKEN, //test user token
       process.env.ACCESS_TOKEN_SECRET, //test user secret
       function (e, data, respond){
         if (e) console.error(e);
         res.send(JSON.parse(data));
    });
  },
  search: function (req,res) {
    oauth.get(
       `https://api.twitter.com/1.1/search/tweets.json?q=${req.body.search}`,
       process.env.ACCESS_TOKEN, //test user token
       process.env.ACCESS_TOKEN_SECRET, //test user secret
       function (e, data, respond){
         if (e) console.error(e);
         res.send(JSON.parse(data));
    });
  },
  hometimeline: function (req,res) {
    oauth.get(
       `https://api.twitter.com/1.1/statuses/home_timeline.json`,
       process.env.ACCESS_TOKEN, //test user token
       process.env.ACCESS_TOKEN_SECRET, //test user secret
       function (e, data, respond){
         if (e) console.error(e);
         res.send(JSON.parse(data));
    });
  },
  mytimeline: function (req,res) {
    oauth.get(
       `https://api.twitter.com/1.1/statuses/user_timeline.json`,
       process.env.ACCESS_TOKEN, //test user token
       process.env.ACCESS_TOKEN_SECRET, //test user secret
       function (e, data, respond){
         if (e) console.error(e);
         res.send(JSON.parse(data));
    });
  },
  posttweet: function (req,res) {
    oauth.post(
       `https://api.twitter.com/1.1/statuses/update.json`,
       process.env.ACCESS_TOKEN, //test user token
       process.env.ACCESS_TOKEN_SECRET, //test user secret
       {"status":`${req.body.status}`},
       function (e, data, respond){
         if (e) console.error(e);
         res.send(JSON.parse(data));
    });
  }
};
