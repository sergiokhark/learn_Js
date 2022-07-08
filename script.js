let parent = document.querySelector('#parent')
let button = document.querySelector('#button')

button.addEventListener('click', function () {
	let lastElem = parent.lastElementChild
	parent.removeChild(lastElem)
})