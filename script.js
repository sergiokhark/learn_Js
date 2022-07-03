let elems = document.querySelectorAll('a')
let button = document.querySelector('#button')

button.addEventListener('click', func)

function func() {
    for (let elem of elems) {
        if (elem.href.startsWith('http://')) {
            elem.innerHTML += 'GOOD'
        }
    }
}
    