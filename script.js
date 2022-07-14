let app = new Vue({
	el: '#app',
	data: {
		
		show: true,
	},
	methods: {
		toggleElem: function () {
			this.show = !this.show
		}
		
	},
});

