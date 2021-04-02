const jwt = require('jwt-simple');
const User = require('../models/user');
const key = require('../config/key');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, key.secret);
}

exports.signin = function(req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {
  const{ 
    email,
    password,
    first_name,
    last_name,
    phone,
  } = req.body

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password'});
  }

  // See if a user with the given email exists
  User.findOne({ email: email }, async (err, existingUser) => {
    
    if (err) { return next(err); }

    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }
    // If a user with email does NOT exist, create and save user record
    const user = new User({
      first_name:first_name,
      last_name:last_name,
      email: email,
      password: password,
      phone: phone,
    });

    try{
    const newUser = await user.save()
      res.status(201).json(newUser);
    }
    catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
}
