let app = new Vue({
	el: '#app',
	data: {
		products: [],
		name: '',
		price: '',
		quantity: '',
		total: null,
	},
	methods: {
		addProduct: function () {
			this.products.push({ name: this.name, price: this.price, quantity: this.quantity, edit: false })
			this.getSum()
		},
		delProduct: function (index) {
			this.products.splice(index, 1)	
			this.getSum()
		},
		getSum: function () {
			let sum = 0
			for (let product of this.products) {
				sum += product.price * product.quantity	
			}
			this.total = sum
		},
		getEdit: function (index) {
			this.products[index].edit = true
			this.getSum()
		},
		hideEdit: function (index) {
			this.products[index].edit = false
			this.getSum()
		}
	}
})

