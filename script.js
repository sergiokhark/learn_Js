let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let sum = 0;
for (let key in obj) {
    sum += obj[key]
}
console.log(sum);