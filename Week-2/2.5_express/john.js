const express = require("express");
const app = express();

const user = [{
    name : "John",
    kidneys: [{
        healthy: false
    }]
}]

app.get("/", function(req, res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = kidneys.length;
    //
    let numberOfHealthyKidneys = 0;
    for (let i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        johnKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.listen(3000); 