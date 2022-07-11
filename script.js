let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
]

let parent = document.querySelector('#parent')

for (let employee of employees) {
	let ul = document.createElement('ul')
	
	let li1 = document.createElement('li')
	li1.innerHTML = employee.name
	li1.addEventListener('click', edit)
	ul.appendChild(li1)

	let li2 = document.createElement('li')
	li2.innerHTML = employee.age
	li2.addEventListener('click', edit)
	ul.appendChild(li2)

	let li3 = document.createElement('li')
	li3.innerHTML = employee.salary
	li3.addEventListener('click', edit)
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

