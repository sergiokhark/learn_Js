function getDigitsSum(num) {
    let total = 0;
    num = String(num);
    for (let i = 0; i < num.length; i++) {
        total += Number(num[i]);
    }
    return total;  
}
console.log(getDigitsSum(12345));
console.log(getDigitsSum(123450589));