// [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

let arr = [];
for (let i = 0; i < 3; i++) {
    let subArr = [];
    for (let j = 1; j <= 5; j++) {
        subArr.push(j);
    }
    arr.push(subArr);
}
console.log(arr);
