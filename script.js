let link = document.querySelector('a')
link.addEventListener('click', func)

function func() {
    this.innerHTML = this.innerHTML + this.href
    link.removeEventListener('click', func)
}

