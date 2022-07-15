let app = new Vue({
	el: '#app',
	data: {
		isDisabled: false,
		checked: false
	},
	methods: {
		getLock: function () {
			this.isDisabled = !this.isDisabled
		}
	}
});

