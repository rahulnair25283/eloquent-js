"use strict";

function power(base, exponent) {
    exponent = exponent === undefined ? 2 : exponent;
    var result = 1;
    for (var count = 0; count < exponent; count++) {
        result *= base;
    }

    return result;
}

console.log(power(4));
console.log(power(4, 3));