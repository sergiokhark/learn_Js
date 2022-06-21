let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
let arr = [];
for (let key in obj) {
    let str = String(obj[key]);
    if (str[0] == 1 || str[0] == 2) {
        arr.push(obj[key]);
    }
}
console.log(arr);