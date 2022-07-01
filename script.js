let now = new Date();
let currentYear = now.getFullYear();
let visYear;

function nextVisYear(year) {
    let date = new Date(year, 2, 0);
    return date.getDate() == 29;                    //true если год високосный
}

function happyBirthDay(month, day) {
    let date = new Date(now.getFullYear(), month, day, now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
    let nextDate = new Date(now.getFullYear() + 1, month, day, now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());

    if (date - now > 0) {
        console.log('До дня рождения осталось дней: ', Math.round((date - now) / (1000 * 60 * 60 * 24)));
    };

    if (now - date == 0) {                          // now == date не работает ?
        console.log('День рождения сегодня');
    };

    if (date - now < 0 && !(month == 1 && day == 29)) {
        console.log('До дня рождения осталось дней: ', Math.round((nextDate - now) / (1000 * 60 * 60 * 24)));
    };

    while (!nextVisYear(currentYear)) {            // пока год не високосный
        visYear = currentYear + 1;
        currentYear++;
    }

    let nextDate29 = new Date(visYear, 1, 29, now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
    
    if (month == 1 && day == 29) {
        console.log('До дня рождения 29 февраля осталось дней: ', Math.round((nextDate29 - now) / (1000 * 60 * 60 * 24)));
    }
}

happyBirthDay(1, 29);




