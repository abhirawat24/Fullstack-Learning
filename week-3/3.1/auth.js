const express = require(express);
const app = express();

app.get("/health-check-up", function(req, res){
    // do health check here
    const kidneyID = req.query.kidneyID;
    const username = req.headers.username;
    const password = req.headers.password;

   //authentication
    if (username != "abhishek" || password != "pass"){
        res.status(403).json({
            msg: "User dosen't exist",
        });
        return;
    }

    //validation
    if (kidneyID != 1 && kidneyID != 2){
        res.json(411).json({
            msg: "wrong inputs",
        })
        return;
    }
    res.send("Your heart is healthhy");
});