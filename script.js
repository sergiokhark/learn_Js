let elem = document.querySelector('#elem')

let timeId = setInterval(function () {
	elem.value = Number(elem.value) - 1
	if (Number(elem.value) <= 0) {
		clearInterval(timeId)
	}
}, 500)