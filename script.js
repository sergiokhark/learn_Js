let arr = [];
for (let i = 0, k = 2; i < 4; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++, k += 2) {
        arr[i].push(k);
    }
}
console.log(arr);
