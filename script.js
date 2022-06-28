function getDigitSum(num) {
	return getSum(getDigit(num));
}

function getDigit(num) {
	return String(num).split('');
} 

function getSum(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += Number(elem);
	}
	return sum;
}

function reduceNum(num) {
	let sum = getDigitSum(num);
	if (sum <= 9) {
		return sum;
	} else {
		return reduceNum(sum);
	}
}

console.log(reduceNum(2187));
