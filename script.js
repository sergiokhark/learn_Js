(function (num1) {
    return function (num2) {
        return function (num3) {
            alert(num1 + num2 + num3);
        }
    }
})(1)(2)(3);