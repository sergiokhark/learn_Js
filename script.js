let arr = [1, 5, 6, 7, 0, 15, 18, 22];
for (let elem of arr) {
    if (elem != 0) {
        console.log(elem);
    } else {
        break
    }
}