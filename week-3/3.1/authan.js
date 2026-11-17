const express = require("express");

const app = express();

app.get("/health-checkup", function(req, res){
    const kidneyId = req.query.kidneyId;
    const uaername = req.headers.username;
    const password = req.headers.password;
    
    if (username != "abhishek" || password != "abcd"){
        res.status(403).json({
            msg: "User dosen't exist",
        });
        return;
    }

    if(kidneyId != 1 || kidneyId != 2){
        res.status(411).json({
            msg: "wrong inputs",
        });
        return;
    }

    res.send("Your heart is healthy");
});

app.put("/replace-kidney", function (req, res){

    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "abhishek" || password != "abcd"){
        res.status(403).json({
            msg: "User dosen't exist",
        });
        return;
    }

    if (kidneyId != 1 || kidneyId != 2){
        res.status(411).json({
            msg: "wrong inputs",
        });
        return;
    }

    res.send("Your heart is healthy")
})

//this code dosent follow the DRY (don't repeat yourself) principle of coding.
//we dont repeat the logic again and again we make a function at the top and whenever we need it we do a function call.