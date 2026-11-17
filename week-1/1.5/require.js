const fs = require("fs");

fs.readFile("abc.txt", "utf-8", function(err, data){
    console.log(data);
})

console.log("hi there");

let a=0;
for (let i = 0; i<10000000; i++){
    a= a++;
}

console.log("hi there 2");