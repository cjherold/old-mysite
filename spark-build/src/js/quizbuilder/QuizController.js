import quizes from './quizes';

class QuizController {
	constructor(params = {}) {
		const selection =
			params.selection === undefined ? Math.floor(Math.random() * 2) : params.selection;
		this.questionNumber = 0;
		this.score = 0;
		this.quiz = this.getRandomQuiz(selection);
		this.questions = this.quiz.questions;
	}
	getQuizTitle() {
		return this.quiz.title;
	}

	getRandomQuiz(selection) {
		const quiz = quizes[selection];
		return quiz;
	}

	getQuestionType() {
		return this.questions[this.questionNumber].questionType;
	}

	getQuestion() {
		return this.questions[this.questionNumber].question;
	}

	getAnswer() {
		return this.questions[this.questionNumber].correctResponse;
	}

	getOptions() {
		const allOptions = this.questions[this.questionNumber].answers;
		return allOptions;
	}

	getProgress() {
		return (this.questionNumber + 1) / this.getQuestionCount();
	}

	getScore() {
		return this.score;
	}

	getQuestionCount() {
		return this.questions.length;
	}

	incrementScore() {
		this.score += 1;
	}

	nextQuestion() {
		if (this.isFinalQuestion()) {
			this.questionNumber = 0;
			this.score = 0;
		} else {
			this.questionNumber += 1;
		}
	}

	checkAnswer(answerGiven) {
		if (answerGiven === this.questions[this.questionNumber].correctMatch) {
			this.incrementScore();
		}
		return this.questions[this.questionNumber].correctResponse;
	}

	isFinalQuestion() {
		return this.questionNumber + 1 > this.questions.length;
	}

	resetGame() {
		this.score = 0;
		this.questionNumber = 0;
	}
}

export default QuizController;
