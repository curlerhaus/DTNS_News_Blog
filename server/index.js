//dependencies
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");

require("./models/signUpModels");
const User = require("./models/signUpModels");
const app = express();
const Post = require("./models/Post");
const cors = require("cors");
const path = require("path");
const axios = require("axios");
const mongoose = require("mongoose");
const db = require("./models");
const dataModel = require("./models/getPosts");

// // const { response } = require('express');
// mongoose.connect(process.env.DATABASE_ACCESS, () =>
//   console.log("Hi, my DATABASE is connected!")
// );
mongoose.connect(
  process.env.DATABASE_ACCESS,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log(`Hi, my DATABASE is connected!`);
  }
);

//middleware
app.use(express.json());
app.use(cors());

//Fetching Data from mongo
// axios
//   .get(process.env.DATABASE_ACCESS)
//   .then(function (response) {
//     onSuccess(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

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

//CREATE NEW POST
app.post("/createpost", async (req, res) => {
  let post = new Post(req.body);
  let result = await post.save();
  result = result.toObject();
  res.send(result);
});

//Get posts
// app.get("/posts", async (req, res, next) => {
//   try {
//     const postData = await Posts.find();

//     return res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "server error" });
//   }
// });

// app.get("/posts", async (req, res) => {
//   const getPosts = await db
//     .collection("posts")
//     .find()
//     .toArray()
//     .then((getPosts) => {
//       console.log("These are the posts: ", getPosts);
//     });
// });

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
