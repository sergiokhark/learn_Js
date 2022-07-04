let elem = document.querySelector('#elem')

elem.addEventListener('blur', func)

function func() {
    if (elem.value >= 1 && elem.value <= 100) {
        elem.classList.add('colgreen')
    } else {
        elem.classList.add('colred')
    }
}
