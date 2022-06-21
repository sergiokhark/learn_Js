let arr = [2, -1, -4, 5, 6, 8, 9, 11, -88];
let res = [];
for (let elem of arr) {
    if (elem > 0) {
        res.push(elem);
    }
}
console.log(res);