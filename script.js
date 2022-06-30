//'12:59:59 31.12.2014'

function zeroNum(num) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}


let date = new Date();
console.log(zeroNum(date.getHours()) + ':' + zeroNum(date.getMinutes()) + ':' + zeroNum(date.getSeconds()) +
    ' ' + zeroNum(date.getDate()) + '.' + zeroNum(date.getMonth() + 1) + '.' + date.getFullYear());