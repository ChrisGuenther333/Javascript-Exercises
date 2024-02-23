function fact(n) {
    //Create array
    const factArray = [];
    while (n >= 1) {
        factArray.push(n);
        n -= 1;
    }
    //Multiply numbers in array and display in console
    n = Number(factArray[0]);
    console.log(`I will be displaying the factorial of ${n}`);
    console.log(`I will be multiplying the following numbers together: ${factArray}`);

    for (let i=0; i < factArray.length-1; i++) {
        n *= Number(factArray[i+1]);
    }
    console.log(`The factorial is ${n}`);
}

fact(7);