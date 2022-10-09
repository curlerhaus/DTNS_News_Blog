//dependencies
require("dotenv").config();
const express = require("express");
require("./models/signUpModels");
const User = require("./models/signUpModels");
const app = express();
const Post = require("./models/Post");
const cors = require("cors");
const path = require("path");

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_ACCESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("Hi, my DATABASE is connected!")
);

//middleware
app.use(express.json());
app.use(cors());

//signup routes
app.post("/signup", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

//login route
app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "No Data Found" });
    }
  }
});

// //GET ALL POSTS
// app.get("/", async (req, res) => {
//   const username = req.query.user;
//   const catName = req.query.cat;
//   try {
//     let posts;
//     if (username) {
//       posts = await Post.find({ username });
//     } else if (catName) {
//       posts = await Post.find({
//         categories: {
//           $in: [catName],
//         },
//       });
//     } else {
//       posts = await Post.find();
//     }
//     res.status(200).json(posts);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.use((req, res, next) => {
//     res.status(404).send('page not found')
// })

//listen
app.listen(process.env.PORT);
