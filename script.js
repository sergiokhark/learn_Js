let app = new Vue({
	el: '#app',
	data: {
		num1: null,
		num2: null,
		result: null,
	},
	methods: {
		calc: function () {
			this.result = Number(this.num1) + Number(this.num2)
		}
	}
});

