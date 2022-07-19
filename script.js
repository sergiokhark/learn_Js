let app = new Vue({
	el: '#app',
	data: {
		tasks: [],
		task: '',
		show: true,
	},
	methods: {
		addTask: function () {
			this.tasks.push({task: this.task, show: this.show, showEdit: this.show})
			this.task = ''
		},
		completeTask: function (index) {
			this.tasks[index].show = false
		},
		delTask: function (index) {
			this.tasks.splice(index, 1)
		},
		getEdit: function (index) {
			this.tasks[index].showEdit = false
		},
		completeEdit: function (index) {
			this.tasks[index].showEdit = true
		}

	}
	
})

