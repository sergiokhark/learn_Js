let app = new Vue({
	el: '#app',
	data: {
		arr: [1, 12, 18, 23, 45, 44, 55, 3, 4],
	},
	methods: {
		removeElem: function (index) {
			this.arr.splice(index, 1)
		}
	}
});

