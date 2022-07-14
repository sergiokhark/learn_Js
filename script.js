let app = new Vue({
	el: '#app',
	data: {
		arr: [12, -14, 16, 8, 3, -2, 9],
	},
	methods: {
		arrFiltered: function() {
			this.arr = this.arr.filter(function (elem) {
				return elem > 0 && elem < 10
			})
		},
	}
});

