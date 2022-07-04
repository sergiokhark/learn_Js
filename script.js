let button = document.querySelector('#button')
let elems = document.querySelectorAll('div')

button.addEventListener('click', function () {
    for (let elem of elems) {
        elem.innerHTML = elem.innerHTML.slice(0, 10) + '...'
    }

})

