function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	
	return true;
}
for (let j = 1; j <= 100; j++) {
    if (isPrime(j)) {
        console.log(j);
    }
}