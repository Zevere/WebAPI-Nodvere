//create the monngoose for the data-structures
var mongoose = require("mongoose");
var chalk = require("chalk");
var fs = require("fs");
var path = require("path");

var Schema = mongoose.Schema;

const User = new Schema({
    id : String,
    first_name: String,
    last_name: String,
    joined_at: date
})

module.exports.initialize =() => {
    return new((promise,reject) => {
        try{
            //read url json?
            //readfile json?
        }catch(ex){
            reject("can't load");
        }
        resolve("Good, data loaded");
    });
}

module.exports.UserId =() => {
    //resolve 
}

module.exports.UserTask =() => {
    //resolve
}

module.exports.addUser =() => {
       
}
