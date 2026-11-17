const arr = [23, 234, 534, 576, 34, 6, 425, 468, 35357, 88]

const arrLength = arr.length;

let bigstNum = 0;

for(i=0; i <= arrLength; i++){
    
    if (bigstNum < arr[i]){
        bigstNum = arr[i];
    }
}

console.log(bigstNum)