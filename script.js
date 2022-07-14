let app = new Vue({
	el: '#app',
	data: {
		show: true,
		text: 'text1'
	},
	methods: {
		toggleElem: function () {
			this.show = !this.show
		},
	}
});

