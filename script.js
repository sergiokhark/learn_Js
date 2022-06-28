function each(arr, callback) {
	let result = [];
	for (let elem of arr) {
		result.push(callback(elem));
	}
	return result;
}

let res = each(['строка1', 'строка2', 'строка3'], function (str) {
	let str1 = str[0].toUpperCase() + str.slice(1);
	return str1;
})

console.log(res);