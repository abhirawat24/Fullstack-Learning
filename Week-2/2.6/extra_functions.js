const val = [1,2,3,4,5]
// const updatedVal = []

// for(i=0; i<val.length; i++) {
//     updatedVal.push(val[i] * 2)
// }
// console.log(updatedVal);

function transform(i){
    return i*2;
}
const ans = input.map(transform);
console.log(ans);