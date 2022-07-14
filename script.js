let app = new Vue({
	el: '#app',
	data: {
		text: 'cтрока',
	},
	methods: {
		sayHello: function (name) {
			alert('Привет, ' + name + '!')
		}
	}
});

