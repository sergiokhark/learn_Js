function isEvenNum(num) {
    num = String(num);
    for (let i = 0; i < num.length; i++) {
        if (Number(num[i]) % 2 == 0) {
            return false;
        }
    } return true;
}
console.log(isEvenNum(248866466));
console.log(isEvenNum(777333113355));