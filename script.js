console.log( getAvg(getDivisors(24)) );

// Нахождение среднего арифметического:
function getAvg(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum / arr.length;
}

// Нахождение массива делителей числа:
function getDivisors(num) {
	let result = [];
	
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
    }
    return result;
}