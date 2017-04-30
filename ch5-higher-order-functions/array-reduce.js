"use strict";

const reduce = (arr, action, start) => {
    let current = start;
    for (let item of arr) {
        current = action(current, item);
    }
    return current;
};

let val = reduce([1,2,3,4,5], (a, b) => a + b, 0);
console.log(val);

