const express = require("express");

const app = express();

app.get("/health-chekup", function(req, res, next){
    console.log("hi from req1")
    next();

    //  This next function is actually a feature of express which lets us chain through middlewares

}, function(req, res){
    console.log("hi from req2")
});

app.listen(3000);