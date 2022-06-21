let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
let res = {};
for (let key in obj) {
    res[obj[key]] = key;
}
console.log(res);