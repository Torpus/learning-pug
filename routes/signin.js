var express = require('express');
var router = express.Router();
var db = require('../models/user');

router.get('/', function(req, res, next) {
  res.render('signin', { title: 'Learning Pug' });
});

router.post('/', function (req, res) {
  if (!db.findOne({email: req.body.email})) {
    res.redirect('/register');
  } else {
    res.redirect('/home');
  }
});

module.exports = router;
