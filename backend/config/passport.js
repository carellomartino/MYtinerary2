const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy, ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = require('../Schemas/User')
const key = require('./config');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken('jwt');
opts.secretOrKey = key.secretOrKey;
opts.clientID = key.clientID;
opts.clientSecret = key.clientSecret;

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    console.log("entre")
    User.findById(jwt_payload.id)
        .then(user => {
            console.log(user)
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        })
        .catch(err => console.log(err));
})
);


var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: opts.clientID,
    clientSecret: opts.clientSecret,
    callbackURL: "http://localhost:5000/api/users/auth/google/callback",
    // passReqToCallback: true
  },
  function(accessToken, refreshToken, profile, cb) { console.log("entro")
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));



module.exports = passport;








































// var opts = {}

// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

// opts.secretOrKey = 'secret';

// // opts.issuer = 'accounts.examplesoft.com';

// // opts.audience = 'yoursite.net';

// passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
//     User.findOne({ id: jwt_payload.sub }, function (err, user) {
//         if (err) {
//             return done(err, false);
//         }
//         if (user) {
//             return done(null, user);
//         } else {
//             return done(null, false);
//             // or you could create a new account
//         }
//     });
// }));


// module.exports = passport;

