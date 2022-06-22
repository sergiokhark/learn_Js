let arr = [
    [
        [1, 2], [3, 4],
    ],
    [
        [5, 6], [7, 8],
    ]
];
let total = 0;
for (let subArr of arr) {
    for (let subsubArr of subArr) {
        for (let elem of subsubArr) {
            total += elem;
        }
    }
}
console.log(total);