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

console.log(passed.length);

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