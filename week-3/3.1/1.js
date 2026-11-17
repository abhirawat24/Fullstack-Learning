const express = require ("express");
const z = require ("zod");
const app = express();
app.get("/health-checkup", function(req, res){
    const kidneyID = req.query.kidneyID;
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "abhishek" && password != "1234"){
        res.status(403).json({
            msg: "User dosen't exist",
        });
        return;
    }
    if (kidneyID != 1 || kidneyID != 2){
        res.sendStatus(411).json({
            msg: "wrong inputs",
        });
    }
    res.send("Your heart is healthy");
});

app.listen(3000);