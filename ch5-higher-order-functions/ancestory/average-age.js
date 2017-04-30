var ANCESTORY_FILE = require('./data');

let ancestory = JSON.parse(ANCESTORY_FILE);
console.log(`Total ancestors ${ancestory.length}`);

const average = (arr) => {
    return arr.reduce((a, b) => a + b) / arr.length;
}

const males = (person) => person.sex === "m";
const females = (person) => person.sex === "f";
const age = (person) => person.died - person.born;

let avgAgeOfMales = average(ancestory.filter(males).map(age));
console.log(`The average age of males in the ancestory is ${avgAgeOfMales}`);

let avgAgeOfFemales = average(ancestory.filter(females).map(age));
console.log(`The average age of females in the ancestory is ${avgAgeOfFemales}`);



