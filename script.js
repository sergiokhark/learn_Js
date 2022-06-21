let obj = { 1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс' };
let res = {};
for (let key in obj) {
    if (key % 2 != 0) {
        res[key] = obj[key];
    }
}
console.log(res);