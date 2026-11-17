const currentDate = new Date();
console.log(currentDate.getTime());

function calculateSum(){
    const a=0;
    for(let i=0;i<100000;i++){
        a=a+1
    }
    return a;
}