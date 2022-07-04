let elem = document.querySelector('#elem')

elem.addEventListener('input', function () {
    if (this.value.length == 5) {
        alert('Введено 5 символов')
    }
})