function getLuckyTicket() {
    let result = [];
    for (let i = 1001; i < 999999; i++) {
        if (isLucky(i)) {
            result.push(normalizeNum(i));
        } 
    }
    return result;
}

function isLucky(num) {
    let str = normalizeNum(num);
    let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
    let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
    return sum1 == sum2;
}

function normalizeNum(num) {
    let str = String(num);
    if (str.length == 5) {
        str = '0' + str;
    }
    if (str.length == 4) {
        str = '00' + str;
    }
    return str;
}

console.log(getLuckyTicket());