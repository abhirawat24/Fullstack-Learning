setTimeout(() => {
    console.log("First timeout");
    setTimeout(() => {
      console.log("Second timeout");
      setTimeout(() => {
        console.log("Third timeout");
      }, 1000);
    }, 1000);
  }, 4000);