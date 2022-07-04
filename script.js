let elem1 = document.querySelector('#elem1')  //a
let elem2 = document.querySelector('#elem2')  //b
let elem3 = document.querySelector('#elem3')  //c
let button = document.querySelector('#button')
let str = document.querySelector('.new')

button.addEventListener('click', func)

function func() {
    let diskr = elem2.value ** 2 - 4 * elem1.value * elem3.value
    if (diskr > 0) {
        let x1 = (- elem2.value + Math.sqrt(diskr)) / 2 * elem1.value
        let x2 = (- elem2.value - Math.sqrt(diskr)) / 2 * elem1.value
        str.innerHTML = x1 + '; ' + x2
    } else {
        str.innerHTML = 'Нет корней'
    }
}






