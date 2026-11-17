function myOwnSetTimeout(fn, duration){
    setTimeout(fn, duration);
}

myOwnSetTimeout(function(){
    console.log("My Own SetTimeout() function")
}, 2000)
