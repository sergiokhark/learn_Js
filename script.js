let elem = document.querySelector('#elem')
let button = document.querySelector('#button')

button.addEventListener('click', func)

function func() {
    let symbols = elem.value.split('')
    let resArr = []
    while (symbols.length > 0) {
        let randomInd = getRandomInd(0, symbols.length - 1)
        let elem = symbols.splice(randomInd, 1)[0];
        resArr.push(elem)
    }
    elem.value = resArr.join('')
}

function getRandomInd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
