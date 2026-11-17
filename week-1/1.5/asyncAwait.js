function abhiAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi!")
        }, 3000)
    });
    return p;
}

async function main(){
    let value = await abhiAsyncFunction();
    console.log("hi1!");
}

main();
console.log("after main");