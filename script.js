let arr = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
let month = 12;
for (let i = 0; i < arr.length; i++) {
    if (i + 1 == month) {
        document.write('<i>' + arr[i] + '</i>' + '<br>');
    } else {
        document.write(arr[i] + '<br>');
    }
}