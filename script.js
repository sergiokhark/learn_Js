function filter(arr, callback) {
	let res = [];
	for (let elem of arr) {
		if (callback(elem)) {
			res.push(elem);
		}
	}
	return res;
}

let result = filter(['abcde', 'ab', 'a', 'abcdef', 'cdb'], function (elem) {
	if (elem.length <= 3) {
		return true;
	} else {
		return false;
	}
});

console.log(result);