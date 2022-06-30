let now = new Date();
let currentYear = now.getFullYear();
let counter = 0;
for (let year = 2000; year <= currentYear; year++) {
    let date = new Date(year, 0, 1);
    if (date.getDay() == 0 || date.getDay() == 6) {
        counter++;
    }
}
console.log(counter);
