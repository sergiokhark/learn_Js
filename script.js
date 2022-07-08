let table = document.querySelector('#table')
let tds = document.querySelectorAll('#table td')

let i = tds.length
for (let td of tds) {
	td.innerHTML = i--
}