"use strict";

var launchMissiles = function(value) {
    console.log('launch', value);
};

var safeMode = true;
if (safeMode) {
    launchMissiles = function(value) {
        console.log('screw it, do not launch', value);
    };
}

launchMissiles('heat-seakers');