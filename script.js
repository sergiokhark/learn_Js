let array = ['str1', 'str2', 'str3', 'str4'];
let arr = array.map(function (elem) {
	return elem.split('').reverse().join('');
})
console.log(arr);