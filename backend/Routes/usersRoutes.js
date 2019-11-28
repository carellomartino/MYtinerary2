const express = require('express')
const router = express.Router();
const User = require('../Schemas/User.js')
const key = require("../config/config");
const jwt = require("jsonwebtoken");
const passport = require('passport');


router.get('/', async (req, res) => {
    var usersFromRoutes = await User.find(function (err, allUsers) {
        if (err) return console.error(err);
        console.log("Todos los users desde User.find");
    })
    res.json({ usersFromRoutes })
});


router.get('/singleuser/:id', async (req, res) => {
    var singleUserFromRoutes = await User.find({ "username": req.params.id }, function (err, singleUser) {
        if (err) return console.error(err);
        console.log("Printing singleUser");
    })
    res.json({ singleUserFromRoutes })
});


router.post('/adduser', async function (req, res) {
    await User.find({ "email": req.body.email }, async function (err, userFound) {
        if (userFound.length != 0) {
            return res.send('x')
        } else {
            try {
                const user = new User(req.body);
                await user.save();
                res.send(user);
            } catch (e) {
                res.send(e);
            }
        }
    })
});


router.post('/login', async function (req, res) {
    await User.find({ "email": req.body.email }, async function (err, userFound) {
        if (userFound.length != 0 && userFound[0].password === req.body.password) {
            const payload = {
                id: userFound[0].id,
                username: userFound[0].username,
                avatarPicture: userFound[0].avatarPicture
            };
            const options = { expiresIn: 2592000 };
            jwt.sign(
                payload,
                key.secretOrKey,
                options,
                (err, token) => {
                    if (err) {
                        res.json({
                            success: false,
                            token: "There was an error"
                        });
                    } else {
                        res.json({
                            success: true,
                            token: token
                        });
                    }
                }
            );
        } else {
            return res.send('x')
        }
    })
});



router.get('/test', passport.authenticate('jwt', { session: false }), (req, res) => {
    console.log("estoy")
    User.findOne({ _id: req.user.id })
        .then(user => {
            res.json(user);
        })
        .catch(err => res.status(404).json({ error: "User does not exist!" }));
}
);


router.get('/auth/google', passport.authenticate('google', { scope: ['email', "profile"] }));




  router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
      console.log("que paso?")
    // User.findOne({ email: req.user.email })
    //     .then(user => {
    //         res.json(user);
    //     })
    //     .catch(err => res.status(404).json({ error: "User does not exist!" }));
    // res.redirect('/');
  });









// router.post('/login',
//     passport.authenticate('jwt', { session: false }),
//     function (req, res) {
//         if (req.user) {
//             res.send(req.user.profile);
//         } else {
//             return res.send('x')
//         }
//     }
// );

// router.post('/login',
//     passport.authenticate(('local'),
//         function (req, res) {
//             if(req.user){
//                 console.log("entre")
//                 return res.json(req.user);
//             } else {
//                 return res.send('x')
//             }
//         } 
//     ))



module.exports = router;