let arr = [18, 22, 12, 55, 556]
let parent = document.querySelector('#parent')
let elem = document.querySelector('#elem')

for (let elem of arr) {										//делаем из массива строки Li
	let li = document.createElement('li')
	li.innerHTML = elem
	li.addEventListener('click', function func() {			
		let inp1 = document.createElement('input')
		inp1.value = li.innerHTML
		li.innerHTML = ''
		li.appendChild(inp1)
		li.removeEventListener('click', func)
		inp1.addEventListener('blur', function () {
			li.innerHTML = inp1.value
			li.addEventListener('click', func)
		})
	})
	parent.appendChild(li)
}

elem.addEventListener('blur', function () {                 //создаем строки li из инпута
	let li = document.createElement('li')
	li.innerHTML = elem.value
	li.addEventListener('click', function func() {
		let inp = document.createElement('input')
		inp.value = li.innerHTML
		li.innerHTML = ''
		li.appendChild(inp)
		li.removeEventListener('click', func)
		inp.addEventListener('blur', function () {
			li.innerHTML = inp.value
			li.addEventListener('click', func)
		})
	})
	parent.appendChild(li)	
})
