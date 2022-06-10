const express = require("express");
const app = express();
const request = require("request");
const mongoose = require('mongoose');
const body_parser= require("body-parser");
const config = require("./config");
const mongodb = require("mongodb")


const moviesRoute = require("./Routes/movies.js");
const mainRoute=require("./Routes/main.js");

const movie= require("./models/movie");


app.set("view engine", "ejs");
app.use(express.static("Public"));
app.use(body_parser.urlencoded({extended:true}));


//Db connection 
mongoose.connect(config.database.connection);


//Routes
app.use(moviesRoute);
app.use(mainRoute);



app.listen(5000, () => {
  console.log("The server is up");
});
