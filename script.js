function test(func) {
	alert(func(3));
}

function func(num) {
    return num ** 3;
}

test(func);