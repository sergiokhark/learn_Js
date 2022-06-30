//Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.

let date1 = new Date(1988, 2, 1);
let date2 = new Date(2000, 0, 10);
let diff = date2.getTime() - date1.getTime();
console.log(diff);
console.log(diff / (1000 * 60 * 60 * 24));