let arr = [[1, 2, 3], [4, 5], [6]];
let total = 0;
for (let subArr of arr) {
    for (let elem of subArr) {
        total += elem;
    }
}
console.log(total);