let app = new Vue({
	el: '#app',
	data: {
		name: '',
		price: '',
		quantity: '',
		total: 0
	},
	methods: {
		addProduct: function () {
			let table = document.querySelector('table')
			let tr = document.createElement('tr')
			let td1 = document.createElement('td')
			td1.innerHTML = this.name
			let td2 = document.createElement('td')
			td2.innerHTML = this.price
			let td3 = document.createElement('td')
			td3.innerHTML = this.quantity
			let td4 = document.createElement('td')
			td4.innerHTML = this.price * this.quantity
			tr.appendChild(td1)
			tr.appendChild(td2)
			tr.appendChild(td3)
			tr.appendChild(td4)
			table.appendChild(tr)

			this.total += this.price * this.quantity
		}
	}
});

