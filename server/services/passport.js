const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');
const key = require('../config/key');

const localOptions = { usernameField: 'email' };
// Pull out username and password
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  // Check username and password
  User.findOne({ email: email.toLowerCase() }, function(err, user) {
    // Handle search error
    if (err) { return done(err); }
    // If user not found, return false
    if (!user) { return done(null, false); }

    // Check if request password equals user.password
    user.comparePassword(password, function(err, isMatch) {
    if (err) { return done(err); }
    // If passwords don't match, return done
    if (!isMatch) { return done(null, false); }

    // If they match, return user model
    return done(null, user);
    });
  });
});



const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: key.secret
  };

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    // See if the user ID in the payload exists in our database
    // If it does, call 'done' with that other
    // otherwise, call done without a user object
    User.findById(payload.sub, function(err, user) {
      if (err) { return done(err, false); }
  
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  });

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);