let func = (function () {
	let num = 1;
	return function () {
		alert(num);
		num++;
		if (num > 5) {
			num = 1;
		}
	
	}
})();

func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
