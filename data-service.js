//create the monngoose for the data-structures
var mongoose = require("mongoose");
var chalk = require("chalk");
var fs = require("fs");
var path = require("path");


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
    
}

module.exports.UserTask =() => {
    
}