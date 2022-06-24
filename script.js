function getDigitSum(num) {
    let sum = 0;
    let digits = String(num).split('');
    for (let digit of digits) {
        sum += Number(digit);
    }
    return sum;
}
let num1 = 234;
let num2 = 531;
if (getDigitSum(num1) == getDigitSum(num2)) {
    alert('суммы цифр совпадают');
} else {
    alert('суммы цифр не совпадают');
}