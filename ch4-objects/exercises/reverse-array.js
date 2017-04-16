'use strict';

function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i > -1; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reverseArray(arr));
console.log(arr);

function reverseArrayInOrder(arr) {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr.pop();
        for (let j = arr.length; j > i; j--) {
            arr[j] = arr[j - 1];
        }
        arr[i] = temp;
    }
    return arr;
}

console.log(reverseArrayInOrder(arr));
console.log(arr);