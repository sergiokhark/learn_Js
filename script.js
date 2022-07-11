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
	ul.appendChild(li1)

	let li2 = document.createElement('li')
	li2.innerHTML = employee.age
	ul.appendChild(li2)

	let li3 = document.createElement('li')
	li3.innerHTML = employee.salary
	ul.appendChild(li3)

	parent.appendChild(ul)
}

