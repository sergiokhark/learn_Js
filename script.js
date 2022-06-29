function getDiff(...arrs) {
    let result = [];
    for (let arr of arrs) {
        for (let elem of arr) {
            elem = arr.shift();
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
            return false;        // false если элемент есть в массиве
        }
    }
    return true;
}

function inArr(elem, arr) {
    return arr.indexOf(elem) !== -1; // true если элемент есть в массиве
}


console.log(getDiff([1, 2, 3], [2, 3, 7], [4, 3]));
