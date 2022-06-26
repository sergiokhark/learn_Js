function func1() {
    return 1;
}
function func2() {
    return 2;
}
function func3() {
    return 3;
}

function test(func1, func2, func3) {
    alert(func1() + func2() + func3());
}

test(func1, func2, func3);