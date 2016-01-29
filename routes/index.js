var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET liked page. */
router.get('/liked', function(req, res, next) {
  res.render('liked', { title: 'Fave Dogs: ' });
});

module.exports = router;
