function test() {
    let num = 1;
    return function () {
        alert(num);
        num++;
    }
}

let func = test(); 
func();
func();
func();

let func1 = test(); 
func1();
func1();
