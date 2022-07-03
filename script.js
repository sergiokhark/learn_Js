let elem = document.querySelector('#elem')
let elems = document.querySelectorAll('#elem1')

elem.addEventListener('blur', func)

function func() {
    let fioArr = elem.value.split(' ')
    for (let i = 0; i < fioArr.length; i++) {
        elems[i].value = fioArr[i]
    }
}