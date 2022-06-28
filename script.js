function each(arr, callback) {
	let result = [];
	for (let elem of arr) {
		result.push(callback(elem));
	}
	return result;
}

let array = each(['строка1', 'строка2', 'строка3', 'строка4', 'строка5'], function (str) {
	let str1 = str.split('').reverse().join('');
	return str1;
});

console.log(array);
