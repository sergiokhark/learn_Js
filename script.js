let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
]

let parent = document.querySelector('#parent')

for (let employee of employees) {
	let ul = document.createElement('ul')
	
	let li1 = document.createElement('li')
	li1.innerHTML = '<span>' + employee.name + '</span>'
	li1.firstElementChild.addEventListener('click', edit)
	let link1 = addDeleteLink(li1)
	li1.appendChild(link1)
	ul.appendChild(li1)

	let li2 = document.createElement('li')
	li2.innerHTML = '<span>' + employee.age + '</span>'
	li2.firstElementChild.addEventListener('click', edit)
	let link2 = addDeleteLink(li2)
	li2.appendChild(link2)
	ul.appendChild(li2)

	let li3 = document.createElement('li')
	li3.innerHTML = '<span>' + employee.salary + '</span>'
	li3.firstElementChild.addEventListener('click', edit)
	let link3 = addDeleteLink(li3)
	li3.appendChild(link3)
	ul.appendChild(li3)

	parent.appendChild(ul)
}

function edit() {
	let input = document.createElement('input')
	input.value = this.innerHTML
	this.innerHTML = ''
	this.appendChild(input)
	this.removeEventListener('click', edit)
	let self = this
	input.addEventListener('blur', function () {
		self.innerHTML = input.value
		self.addEventListener('click', edit)
	})
}

function addDeleteLink(li) {
	let link = document.createElement('a')
	link.innerHTML = 'Delete'
	link.href = '#'
	link.addEventListener('click', function () {
		li.parentElement.removeChild(li)
	})
	return link
}
