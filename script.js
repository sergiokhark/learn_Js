//Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени. 

let date1 = new Date();
let date2 = new Date(1986, 5, 24);
let diff = date1.getTime() - date2.getTime();
console.log(diff / (1000 * 60 * 60 * 24 * 30));

