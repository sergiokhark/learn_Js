let str = document.querySelector('#elem')

setInterval(function () {
	str.value = Number(str.value) ** 2
},500)
