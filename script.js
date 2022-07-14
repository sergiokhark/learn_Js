let app = new Vue({
	el: '#app',
	data: {
		arr: [12, 14, 16, 18, 24, 25],
	},
	methods: {
		addElem: function() {
			this.arr.shift()
		}
	}
});

