'use strict';

var JOURNAL = require('./data.js');
var phis = {};

const phiCoefficient = table => (table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));

const hasEvent = entry => event => entry.events.find(e =>  e === event);

const tableFor = event => {
    var table = [0, 0, 0, 0];
    JOURNAL.forEach(entry => {
        let index = 0;
        if (hasEvent(entry)(event)) {
            index += 1;
        }
        if (entry.squirrel) {
            index += 2;
        }
        table[index] += 1;
    });
    return table;
};

const storePhi = (phi, event) => {
    phis[event] = phi;
};

const gatherCorrelations = JOURNAL => {
    JOURNAL.forEach(entry => {
        entry.events.forEach(event => {
            if (! (event in phis)) {
                storePhi(phiCoefficient(tableFor(event)), event);
            }
        });
    });
};

gatherCorrelations(JOURNAL);

for (var event in phis) {
    var correlation = phis[event];
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ': ' + phis[event]);
    }
}

JOURNAL.forEach(entry => {
    if (hasEvent(entry)('peanuts') && !hasEvent(entry)('brushed teeth')) {
        entry.events.push('peanut teeth');
    }
});

console.log('peanut teeth: ', phiCoefficient(tableFor('peanut teeth')));