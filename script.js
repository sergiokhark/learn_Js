let elem = document.querySelector('#elem')
let button = document.querySelector('#button')

button.addEventListener('click', function () {
	let clone = elem.cloneNode(true)
	elem.insertAdjacentElement('afterend', clone)
})