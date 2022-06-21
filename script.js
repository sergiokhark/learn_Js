let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
total_keys = 0;
total_value = 0;
for (let key in obj) {
    total_keys += Number(key); //15
    total_value += Number(obj[key]); //40
}
console.log(total_keys / total_value);