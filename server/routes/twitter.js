var express = require('express');
var router = express.Router();
var twitterController = require('../controllers/twitterController');

router.get('/' , twitterController.general)
router.post('/search' , twitterController.search)
router.get('/hometimeline' , twitterController.hometimeline)
router.get('/mytimeline' , twitterController.mytimeline)
router.post('/posttweet' , twitterController.posttweet);


module.exports = router;
