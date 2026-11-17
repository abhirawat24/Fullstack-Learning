function square(a) {
    return a * a; 
}

function synOfSomething(a, b, fn) {
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}

sumOfSomething(a, b, square)