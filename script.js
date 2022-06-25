function isFreindly(num1, num2) {
	let sum1 = getSum(getOwnDivisors(num1));
	let sum2 = getSum(getOwnDivisors(num2));
	
	if (sum1 == num2 && sum2 == num1) {
		return true;
	} else {
		return false;
	}
}

function getOwnDivisors(num) {
	let arr = [];
	for (let i = 1; i < num; i++) {
		if (num % i == 0) {
			arr.push(i);
		}
	}
	return arr;
}

function getSum(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += elem;
	}
	return sum;
}

function getFreindly() {
	let arr = [];
	for (let i = 1; i < 3000; i++) {
		for (let j = i + 1; j < 3000; j++) {
			if (isFreindly(i, j)) {
				arr.push([i, j]);
			}
		}
	}
	return arr;
}
console.log(getFreindly());