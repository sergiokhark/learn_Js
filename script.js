let elem = document.querySelector('#elem')
let arr = [123, 345, 44, 18, 55, 900]

function appendElem(elem, text) {
	let li = document.createElement('li')
	li.innerHTML = text
	elem.appendChild(li)
}

for (let text of arr) {
	appendElem(elem, text)
}