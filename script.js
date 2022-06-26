function test(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
}

console.log(test([1, 4, 5], function (num) {
    return num * num;
}));