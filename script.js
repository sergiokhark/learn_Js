for (let i = 10; i >= 1; i -= 2) {
    let str = '';
    for (let j = 0; j < i; j++) {
        str += 'x'
    }
    document.write(str + '<br>')
}