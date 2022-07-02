let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('#elem2')
let elem3 = document.querySelector('#elem3')

elem1.addEventListener('blur', func)
elem2.addEventListener('blur', func)
elem3.addEventListener('blur', func)

function func() {
    this.value = this.value ** 2
}
