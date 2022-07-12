function appendText(elems, text) {
	for (let elem of elems) {
		elem.innerHTML += text
	}
}

let elems = document.querySelectorAll('p')

appendText(elems, '!!!')