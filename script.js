let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};
for (let i = 0; i < arr1.length; i++) {
    obj[arr2[i]] = arr1[i];
}
console.log(obj);