const express = require ("express");
const app = express();

let numberOfRequest = 0;

function calculateRequest(req, res, next){
    numberOfRequest++;
    console.log(numberOfRequest);
    next();
}
app.use(calculateRequest)

app.post("/health-checkup", function(req, res){

});

app.get("/health-checkup2", function(req, res){


});

app.listen(3000);