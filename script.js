let app = new Vue({
	el: '#app',
	data: {
		text: 'value',
		show: true,
	},
	methods: {
		toggleElem: function () {
			this.show = !this.show
		}
		
	},
});

