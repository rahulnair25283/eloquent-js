const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2) {
        return true;
    } else {
        if (isNonNullObject(obj1) && isNonNullObject(obj2)) {
            for (let prop in obj1) {
                if (prop in obj2) {
                    if (!deepEqual(obj1[prop], obj2[prop])) {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    }
    return true;
}

const isNonNullObject = (obj) => {
    return obj !== null && typeof(obj) === 'object';
}

let obj1 = {
    name: 'rahul',
    age: 34,
    address: {
        houseNumber: '7',
        streetName: 'Dewar Terrace',
        suburb: 'Sherwood',
        postcode: 4075,
        state: 'Queensland'
    }
}

let obj2 = {
    address: {
        houseNumber: '7',
        streetName: 'Dewar Terrace',
        suburb: 'Sherwood',
        postcode: 4075,
        state: 'Queensland'
    },
    name: 'rahul',
    age: 34
}

console.log('obj1 is', deepEqual(obj1, obj2) ? 'equal' : 'not equal', 'to obj2!');