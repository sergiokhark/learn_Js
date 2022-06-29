function getDiff(...arrs) {
    let result = [];
    for (let arr of arrs) {
        for (let elem of arr) {
            if (inArrs(elem, arrs)) {
                result.push(elem);
            }
        }
    }
    return result;
}

function inArrs(elem, arrs) {
    for (let arr of arrs) {
        if (inArr(elem, arr)) {
            return true;        // true если элемента нет в массиве
        } else {
            return false;
        }
    }
}

function inArr(elem, arr) {
    return arr.indexOf(elem) === -1; // true если элемента нет в массиве
}


console.log(getDiff([2, 3, 11], [2, 3, 7], [4, 3, 21])); // [7, 4, 21]
console.log(getDiff([18, 3, 11], [2, 3, 7], [4, 3, 21])); // [2, 7, 4, 21]
console.log(getDiff([18, 3, 11], [7, 3, 7], [4, 3, 21])); // [7, 7, 4, 21]