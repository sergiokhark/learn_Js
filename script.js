let app = new Vue({
	el: '#app',
	data: {
		arr: [12, 18, 33, 14, 4, 5, 6],
		show: false,
	},
	methods: {
		toggleUl: function () {
			this.show = !this.show
		}
		
	},
});

