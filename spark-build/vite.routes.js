import { resolve } from 'path';

const routes = {
	main: resolve('/index.html'),
	sudoku: resolve('/sudoku.html'),
	quizbuilder: resolve('/quizbuilder.html'),
	mailcall: resolve('/mailcall.html'),
};

const pageData = {
	'/index': {
		title: 'Christopher Herold',
	},
	'/sudoku': {
		title: 'Sudoku',
	},
	'/quizbuilder': {
		title: 'Quizbuilder'
	},
	'/mailcall': {
		title: 'Mailcall'
	},

};

export { routes, pageData };
