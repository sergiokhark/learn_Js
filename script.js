let app = new Vue({
	el: '#app',
	data: {
		name: '',
		price: '',
		quantity: '',
		total: 0
	},
	methods: {
		addProduct: function (...rest) {
			let table = document.querySelector('table')
			let tr = document.createElement('tr')
			for (let elem of rest) {
				let td = document.createElement('td')
				td.innerHTML = elem
				tr.appendChild(td)
			}

			let td = document.createElement('td')
			let link = document.createElement('a')
			link.innerHTML = 'Delete'
			link.href = '#'
			td.appendChild(link)
			tr.appendChild(td)
			
			link.addEventListener('click', function () {
				table.removeChild(tr)
				
			})

			table.appendChild(tr)
			this.total += this.price * this.quantity
		}
	}
});

