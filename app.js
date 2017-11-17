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

app.set("view engine", ".hbs");

app.engine(".hbs", exphbs({
    extname: ".hbs",
    helpers: {
        equal:(lvalue,rvalue,option) =>{
            if(arguments.length <= 3) throw new Error ("Express Handlebars accepts less than three paras");
            if(lvalue != rvalue){return HTMLOptionsCollection.inverse(this);}
            else {return HTMLOptionsCollection.fn(this)};
        }
        }
    }));

app.listen(HTTP_PORT,function onHttpStart(){
    console.log(chalk.green("------Nodverve is statrt to fly-------"));
    console.log(chalk.green("----------------SeatBelt---------------"));
    return new Promise((res,req)=>{
        //call the data_service init
        data_service.initialize().then(() =>{
            console.log(chalk.blue("------Data_service is on-------"));
        }).catch((err) =>{
            console.log(chalk.red("!!!!!!!" + err));
        });
        });
    });
