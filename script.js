let elems = document.querySelectorAll('p')

for (let elem of elems) {

    elem.addEventListener('click', func)
}
 
function func() {
    this.innerHTML = Number(this.innerHTML) ** 2
}
   