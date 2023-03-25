const express = require("express");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;

//  import routes

const userRoutes = require("./routes/userRoutes.js");

//  mongodb database
const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.jgh7jg6.mongodb.net/E_LEARNING?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    serverSelectionTimeoutMS: 5000,
  })
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("Server is running...!");
});
app.use("/user", userRoutes);


app.listen(port, () => {
  console.log("Server running port : ", port);
});
