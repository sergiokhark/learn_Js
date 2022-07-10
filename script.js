let buttons = document.querySelectorAll('button')
let elems = document.querySelectorAll('p')

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function () {
		elems[i].classList.toggle('hidden')
	})
}