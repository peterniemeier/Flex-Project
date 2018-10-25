const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');
const passport = require('passport');
const keys = require('../../config/keys');
const validateRegistrationInput = require('../../validations/register');
const validateLoginInput = require('../../validations/login');

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.username,
    email: req.user.email
  });
});

router.post('/register', (req,res) => {

  const { errors, isValid } = validateRegistrationInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
      errors.username = 'User already exists';
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
            const payload = {id: user.id, username: user.username};
            jsonwebtoken.sign(payload, keys.secretOrKey,{expiresIn: 3600}, (err,token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              });
            });
        });
      });
    }
  });
});

router.post('/login', (req,res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors)
  }
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ username }).then(user => {
    if (!user) {
      errors.email = "This user doesn't exist";
      return res.status(400).json(errors);
    }
    bcrypt.compare(password,user.password).then(isMatch => {
      if (isMatch) {
        const payload = {id: user.id, username: user.username}
        jsonwebtoken.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err,token) => {
          res.json({
            success:true,
            token: 'Bearer ' + token
          });

        });
      } else {
        errors.password = 'Incorrect Password';
        return res.status(400).json(errors);
      }
    });
  });
});

router.get('/test', (req, res) => res.json({msg:"users route "}));


module.exports = router;
