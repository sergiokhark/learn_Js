let elem = document.querySelector('#elem')
let str = document.querySelector('#str')

elem.addEventListener('blur', func)

function func() {
	str.innerHTML = this.value
	let timeId = setInterval(function () {
		str.innerHTML = Number(str.innerHTML) - 1
		if (str.innerHTML <= 0) {
			clearInterval(timeId)
		}
	}, 300)
}