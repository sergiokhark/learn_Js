let elem = document.querySelector('#elem')

elem.addEventListener('change', function () {
    if (this.value.length < 5) {
        this.classList.add('colgreen')
    } else {
        this.classList.add('colred')
    }
})