'use strict';

let aList = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

const arrayToList = (arr) => {
    let node = createNode(arr.shift());
    if (arr.length !== 0) {
        node.rest = arrayToList(arr);
    }
    return node;

}

const createNode = (e) => {
    return {
        value: e,
        rest: null
    }
}

let list = arrayToList([1, 2, 3]);
console.log(list);

const prepend = (value, list) => {
    return {
        value: value,
        rest: list
    }
}

console.log(prepend(0, list));

function nth (list, n) {
    if (!list) {
        return undefined;
    } else if (n === 0) {
        return list.value
    } else {
        return nth(list.rest, n - 1);
    }
}

console.log(nth(list, 2));

const listToArray = (list) => {
    let arr = [];
    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

console.log(listToArray(list));
