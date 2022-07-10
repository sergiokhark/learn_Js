let buttons = document.querySelectorAll('button')

for (let button of buttons) {
	button.addEventListener('click', function () {
		let elem = document.querySelector('#' + button.dataset.elem)
		elem.classList.toggle('hidden')
	})
}