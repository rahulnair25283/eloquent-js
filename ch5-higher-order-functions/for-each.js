const forEach = (arr, action) => {
    for (let i = 0; i < arr.length; i++) {
        action(arr[i]);
    }
}

forEach([1,2,3,4], console.log);

let sum = 0;
forEach([1,2,3,4], function(e) {
    sum += e;
})

console.log(sum);