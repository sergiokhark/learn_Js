function isArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            return true;
        }
    } return false;
}
console.log(isArray([2, 6, 8, 8, 6, 0, 1]));
console.log(isArray([2, 6, 8, 7, 6, 0, 1]));
console.log(isArray([2, 6, 'a', 'b', 'b', 0, 1]));