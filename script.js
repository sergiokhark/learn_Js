function getTotal(arr) {
    let total = 0;
    for (let elem of arr) {
        total += elem ** 2;
    }
    return total;
}

let arr1 = [1, 2, 3];
let arr2 = [3, 5, 1];

console.log(getTotal(arr1), getTotal(arr2));