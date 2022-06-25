function getOwnDivisors(num) {
    let arr = [];
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}

function getSum(arr) {
    let sum = 0;
    for (let elem of arr) {
        sum += elem;
    }
    return sum;
}

function getPerfect(start, stop) {
    let result = [];
    for (let i = start; i < stop; i++) {
        if (getSum(getOwnDivisors(i)) == i) {
            result.push(i);
        }
            
    }
    return result;
}
console.log(getPerfect(1, 1000));
