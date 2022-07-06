let str = document.querySelector('#str');
let button = document.querySelector('#button')

button.addEventListener('click', func)

function func() {
	let timeId = setInterval(function () {
		str.innerHTML = Number(str.innerHTML) - 1
		if (str.innerHTML <= 0) {
			clearInterval(timeId)
		}
	}, 300)
	
	this.removeEventListener('click', func)
}