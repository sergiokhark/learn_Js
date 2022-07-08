let parent = document.querySelector('#parent')
let elem = document.querySelector('#elem')

let li = document.createElement('li')
li.innerHTML = 'new'
li.addEventListener('click', function () {
	li.innerHTML += '!'
})

parent.insertBefore(li, elem)
