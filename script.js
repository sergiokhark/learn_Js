let elems = document.querySelectorAll('p')
let inpElem = document.querySelector('#elem')

for (let elem of elems) {
    
    elem.addEventListener('click', function () {
        inpElem.value++

    })
}