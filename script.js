let elems = document.querySelectorAll('p')
let button = document.querySelector('#button')

button.addEventListener('click', func)

function func() {
    for (let i = 0; i < elems.length; i++) {
        elems[i].innerHTML += i + 1
        
    }
}
    