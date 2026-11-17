function square(n){
    return n * n;
}
function sumOfSomething(a, b, fn){
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}

const ans = sumOfSomething(3, 3, square)
console.log(ans)