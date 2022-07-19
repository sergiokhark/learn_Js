let app = new Vue({
	el: '#app',
	data: {
		num: '',
	},
	computed: {
		numSquare: function () {
			return this.num ** 2
		}
	}
	
})

