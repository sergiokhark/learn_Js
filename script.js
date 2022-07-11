let arr = [18, 22, 12, 55, 556]
let parent = document.querySelector('#parent')
let elem = document.querySelector('#elem')

for (let elem of arr) {										
	let li = document.createElement('li')
	li.innerHTML = '<span>' + elem + '</span>'
	let link = document.createElement('a')
	link.innerHTML = 'удалить'
	link.href = '#'
	link.addEventListener('click', function () {
		parent.removeChild(li)
	})
	li.firstElementChild.addEventListener('click', getEdit)
	parent.appendChild(li)
	li.appendChild(link)
}

elem.addEventListener('blur', function () {                 
	let li = document.createElement('li')
	li.innerHTML = '<span>' + elem.value + '</span>'
	let link = document.createElement('a')
	link.innerHTML = 'удалить'
	link.href = '#'
	link.addEventListener('click', function () {
		parent.removeChild(li)
	})
	li.firstElementChild.addEventListener('click', getEdit)
	parent.appendChild(li)
	li.appendChild(link)
})

function getEdit() {			
	let inp = document.createElement('input')
	inp.value = this.innerHTML
	this.innerHTML = ''
	this.appendChild(inp)
	this.removeEventListener('click', getEdit)
	let self = this
	inp.addEventListener('blur', function () {
		self.innerHTML = inp.value
		self.addEventListener('click', getEdit)
	})
}