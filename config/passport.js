// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
// const mongoose = require('mongoose');
// const User = mongoose.model('users');
// const keys = require('./keys');

// const options = {};

// options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// options.secretOrKey = keys.secretOrKey;

// module.exports = passport => {
//   console.log("hello")
//   passport.use(new JwtStrategy(options, (payload, done) => {
//     User.findById(payload.id).then(user => {
//       if (user) {
//         return done(null, user);
//       }
//       return done(null, false);
//     })
//     .catch(err => {
//       console.log("hello")
//       console.error(err)
//     });
//   }));
// };



const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')
const User = mongoose.model('users')
const keys = require('../config/keys')

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = (passport) => {
  // debugger
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    // debugger
    User.findById(jwt_payload.id)
      .then((user) => {
        if (user) {
          return done(null, user);
        }

        return done(null, false);
      })
      .catch((err) => {
        console.log(err)
      })
  }))
}