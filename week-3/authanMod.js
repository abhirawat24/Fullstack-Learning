const express = require("express");
const app = express();

function usernameValidator(username, password){
    if(username != "abhishek" || password != "abcd"){
        return false;
    }
    return true; 
}
function kidneyValidator(kidneyId) {
    if (kidneyId != 1 || kidneyId != 2){
        return false;
    }
    return true;
}

app.get("/health-checkup", function (req, res){
    const kidneyId = req.query.kidneyId;
    if(!usernameValidator(req.query.username, req.query.password)){
        res.status(403).json({
            msg: "User dosen't exist",
        });
        return;
    }

    if (!kidneyValidator(kidneyId)) {
        res.status(411).json({
            msg: "Wrong input",
        });
        return;
    }
    res.send("Yout heart is healthy");
});

app.put("/replace-kidney", function(req, res){
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(!usernameValidator(req.query.username, req.query.password)){
        res.status(403).json({
            msg: "User dosen't exist",
        });
        return;
    }
    
    if(!kidneyValidator(kidneyId)){
        res.status(411).json({
            msg:"wrong inputs",
        });
        return;
    }
    res.send("Your heart is healthy");
});