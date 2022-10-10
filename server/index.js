//Meng Index file
//dependencies
require("dotenv").config();
const express = require("express");
require("./models/signUpModels");
const User = require("./models/signUpModels"); //schema data
const app = express();
const Post = require("./models/Post");

const cors = require("cors");

const mongoose = require("mongoose");

// const { response } = require('express');
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
      res.send({ result: "No data found!" });
    }
  } else {
    res.send({ result: "No data found!" });
  }
});

//CREATE NEW POST
app.post("/createpost", async (req, res) => {
  let post = new Post(req.body);
  let result = await post.save();
  result = result.toObject();
  res.send(result);
});

// app.use((req, res, next) => {
//     res.status(404).send('page not found')
// })

//listen
app.listen(process.env.PORT);

//Marcella old index.js
// require("dotenv").config();
// const express = require("express");
// const app = express();
// const methodOverride = require("method-override");
// const mongoose = require("mongoose");
// const PORT = process.env.PORT;

// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));

// mongoose.connect(
//   process.env.MONGO_URI,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log("connected to mongo: ", process.env.MONGO_URI);
//   }
// );

// app.get("/login", (req, res) => res.render("login"));

// app.get("/", (req, res) => {
//   res.render("home");
// });

// app.get("*", (req, res) => {
//   res.render("error404");
// });

// app.listen(PORT, () => {
//   console.log("listening at port", PORT);
// });
