function isLucky(num) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < num.length / 2; i++) {
        sum1 += Number(num[i]);
    }
    for (let j = num.length / 2; j < num.length; j++) {
        sum2 += Number(num[j]);
    }
    return sum1 == sum2;
}

function formStr(data, length) {
    let str = '';
    for (let i = 1; i <= length; i++) {
        str += data;
    }
    return str;
}

function normalizeNum(num, digitsAmount) {
    let str = String(num);
    
    return formStr('0', digitsAmount - str.length) + str;
}

function getLast(digitsAmount) {
    let str = '';
    for (let i = 0; i < digitsAmount; i++) {
        str += 9;
    }
    return str;
}

function getFirst(digitsAmount) {
    let str = '1';
    for (let i = 1; i <= digitsAmount / 2; i++) {
        str += 0;
    }
    str = Number(str) + 1;
    return str;
}

function getLuckyTicket(digitsAmount) {
    let result = [];
    let first = getFirst(digitsAmount);
    let last = getLast(digitsAmount);
    for (let i = first; i < last; i++) {
        let luckyTicket = normalizeNum(i, digitsAmount);
        if (isLucky(luckyTicket)) {
            result.push(luckyTicket);
        }
    }
    return result;
}

console.log(getLuckyTicket(6));