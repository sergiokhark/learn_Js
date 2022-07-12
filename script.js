function appendElem(elem, text) {
	let li = document.createElement('li')
	li.innerHTML = text
	elem.appendChild(li)
}


let elem = document.querySelector('#elem')

appendElem(elem, '!!!!')