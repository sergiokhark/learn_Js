function strFun(arr) {
	let str = '';
	for (let elem of arr) {
		if (typeof elem === 'object') {
			str += strFun(elem);
		} else {
			str += elem;
		}
	}
	return str;
}
console.log(strFun(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]));