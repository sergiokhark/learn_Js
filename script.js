let arr = [1, 5, 6, 7, 0, -1, 18, 22];
let sum = 0;
for (let elem of arr) {
    if (elem >= 0) {
        sum += elem;
    } else {
        break;
    } 
}
console.log(sum);