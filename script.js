function test(num, func1, func2) {
	return func1(num) + func2(num);
}
alert(test(3,
    function (num) {
        return num * num;
    },
    function (num) {
        return num ** 3;
    }));
    