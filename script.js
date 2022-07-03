let elems = document.querySelectorAll('div')
for (let elem of elems) {
    elem.addEventListener('click', function () {
        elem.innerHTML = elem.innerHTML + elem.dataset.num
    })
}