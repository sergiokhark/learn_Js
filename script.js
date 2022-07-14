let app = new Vue({
	el: '#app',
	data: {
		arr: [1, 12, 18, 23, 45, 44, 55, 3, 4],
	},
	methods: {
		addElem: function (index) {
			let elem = this.arr.splice(index, 1) + '!'
			this.arr.splice(index, 0, elem)
		}
	}
});

