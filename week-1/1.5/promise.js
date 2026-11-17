const fs = require('fs');

function readFile(){
    console.log("inside readfile");
    return new Promise(function(resolve){
        console.log("inside promise")
        fs.readFile("abc.txt", "utf-8", function(err, data){
            console.log("before resolve")
            resolve(data);
        });
    })
}

function onDone(data){
    console.log(data);
}
var a = readFile();
console.log(a);
a.then(onDone);