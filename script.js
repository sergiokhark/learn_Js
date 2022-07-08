let tds = document.querySelectorAll('#table td')

let i = 1
for (let td of tds) {
	td.addEventListener('click', function func() {
		this.innerHTML = i
		i++
		this.removeEventListener('click', func)
	})
}
