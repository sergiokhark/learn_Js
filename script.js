function getDivisors(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}

function inArray(elem, arr) {
    return arr.indexOf(elem) !== -1;
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

function getGreatestCommonDivisor(num1, num2) {
    let intArr = getInt(getDivisors(num1), getDivisors(num2));
    let NOD = Math.max.apply(null, intArr);
    return NOD;
}

console.log(getGreatestCommonDivisor(180, 150));