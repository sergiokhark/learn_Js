let elem = document.querySelector('#elem')

for (let i = 1; i <= 10; i++) {
	let li = document.createElement('li')
	li.innerHTML = i
	elem.appendChild(li)
}
