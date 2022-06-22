let one = 0;
let two = 1;
let three = 2;
for (i = 1; i <= 10; i++) {
    let current = one + two + three;
    one = two;
    two = three;
    three = current;
    console.log(current);
}