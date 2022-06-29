function getInt(...arrs) {
    let result = [];
    let arr0 = arrs.shift();
    for (let elem of arr0) {
        if (inArrays(elem, arrs)) {
            result.push(elem);
        }
    }
    return result;
}

function inArrays(elem, arrs) {
    for (let arr of arrs) {
        if (!inArray(elem, arr)) {
            return false;
        } else {
            return true;
        }
    }
}

function inArray(elem, arr) {
    return arr.indexOf(elem) !== -1;
}

console.log(getInt([1, 2, 3], [2, 3, 4], [4, 3, 2]));