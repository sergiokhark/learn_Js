let buttons = document.querySelectorAll('button')

for (let button of buttons) {
	button.addEventListener('click', function () {
		button.previousElementSibling.classList.toggle('hidden')
	})
}
