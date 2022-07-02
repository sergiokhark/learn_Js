let button = document.querySelector('#button')
button.addEventListener('click', func)

function func() {
    this.value = Number(this.value) + 1
    if (this.value == 10) {
        button.removeEventListener('click', func)
    }
}
