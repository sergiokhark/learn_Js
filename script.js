function func(...arr) {
    let sum = 0;
    for (let elem of arr) {
        sum += elem;
    }
    let res = sum / arr.length;
    return res;
}

console.log(func(1, 2, 3, 4, 5, 6));