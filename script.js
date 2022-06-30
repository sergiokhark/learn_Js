function isLeap(year) {
    let date = new Date(year, 2, 0);
    return date.getDate() === 29;
}

console.log(isLeap(2000));