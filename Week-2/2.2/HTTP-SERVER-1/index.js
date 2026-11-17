const express = require ("express");
const port = 3000;
const app = express();

app.get('/', function(req,res){
    
    let a = 0;
    console.log("The Request is here");
    for (i=0; i<1000; i=i++){
        a=a+1;
    }
    res.send('Hello World')
})
app.listen(port)