let arr1 = [1, 2, [3, 4], 5, [6, 7]];
let arr2 = arr1.filter(elem => !Array.isArray(elem));
console.log(arr2);
