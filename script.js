function getDiff(...arrs) {
    let result = [];
    for (let i = 0; i < arrs.length; i++) {
        let arr0 = arrs.pop();
        for (let elem of arr0) {
            if (checkInArrs(elem, arrs)) {
                result.push(elem);
            }
        }
        arrs.unshift(arr0);
    }
    return result;
}

function checkInArrs(elem, arrs) {
    let flag = true;                // элемент не повторяется
    for (let arr of arrs) {
        for (let subEl of arr) {
            if (inArr(elem, arr)) {
                flag = false;
                break;
            }
        } 
    }
    return flag;
}

function inArr(elem, arr) {
    return arr.indexOf(elem) !== -1; // true если элемент есть в массиве
}



console.log(getDiff([1, 6, 2, 3, 5], [4, 1, 2, 3], [12, 7, 1, 2, 3]));
