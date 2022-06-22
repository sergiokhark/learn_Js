 //[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

let arr = [];
for (let i = 0, s = 1; i < 2; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i][j] = [];
        for (let k = 0; k < 2; k++, s++) {
            arr[i][j].push(s);
        }
    }
}
console.log(arr);
