'use strict';

const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const BearerStrategy = require('passport-http-bearer').Strategy;

const { Token, UserModel } = require('../models');

/**
 * LocalStrategy
 *
 * This strategy is used to authenticate users based on a username and password.
 * Anytime a request is made to authorize an application, we must ensure that
 * a user is logged in before asking them to approve the request.
 */
passport.use(
  new BasicStrategy(async (username, password, callback) => {
    try {
      const user = await UserModel.findOne({ username: username });

      // No user found with that username
      if (!user) throw Error('Invalid username or password');

      // Make sure the password is correct
      if (user.password !== password)
        throw Error('Invalid username or password');

      return callback(null, user);
    } catch (err) {
      return callback(err);
    }
  })
);

passport.serializeUser((user, done) => done(null, user._id));

passport.deserializeUser(async (id, done) => {
  const user = await UserModel.findById(id);
  done(error, user);
});

/**
 * BearerStrategy
 *
 * This strategy is used to authenticate either users or clients based on an access token
 * (aka a bearer token). If a user, they must have previously authorized a client
 * application, which is issued an access token to make requests on behalf of
 * the authorizing user.
 */
passport.use(
  new BearerStrategy(async (accessToken, callback) => {
    try {
      const token = Token.findOne({ value: accessToken });

      // No token found
      if (!token) throw Error('Invalid Token');

      const user = await UserModel.findOne({ _id: token.userId });

      // No user found
      if (!user) throw Error('Invalid Token');

      // Simple example with no scope
      callback(null, user, { scope: '*' });
    } catch (err) {
      return callback(err);
    }
  })
);

module.exports = {
  isAuthenticated: passport.authenticate(['basic'], {
    session: false
  }),
  isBearerAuthenticated: passport.authenticate('bearer', {
    session: false
  })
};
