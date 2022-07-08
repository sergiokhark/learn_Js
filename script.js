let elem = document.querySelector('#elem')
let link = document.querySelector('#remove')

link.addEventListener('click', function (event) {
	//elem.remove()
	elem.parentElement.removeChild(elem)
	event.preventDefault()
})