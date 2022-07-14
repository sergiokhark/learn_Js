let app = new Vue({
	el: '#app',
	data: {
		text: 'value',
		show1: true,
		show2: true,
		show3: true,
	},
	methods: {
		toggleElem1: function () {
			this.show1 = !this.show1
		},
		toggleElem2: function () {
			this.show2 = !this.show2
		},
		toggleElem3: function () {
			this.show3 = !this.show3
		}
		
	},
});

