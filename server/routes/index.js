var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send({message: 'hello buddy!'})
// });
//
//


const FB = require('fb');

const fb = new FB.Facebook({version: 'v2.8'});

const setAccessToken = (req, res, next) => {
  FB.setAccessToken(req.headers, fbaccesstoken);
  next()
}

router.get('/facebook', setAccessToken, (req,res) => {
    FB.api('/me', { fields: ['id', 'name', 'email', 'picture'] }, function (response) {
    // if(!res || res.error) {
    //   console.log(!res ? 'error occurred' : res.error);
      res.send(response)
    })
    // console.log(res.id);
    // console.log(res.name);
  });

router.get('/fbtimeline', setAccessToken, (req,res) => {
    FB.api('/me/feed', function (response) {
      console.log('ini response'+response);
      res.send(response)
    // if(!res || res.error) {
    //   console.log(!res ? 'error occurred' : res.error);
      // res.send(response)
    })
    // console.log(res.id);
    // console.log(res.name);
  });

module.exports = router;
