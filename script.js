let elem = document.querySelector('#elem')
elem.addEventListener('click', function () {
    elem.innerHTML = elem.innerHTML + elem.dataset.text
})