let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 400},
]
let table = document.querySelector('#table')

for (let elem of employees) {
	let tr = document.createElement('tr')
	
	let td1 = document.createElement('td')
	td1.innerHTML = elem.name
	tr.appendChild(td1)

	let td2 = document.createElement('td')
	td2.innerHTML = elem.age
	tr.appendChild(td2)
	
	let td3 = document.createElement('td')
	td3.innerHTML = elem.salary
	tr.appendChild(td3)

	td3.addEventListener('click', function() {
		td3.innerHTML *= 1.1
	})

	table.appendChild(tr)

}