var express = require("express");
var path = require("path");
var bodyParser = require("body-Parser");
const chalk = require("chalk");
var app = express();
var request = require("request");
var data_service = require("./data_service.js");
var exphbs = require("express-handlebars");

//component for the localhost
var HTTP_PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));
app.use(express.static('public'));
app.use(express.static('node_modules'));

function onHttpStart(){
    console.log("Express http server sets and listening on "+HTTP_PORT);
}

app.set("")
