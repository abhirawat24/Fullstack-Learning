function promisifiedSetTimeout(duration) {
    const p = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, duration);
    });
    return p;
}

const ans = promisifiedSetTimeout(3000);
ans.then(function() {
    console.log("Timeout is done");
});
