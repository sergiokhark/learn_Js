function delElem(elem, arr) {
   
    let index = arr.indexOf(elem);
    while (index != -1) {
        arr.splice(index, 1);
        index = arr.indexOf(elem, index);
    }
    return arr;
}
console.log(delElem(1, [10, 1, 2, 3, 10, 11, 22, 1, 1, 1, 1, 1, 25, 1]));