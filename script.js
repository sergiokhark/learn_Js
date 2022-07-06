let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')
let str = document.querySelector('#str')
let timeId

button1.addEventListener('click', function () {
	timeId = setInterval(function () {
		str.innerHTML = Number(str.innerHTML) + 1
	}, 300)
	
})

button2.addEventListener('click', function () {
	clearInterval(timeId)
})