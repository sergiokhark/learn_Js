function inArray(elem, arr) {
    return arr.indexOf(elem) != -1
}
function getInt(arr1, arr2) {
    let result = [];
    for (let elem of arr1) {
        if (inArray(elem, arr2)) {
            result.push(elem);
        }
    }
    return result;
}
console.log(getInt([1, 8, 9, 11, 12, 18, 44, 5], [13, 15, 11, 5, 1, 88, 18]));