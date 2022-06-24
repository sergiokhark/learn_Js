let arr = [12, 19, 28, 13, 14, 345];
let result = [];

// Функция создает массив из числа
function getArrNum(num) {
	return String(num).split('');
}
// Функция подсчета суммы цифр числа
function getSum(arr) {
	let total = 0;
	for (let elem of arr) {
		total += Number(elem);
	}
	return total;
}
// Функция проверки лежит ли сумма цифр в диапазоне [1, 9]
function isSum(num) {
	return getSum(getArrNum(num)) >= 1 && getSum(getArrNum(num)) <= 9;
}
for (let element of arr) {
	if (isSum(element)) {
		result.push(element);
	}
}
console.log(result);