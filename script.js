let arr = [
    function func1() {
        return 1;
    },
    function func2() {
        return 2;
    },
    function func3() {
        return 3;
    }
]

for (let elem of arr) {
    alert(elem());
}