let app = new Vue({
	el: '#app',
	data: {
		num: null,
		result: null,
	},
	methods: {
		calc: function () {
			this.result = Math.sqrt(this.num)
		}
	}
});

