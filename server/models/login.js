const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
mongoose.connect("mongodb://localhost:27017/userDB");
const userSchema = new mongoose.Schema({
   email: String,
   password: String,
   googleId: String
});
const User = new mongoose.model("User", userSchema);
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "https://localhost:3000/auth/google/home"
  },
  (accessToken, refreshToken, profile, cb)=> {
User.findOne({
            'googleId': profile.id 
        }, function(err, user) {
            if (err) {
                return done(err);
            }

            if (!user) {
                user = new User({
                    email: profile.emails[0].value,
                    googleId : profile.id,
                });
                user.save(function(err) {
                    if (err) console.log(err);
                    return done(err, user);
                });
            } else {
                return done(err, user);
            }
        });
     }
));
app.get('/auth/google', passport.authenticate('google', {
       scope: ["profile"]
  }));
app.get('/auth/google/home',passport.authenticate('google', {
       failureRedirect: '/'
  }),
  function (req, res) {
       // Successful authentication
       res.send("You are logged in !");
});

app.get("/",(req,res)=>{
   res.sendFile(__dirname+"/pages/index.html");
})
app.listen(process.env.PORT || 3000);