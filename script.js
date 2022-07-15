let app = new Vue({
	el: '#app',
	data: {
		isDisabled: false,
	},
	methods: {
		getLock: function () {
			this.isDisabled = !this.isDisabled
		}
	}
});

