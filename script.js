function test(func) {
	alert(func(2, 3));
}

func1 = function func(num1, num2) {
    return num1 + num2;
}

test(func1);