function func1(str) {
    let arr = str.split('-');
    return arr;
}

function func(department, [name, surname], str) {
    let [year, month, day] = func1(str);
    console.log(department);
}

func('отдел разработки', ['Иван', 'Иванов'], '2018-12-31');