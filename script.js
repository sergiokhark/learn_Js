let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
]

let table = document.querySelector('#table')

for (let employee of employees) {
	let tr = document.createElement('tr')
	
	let td1 = document.createElement('td')
	td1.innerHTML = employee.name
	tr.appendChild(td1)
	
	let td2 = document.createElement('td')
	td2.innerHTML = employee.age
	tr.appendChild(td2)

	let td3 = document.createElement('td')
	td3.innerHTML = employee.salary
	tr.appendChild(td3)

	table.appendChild(tr)
}

let tds = document.querySelectorAll('td')

for (let td of tds) {
	td.addEventListener('click', edit)
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

let trs = document.querySelectorAll('tr')

for (let tr of trs) {
	let td = document.createElement('td')
	let link = document.createElement('a')
	link.innerHTML = 'Delete'
	link.href = '#'
	link.addEventListener('click', function () {
		table.removeChild(tr)
	})

	td.appendChild(link)
	tr.appendChild(td)
}

let input1 = document.querySelector('#input1')
let input2 = document.querySelector('#input2')
let input3 = document.querySelector('#input3')
let button = document.querySelector('#button')

button.addEventListener('click', function () {
	let tr = document.createElement('tr')
	
	let td1 = document.createElement('td')
	td1.innerHTML = input1.value
	td1.addEventListener('click', edit)
	tr.appendChild(td1)

	let td2 = document.createElement('td')
	td2.innerHTML = input2.value
	td2.addEventListener('click', edit)
	tr.appendChild(td2)

	let td3 = document.createElement('td')
	td3.innerHTML = input3.value
	td3.addEventListener('click', edit)
	tr.appendChild(td3)

	table.appendChild(tr)
})