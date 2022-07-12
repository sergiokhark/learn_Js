function appendText(elem, text) {
	elem.innerHTML += text
}

let elems = document.querySelectorAll('.elem')

for (let elem of elems) {
	appendText(elem, '!!!')
}

