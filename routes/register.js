var express = require('express');
var router = express.Router();
var db = require('../models/user');
const { v4: uuidv4 } = require('uuid');

router.get('/', function(req, res, next) {
  res.render('register', { title: 'Learning Pug' });
});

router.post('/', function (req, res) {
  if (!db.findOne({email: req.body.email})) {
    db.create({
      name: req.body.name,
      email: req.body.email,
      acct: uuidv4(),
    }).then(function(data) {
      if (data) {
        res.redirect('/home');
      }
    });
  } else {
    res.redirect('/signin');
  }
});

module.exports = router;
