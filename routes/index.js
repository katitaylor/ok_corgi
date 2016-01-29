var express = require('express');
var router = express.Router();

var Dog = require('../models/dog');

/* paw left */
router.get('/left', function(req, res, next) {
  res.render('left', {title: 'Paw left'});
});

/* paw right */
router.get('/right', function(req, res, next) {
  res.render('right', {title: 'Paw right'});
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET liked page. */
router.get('/liked', function(req, res, next) {

  Dog.find({}, 'name age image', function(err, dogs) {
    //console.log("hey");
    if (err) throw (err);
    console.log(dogs);

    //res.send("works!");
    res.render('liked', { title: 'Fave Dogs: ', dogs: dogs });
  });
  //res.render('liked', { title: 'Fave Dogs: ' });
});

module.exports = router;
