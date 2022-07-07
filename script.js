let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
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
	td2.addEventListener('click', function () {
		td2.innerHTML++
	})
	

	let td3 = document.createElement('td')
	td3.innerHTML = elem.salary
	tr.appendChild(td3)

	table.appendChild(tr)

}