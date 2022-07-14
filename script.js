let app = new Vue({
	el: '#app',
	data: {
		num1: 1,
		num2: 2,
	},
	methods: {
		sum: function () {
			alert(this.num1 + this.num2)
		}
	}
})

