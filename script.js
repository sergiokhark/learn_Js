let elems = document.querySelectorAll('p')
for (let elem of elems) {
    elem.addEventListener('click', func)
}

function func() {
    this.innerHTML = this.innerHTML ** 2;
}