//Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.

let date = '2022-06-30';
let arr = date.split('-');

console.log(arr[2] + '.' + arr[1] + '.' + arr[0]);
console.log(date.split('-').reverse().join('.'));