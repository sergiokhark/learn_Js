let f1 = function () {
    return 5;
};
let f2 = function () {
    return 10;
};
let f3 = function () {
    return 15;
}

function test(func1, func2, func3) {
    let result = func1() + func2() + func3();
    return result;
}

console.log(test(f1, f2, f3));