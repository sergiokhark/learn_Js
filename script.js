let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter_2 = 0;
let counter_3 = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 2) {
        counter_2++;
    }
    if (arr[i] == 3) {
        counter_3++
    }
}
console.log(counter_2, counter_3);