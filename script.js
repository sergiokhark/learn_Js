let arr = ['123', '456', '789'];
let arr1 = arr.map(function (elem) {
	return elem.split('');
});
console.log(arr1);