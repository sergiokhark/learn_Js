let tds = document.querySelectorAll('#table td')

let i = 1

for (let td of tds) {
	td.addEventListener('click', function func() {
		this.innerHTML = i

		if (i == 1) {
			i = 2
		} else {
			if (i == 2) {
				i = 3
			} else {
				i = 1
			}
		}
		this.removeEventListener('click', func)
	})
}
