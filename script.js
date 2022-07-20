let app = new Vue({
	el: '#app',
	data: {
		task: '',
		tasks: [],
		show: false,
	},
	methods: {
		showTasks: function () {
			this.show = true
		},
		addTask: function () {
			this.tasks.push({task: this.task, show: true, showEdit: false})
			this.task = ''
		},
		getCompleteTask: function (index) {
			this.tasks[index].show = false
		},
		delTask: function (index) {
			this.tasks.splice(index, 1)
		},
		editTask: function (index) {
			this.tasks[index].showEdit = true
		},
		getCompleteEdit: function (index) {
			this.tasks[index].showEdit = false
		}
	}
})

