function numReverse(num) {
    num = String(num).split('').reverse().join('');
    return num;
}
let nums = [123, 456, 789, 489, 578, 163, 12];
let arr = [];
for (let elem of nums) {
    arr.push(Number(numReverse(elem)));
} 
console.log(arr);