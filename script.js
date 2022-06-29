function getUnion(arr1, arr2, arr3) {
    let res = [];
    res.push(arr1, arr2, arr3);
    return res;
}
console.log(getUnion([1, 2, 3], [4, 5, 6], [7, 8, 9]));