let now = new Date();
let currentYear = now.getFullYear();
let counter = 0;
for (let month = 0; month <= 11; month++) {
    let day13 = new Date(currentYear, month, 13);
    if (day13.getDay() == 5) {
        counter++;
    }
}
console.log(counter);
