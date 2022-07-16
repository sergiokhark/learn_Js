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
			table.appendChild(tr)
			this.total += this.price * this.quantity
		}
	}
});

