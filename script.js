for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    if (Number(str[0]) + Number(str[1]) == 5) {
        console.log(str);
    }
}