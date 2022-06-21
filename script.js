let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let res = {};
for (let i = 0; i < arr1.length; i++) {
    res[arr1[i]] = arr2[i]; 
}
console.log(res);