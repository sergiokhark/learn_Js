let now = new Date();
let date = new Date(now.getFullYear(), 2, 8);
let dateNewYear = new Date(now.getFullYear() + 1, 2, 8);
if (date - now > 0) {
    console.log('До праздника 8 марта осталось дней: ', (date - now) / (1000 * 60 * 60 * 24));
}
if (date == now) {
    console.log('Праздник 8 марта сегодня');
}
if (date - now < 0) {
    console.log('Праздник 8 марта в этом году уже был. До следующего осталось дней: ',
        (dateNewYear - now) / (1000 * 60 * 60 * 24));
}