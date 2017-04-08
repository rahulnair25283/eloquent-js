'use strict';

var JOURNAL = require('./data.js');

var journal = [];

const addEntry = (events, didITurnIntoASquirrel) => {
    journal.push({
        events: events,
        squirrel: didITurnIntoASquirrel
    });
};

const phiCoefficient = table => (table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
console.log(phiCoefficient([76, 9, 4, 1]));

const tableFor = event => {
    var table = [0, 0, 0, 0];
    for (var i =0; i < JOURNAL.length; i++) {
        var entry = JOURNAL[i], index = 0;
        if (hasEvent(event, entry)) {
            index += 1;
        }
        if (entry.squirrel) {
            index += 2;
        }
        table[index] += 1;
    }
    return table;
};

const hasEvent = (event, entry) => {
    return entry.events.indexOf(event) !== -1;
};

console.log(tableFor('pizza'));

addEntry(['work', 'touched tree', 'pizza', 'running', 'tv'], false);
addEntry(['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'], false);
addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true);