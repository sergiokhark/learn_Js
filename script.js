let arr = ['a', 'b', 'c', 'd', 'e'];
let res = {};

for (let i = 0; i < arr.length; i++) {
    res[arr[i]] = i + 1;
}
console.log(res);