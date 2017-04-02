"use strict";

// function countBs(text) {
//     var count = 0;
//     for (var i = 0; i < text.length; i++) {
//         if (text.charAt(i) === 'B') {
//             count ++;
//         }
//     }
//     return count;
// }

function countChar(char) {
    return function(text) {
        var count = 0;
        for (var i = 0; i < text.length; i++) {
            if (text.charAt(i) === char) {
            count ++;
            }
        }
        return count;                               
    };
}

var countBs = countChar('B');
var countRs = countChar('R');

console.log(countBs('BaRBeRsBoB'));
console.log(countRs('BaRBeRsBoB'));