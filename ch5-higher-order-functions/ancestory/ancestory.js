var ANCESTORY_FILE = require('./data');

let ancestory = JSON.parse(ANCESTORY_FILE);
console.log(ancestory.length);

const filter = (arr, action) => {
    let passed = [];
    arr.forEach(e => {
        if(action(e)) {
            passed.push(e);
        }
    });
    return passed;
}

let passed = filter(ancestory, function(person) {
    return person.born > 1900 && person.born < 1925;
})

console.log(passed);

const map = (arr, transform) => {
    let mapped = [];
    arr.forEach(e => {
        mapped.push(transform(e));
    });
    return mapped;
}

var overNinety = filter(ancestory, function(person) {
    return person.died - person.born > 90;
})

var namesOfPersonOverNinety = map(overNinety, function(person) {
    return person.name;
});

console.log(namesOfPersonOverNinety);

let oldestAncestor = ancestory.reduce((min, current) => {
    if (current.born < min.born) {
        return current;
    }
    return min;
});

console.log(oldestAncestor);