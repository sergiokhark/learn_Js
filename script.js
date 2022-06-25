function getDiff(arr1, arr2) {
    
    let firstDiff = getFirstDiff(arr1, arr2);
    let secondDiff = getFirstDiff(arr2, arr1);

    return [].concat(firstDiff, secondDiff);
}

function inArray(elem, arr) {
    return arr.indexOf(elem) !== -1;
}

function getFirstDiff(arr1, arr2) {
    let result = [];
    for (let elem of arr1) {
        if (!inArray(elem, arr2)) {
            result.push(elem);
        }
    }
    return result;
}
console.log(getDiff([1, 2, 3], [2, 3, 4, 5]));