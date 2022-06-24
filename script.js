function getDigitsSum(num) {
	let sum = 0;
	let digits = String(num).split('');
	
	for (let digit of digits) {
		sum += Number(digit);
	}
	
	return sum;
}
for (let i = 1; i <= 2030; i++) {
    if (getDigitsSum(i) == 13) {
        console.log(i);
    }
}