function filter(arr, callback) {
	let res = [];
	for (let elem of arr) {
		if (callback(elem)) {
			res.push(elem);
		}
	}
	return res;
}

let result = filter([-1, 2, 3, 4, 5, -6], function (elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});

console.log(result);