'use strict';

var JOURNAL = require('./data.js');
var phis = {};

const phiCoefficient = table => (table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));

const hasEvent = entry => event => entry.events.find(e =>  e === event);

const tableFor = event => {
    var table = [0, 0, 0, 0];
    for (var i = 0; i < JOURNAL.length; i++) {
        var entry = JOURNAL[i], index = 0;
        if (hasEvent(entry)(event)) {
            index += 1;
        }
        if (entry.squirrel) {
            index += 2;
        }
        table[index] += 1;
    }
    return table;
};

const storePhi = (phi, event) => {
    phis[event] = phi;
};

const gatherCorrelations = JOURNAL => {
    for (var entry = 0; entry < JOURNAL.length; entry++) {
        var events = JOURNAL[entry].events;
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            if (! (event in phis)) {
                storePhi(phiCoefficient(tableFor(event)), event);
            }
        }
    }
};

gatherCorrelations(JOURNAL);

for (var event in phis) {
    var correlation = phis[event];
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ': ' + phis[event]);
    }
}

for (var i = 0; i < JOURNAL.length; i++) {
    var entry = JOURNAL[i];
    if (hasEvent(entry)('peanuts') && !hasEvent(entry)('brushed teeth')) {
        entry.events.push('peanut teeth');
    }
}

console.log('peanut teeth: ', phiCoefficient(tableFor('peanut teeth')));