const express = require ("express");
const app = express();

const users = [{
name: "Abhi",
    kidneys: [{
        healthy: false,
     }]
}];


app.get("/", function(req,res){
    //write logic
    const johnKidneys = users[0], kidneys;
    const numberOfKidneys = johnKidneys.length;
    //filter
    let numberOfHealthyKidneys = 0; 
    for(let i=0; i<=kidneys.length; i++){
        if (johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        johnKidneys,
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
    console.log(johnKidneys)
})

app.listen(3000);