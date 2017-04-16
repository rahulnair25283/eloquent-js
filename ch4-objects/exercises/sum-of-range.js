"use strict";

function range(start, end, step) {
    step = step || 1;

    let arr = [];
    for(let i = start; i <= end; i += step) {
        arr.push(i);
    }
    return arr;
}

function sum(arr) {
    let sum = 0;
    arr.forEach(e => {
        sum += e;
    });
    return sum;
}

console.log(sum(range(1,10,2)));

