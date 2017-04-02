"use strict";

// 1
function wrapValue(n) {
    var localVariable = n;
    return function() {
        return localVariable * 2;
    };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);

console.log(wrap1());
console.log(wrap2());

// 2
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

var twice = multiplier(2);
var thrice = multiplier(3);

console.log(twice(5));
console.log(thrice(5));

// 3
function say(greeting) {
    return function(name) {
        return greeting + " " + name + "!";
    };
}

var greet = say("Hello");
console.log(greet("Rahul"));

greet = say("Hi Cutie");
console.log(greet("Aadee"));