let elem = document.querySelector('#elem')
let button = document.querySelector('#button')

button.addEventListener('click', function () {
	let li = document.createElement('li')
	li.innerHTML = 'пункт'
	
	elem.appendChild(li)
	
})