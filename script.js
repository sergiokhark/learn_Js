let str = document.querySelector('#str');
let button = document.querySelector('#button')

button.addEventListener('click', func)

function func() {
	setInterval(function () {
		str.innerHTML = Number(str.innerHTML) + 1
	}, 400)
	this.removeEventListener('click', func)
}