function getDivisors(num) {
    let arr = [];
    for (let i = 2; i <= num; i++) {
        if (num % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(getDivisors(12));

function getSimpleDivisors(num) {
    let result = [];
    let arrDiv = getDivisors(num);
    for (let i = 0; i < arrDiv.length; i++) {
        let flag = true;
        for (let j = 2; j < arrDiv[i]; j++) {
            if (arrDiv[i] % j == 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            result.push(arrDiv[i]);
        }
    }
    return result;
}
console.log(getSimpleDivisors(12));