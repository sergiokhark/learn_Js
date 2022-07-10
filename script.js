let elems = document.querySelectorAll('#parent p')
for (let elem of elems) {
	elem.innerHTML = '<span>' + elem.innerHTML + '</span>'
}

let elems2 = document.querySelectorAll('#parent span')
for (let elem2 of elems2) {
	elem2.addEventListener('click', function func() {
		let input = document.createElement('input')
		input.value = elem2.innerHTML
		elem2.innerHTML = ''
		elem2.appendChild(input)
		elem2.removeEventListener('click', func)
		input.addEventListener('blur', function () {
			elem2.innerHTML = input.value
			elem2.addEventListener('click', func)
		})
	})
}

for (let elem of elems) {
	let link = document.createElement('a')
	link.innerHTML = 'delete'
	link.href = '#'
	elem.appendChild(link)
	link.addEventListener('click', function () {
		elem.parentElement.removeChild(elem)
	})
}

