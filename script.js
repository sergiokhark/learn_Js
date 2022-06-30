function checkDate(year, month, day) {
    let date = new Date(year, month, day);
    return date.getFullYear() == year && date.getMonth() == month && date.getDate() == day;
}



console.log(checkDate(2025, 12, 31)); // выведет true
console.log(checkDate(2025, 0, 3)); // выведет false