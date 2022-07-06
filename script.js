let elem = document.querySelector('#elem')
let button = document.querySelector('#button')
let str = document.querySelector('#str')

button.addEventListener('click', func)

function func() {
	str.innerHTML = Number(elem.value)
		let timeId = setInterval(function () {
			str.innerHTML--
				if (str.innerHTML <= 0) {
					clearInterval(timeId)
				}
		}, 300)
	this.removeEventListener('click', func)
}
	
