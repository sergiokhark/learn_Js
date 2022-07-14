let app = new Vue({
	el: '#app',
	data: {
		show: true,
	},
	methods: {
		showHide: function () {
			this.show = !this.show
		}
	}
});

