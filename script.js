let arr = [1, 8, 12, 23, 42, 33]
let elem1 = document.querySelector('#elem')

for (let elem of arr) {
	let li = document.createElement('li')
	li.innerHTML = elem
	li.addEventListener('click', function func () {
		li.innerHTML += '!'
		this.removeEventListener('click', func)
	})


	elem1.appendChild(li)
	
}
