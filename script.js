let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i][j] = [];
        for (let k = 0; k < 5; k++) {
            arr[i][j][k] = k + 1;
        }
    }
}
console.log(arr);