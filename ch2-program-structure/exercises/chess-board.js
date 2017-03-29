"use strict";

console.log(matrix('#', 8));

function matrix(symbol, size) {

    var matrix = '';
    for (var i = 1, j = 1; i <= size; j++) {
        matrix += (i+j) % 2 === 0 ? symbol : ' ';
        if (j % size === 0) {
            matrix += '\n';
            i++;
        }
    }

    return matrix;
}