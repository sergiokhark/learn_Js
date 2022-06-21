let arr = ['a', 'b', 'c', 'd', 'e'];
let res = {};

for (let i = 0; i < arr.length; i++) {
    res[i + 1] = arr[i];
}
console.log(res);