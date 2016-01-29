var express = require('express');
var router = express.Router();

var Dog = require('../models/dog');

/* paw left */
router.get('/left', function(req, res, next) {
  res.render('left', {title: 'Paw Left'});
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET liked page. */
router.get('/liked', function(req, res, next) {

  Dog.find({}, 'name age image', function(err) {
    if (err) console.log(err);
    console.log();

    res.send("works!");
    //res.render('liked', { title: 'Fave Dogs: ', name: name, age: age, image: image });
  });
  //res.render('liked', { title: 'Fave Dogs: ' });
});

module.exports = router;
