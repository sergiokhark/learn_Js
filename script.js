let summ = 0;
let arr = [-12, -5, 9, -15, 1, 4, -22];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        summ += arr[i];
    }
}
console.log(summ);