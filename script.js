let arr = [2, 6, 16, 8, 22, 1, 39];
let arr1 = arr.filter(function (elem, index) {
	return elem * index < 30;
});
console.log(arr1);
