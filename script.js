let arr = [18, 22, 12, 55, 556]
let ul = document.querySelector('#elem')

for (let elem of arr) {
	let li = document.createElement('li')
	li.innerHTML = elem
	ul.appendChild(li)
	li.addEventListener('click', function func() {
		let input = document.createElement('input')
		input.value = li.innerHTML
		li.innerHTML = ''
		li.removeEventListener('click', func)
		li.appendChild(input)
		
		input.addEventListener('blur', function () {
			li.innerHTML = input.value
			li.addEventListener('click', func)
		})
	})
}