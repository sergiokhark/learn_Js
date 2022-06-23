let arr = [4, 2, 5, 19, 13, 0, 10];
let total = 0;
for (let elem of arr) {
	total += Math.pow(elem, 3);
}
console.log(Math.sqrt(total));
