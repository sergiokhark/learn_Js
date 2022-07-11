let arr = [18, 22, 12, 55, 556]
let parent = document.querySelector('#parent')
let elem = document.querySelector('#elem')

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

for (let elem of arr) {										//делаем из массива строки Li
	let li = document.createElement('li')
	li.innerHTML = elem
	li.addEventListener('click', getEdit)
	parent.appendChild(li)
}

elem.addEventListener('blur', function () {                 //создаем строки li из инпута
	let li = document.createElement('li')
	li.innerHTML = elem.value
	li.addEventListener('click', getEdit)
	parent.appendChild(li)	
})
