let num = 45;
if (num < 10 || num > 99) {
    alert('Число меньше 10 или больше 99');
} else {
    let first_digit = parseInt(num / 10);
    let sec_digit = num % 10;
    let sum_digit = first_digit + sec_digit;
    if (sum_digit <= 9) {
        alert('Сумма цифр однозначна');
    } else {
        alert('Сумма цифр двузначна');
    }
}