let num = 127226;
let str = String(num);
let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
if (sum1 == sum2) {
    alert('Yes');
} else {
    alert('No');
}