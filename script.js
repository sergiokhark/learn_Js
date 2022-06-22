let arr = [21, 9, 33, -8, 5, -18, 1, -1];
let flag = false;
for (let elem of arr) {
    if (elem == 5) {
        flag = true;
        break
    }
}
console.log(flag);
