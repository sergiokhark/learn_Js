let now = new Date();
let date = new Date(now.getFullYear(), 5, 24);
let dateNewYear = new Date(now.getFullYear() + 1, 5, 24);

if (date - now > 0) {
    console.log('До Дня Рождения осталось дней: ', (date - now) / (1000 * 60 * 60 * 24));
}
if (date == now) {
    console.log('День рождения сегодня');
}
if (date - now < 0) {
    console.log('День рождения в этом году уже был. До следующего осталось дней: ',
        (dateNewYear - now) / (1000 * 60 * 60 * 24));
}