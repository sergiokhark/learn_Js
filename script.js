let arr = [18, 22, 12, 55, 556]
let ul = document.querySelector('#elem')

for (let elem of arr) {
	let li = document.createElement('li')
	li.innerHTML = elem
	ul.appendChild(li)
}