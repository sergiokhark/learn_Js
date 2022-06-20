let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;
for (let elem of arr) {
    if (elem == 'c') {
        flag = true;
    }
}
if (flag === true) {
    console.log('Yes');
} else {
    console.log('No');
}