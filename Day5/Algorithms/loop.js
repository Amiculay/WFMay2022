function printOdds(num) {
    for (var i = 0; i <= num; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds(20);

console.log("---");

function decrease(num) {
    for (var i = num; i > 0; i--) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}

decrease(100);

console.log("---");

function sequence(array) {
    for(let i of array) {
        console.log(i);
    }
}

sequence([4, 2.5, 1, -0.5, -2, -3.5]);

console.log("---");

function sigma(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(sigma(100));

console.log("---");


function factorial (num) {
    var product = 1;
    for (var i = num; i > 0; i--) {
        product *= i;
    }
    return product;
}

console.log(factorial(12));