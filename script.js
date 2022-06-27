function test() {
    let num = 10;
    return function () {
        alert(num);
        num--;
    }
}

let func = test();
func();
func();
func();
func();
func();