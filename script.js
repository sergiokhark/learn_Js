let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let day = 4;
for (let i = 0; i < arr.length; i++) {
    if (i + 1 == day) {
        document.write('<i>' + arr[i] + '</i>' + ' ');
    } else {
        document.write(arr[i] + ' ')
    }
}