"use strict";

var x = 'outside';

function f1() {
    var x = 'inside f1';
}

f1();
console.log(x);

function f2() {
    x = 'inside f2';
}

f2();
console.log(x);