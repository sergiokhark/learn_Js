let str = document.querySelector('#str')

str.classList.add('colred')
setInterval(function () {
	str.classList.toggle('colred')
	str.classList.add('colgreen')
}, 1000)
