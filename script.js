function func() {
    return function () {
        return function () {
            return function () {
                return function () {
                    return '!';
                }
            }
        }
    }
}


alert(func()()()()());