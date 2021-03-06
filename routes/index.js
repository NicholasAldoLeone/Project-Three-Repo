const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

const db = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config");
const passport = require("passport");
const requireSignin = passport.authenticate("local", { session: false });
const requireAuth = passport.authenticate("jwt", { session: false });

// API Routes
router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

function tokenizer(user) {
    return jwt.sign(
      {
        sub: user.id
      },
      config.secret
    );
  }
  
  router.get("/protected", requireAuth, function(req, res){
    res.send("You have been protected!");
  });
  
  router.post("/signin", requireSignin, function (req, res) {
    res.json({ token: tokenizer(req.user), email: req.user.email});
  });
  
  router.post("/signup", function (req, res) {
    const { email, password } = req.body;
  console.log(email)
    if (!email || !password) {
      res.status(422).send({ error: "You must provide an email and password" });
    }
  
    db.User.findOne({ email })
      .then(dbuser => {
        // if the user exists return an error
        if (dbuser) {
          return res.status(422).send({ error: "Email already in use" });
        }
        //create new user object
        const user = new db.User({ email, password });
        // save the user
        user.save().then(user => {
          // respond with the success if the user existed
          res.json({ token: tokenizer(user) });
        });
      })
      .catch(err => {
        return next(err);
      });
  });
  router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})
  
  module.exports = router;
  
