let app = new Vue({
	el: '#app',
	data: {
		products: [],
		name: '',
		price: '',
		quantity: '',
		sum: 0
	},
	methods: {
		addProduct: function () {
			this.products.push({ name: this.name, price: this.price, quantity: this.quantity })
			this.sum += this.price * this.quantity
		},
		
		
	}
	
})

