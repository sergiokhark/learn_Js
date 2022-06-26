let obj = {
    sum: function getSumArr(arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += elem;
        }
        return sum;
    },
    sumSquare: function getSumSquare(arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += elem ** 2;
        }
        return sum;
    },
    sumCub: function getSumCub(arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += elem ** 3;
        }
        return sum;
    }
}

let array = [1, 2, 3];
console.log(obj['sum'](array));
console.log(obj['sumSquare'](array));
console.log(obj['sumCub'](array));