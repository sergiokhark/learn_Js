let parent = document.querySelector('#parent')
let button = document.querySelector('#button')
let lis0 = parent.querySelectorAll('li')

for (let li of lis0) {
	li.addEventListener('click', function () {
		this.remove()
	})
}

button.addEventListener('click', function () {
	let li = document.createElement('li')
	li.innerHTML = 'new line'
	li.addEventListener('click', function () {
		this.remove()
	})
	parent.appendChild(li)
	
})