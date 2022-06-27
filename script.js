function test() {
    let num = 10;
    return function () {
        if (num >= 0) {
            alert(num);
            num--;
        } else {
            alert('Отсчет окончен')
        }
        
    }
}

let func = test();
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
