function isEven(arr) {
    for (let elem of arr) {
        if (elem % 2 != 0) {
            return false;
        }
    } return true;
}
console.log(isEven([2, 4, 6, 8, 12]));
console.log(isEven([1, 4, 7, 11,]));