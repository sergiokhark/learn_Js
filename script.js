let app = new Vue({
	el: '#app',
	data: {
		questions: [
			{
				question: 'Вопрос 1',
				answers: [
					'Ответ 1',
					'Ответ 2',
					'Ответ 3',
					'Ответ 4',
					'Ответ 5',
				],
				right: 3,
				showLink: true,
				showQuestion: true,
			},
			{
				question: 'Вопрос 2',
				answers: [
					'Ответ 1',
					'Ответ 2',
					'Ответ 3',
					'Ответ 4',
					'Ответ 5',
				],
				right: 1,
				showLink: true,
				showQuestion: false,
			},
			{
				question: 'Вопрос 3',
				answers: [
					'Ответ 1',
					'Ответ 2',
					'Ответ 3',
					'Ответ 4',
					'Ответ 5',
				],
				right: 5,
				showLink: false,
				showQuestion: false,
			},
		]
	},
	methods: {
		toNextQuestion(index) {
			if (index < this.questions.length - 1) {
				this.questions[index].showQuestion = false
				this.questions[index + 1].showQuestion = true
			}
		}
			
	}
})

