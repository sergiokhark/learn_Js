let date = new Date();
let currentDay = date.getDay();

if (currentDay == 5 || currentDay == 0) {
    console.log('Сегодня выходной');
} else {
    console.log('Сегодня рабочий день');
}

console.log('До ближайшего воскресенья осталось: ', 7 - currentDay, ' дней');