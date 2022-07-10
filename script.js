let elems = document.querySelectorAll('p')

for (let elem of elems) {
	elem.innerHTML = '<span>' + elem.innerHTML + '</span>'
}

let elems2 = document.querySelectorAll('span')

for (let elem2 of elems2) {
	let link = document.createElement('a')
	link.innerHTML = 'push'
	link.href = '#'
	elem2.parentElement.appendChild(link)
	link.addEventListener('click', function () {
		elem2.classList.add('decoration')
	})
}
	