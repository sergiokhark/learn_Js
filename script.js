let arr = ['a', 'b', 'a', 'a', 'b', 'c', 'b', 'c'];
let obj = {};
for (let elem of arr) {
    if (obj[elem] === undefined) {
        obj[elem] = 1;
    } else {
        obj[elem]++;
    }
}
console.log(obj);