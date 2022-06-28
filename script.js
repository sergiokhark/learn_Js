let result = [];
function getArray(arr) {
	
	for (let elem of arr) {
		if (typeof elem === 'object') {
			result.concat(getArray(elem));
		} else {
			result.push(elem);
		}
	}
	return result;
}
console.log(getArray([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));