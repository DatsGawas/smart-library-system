const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const User = require("../models/user");

const Books = require("../models/book");

const app = express();

//  connect to mongodb
// mongoose
//   .connect(
//     "mongodb+srv://datta:oISgsDUerE57FowZ@d-app-ngv74.mongodb.net/smart-library?retryWrites=true&w=majority"
//   )
//   .then(() => {
//     console.log("connected to database");
//   })
//   .catch(() => {
//     console.log("connection failed");
//   });

mongoose
  .connect("mongodb://localhost:27017/smart-library")
  .then(() => {
    console.log("connected to database");
  })
  .catch(() => {
    console.log("connection failed");
  });
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,DELETE,PATCH,PUT,OPTIONS"
  );
  next();
});

app.post("/api/registerUser", (req, res, next) => {
  debugger;
  console.log(req.body);

  const user = new User({
    emailId: req.body._emailId,
    firstName: req.body._firstName,
    lastName: req.body._lastName,
    phoneNo: req.body._phoneNo,
    address: req.body._address,
    password: req.body._password,
    conformPassword: req.body._conformPassword,
    gender: req.body._gender
  });
  user.save();
  console.log(user);
  res.status(201).json({ message: "user added successfully" });
});

app.post("/api/add-book", (req, res, next) => {
  const book = new Books({
    title: req.body.title,
    subtitle: req.body.subtitle,
    author: req.body.author,
    published: req.body.published,
    publisher: req.body.publisher,
    description: req.body.description,
    pages: req.body.pages,
    website: req.body.website
  });
  book.save();
  console.log(book);
  res.status(201).json({ message: "book added successfully" });
});

app.get("/api/getBooks", (req, res, next) => {
  Books.find().then(documents => {
    return res.status(200).json({
      message: "data fetch successfully",
      data: documents
    });
  });
});

app.delete("/api/deleteBookById/:id", (req, res, next) => {
  console.log(req.params.id);
  Books.deleteOne({ _id: req.params.id }).then(result => {
    res.status(200).json({
      message: "Book deleted"
    });
  });
});

module.exports = app;
