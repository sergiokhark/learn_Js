let arr = [[1, 2, 3], [4, 5], [6]];
let total = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        total += arr[i][j];
    }
}
console.log(total);