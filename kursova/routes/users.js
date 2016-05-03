var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.route('/users')
  .get(function (req, res, next) {
    User.find(function (err, users) {
      if (err) {
        res.send(err);
      }

      res.json(users);
    });
  })
  .post(function (req, res) {

    var user = new User();
    user.email = req.body.email;
    user.password = req.body.password;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;

    user.save(function (err) {
      if (err) {
        res.send(err);
      }

      res.json({ message: 'Користувач створений', user: user });
    });
  });

module.exports = router;

