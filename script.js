let func = (function () {
	let num = 1;
	return function () {
		alert(num);
		num++
	}
})();

func();
func();
func();