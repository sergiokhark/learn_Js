function every(arr, callback) {
	for (let elem of arr) {
		if (callback(elem)) {
			return true;
		}
	}
	return false;
}

let result = every([1, 2, 3, 4, 5], function (elem) {
	if (elem < 0) {
		return true;
	} else {
		return false;
	}
});

console.log(result);