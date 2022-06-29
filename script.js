/* function getUnion(arr1, arr2, arr3) {
    let result = arr1.concat(arr2, arr3);
    return result;
}
console.log(getUnion([1, 2, 3], [4, 5, 6], [7, 8, 9])); */

function getUnion(...arrs) {
    return [].concat(...arrs);
}
console.log(getUnion([1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 3], [4, 5, 6], [7, 8, 9]));