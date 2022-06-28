function each(arr, callback) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(callback(arr[i], i));
	}
	return result;
}

let res = each([2, 12, 5, 4], function (elem, numElem) {
	let res = elem * numElem;
	return res;
});

console.log(res);