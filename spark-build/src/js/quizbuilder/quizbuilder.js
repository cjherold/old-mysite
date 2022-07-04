import '@popperjs/core';
import 'bootstrap';
import QuizController from './QuizController';
import $ from 'jquery';

const qc = new QuizController({ selection: 0 });

updateUI(qc);

function updateUI (qc) {
    // Name of quiz
    $('#quiz-name').html(qc.getQuizTitle());
    // Current question
    $('#question-text').html(qc.getQuestion());
    // Current progress
    const progress = (`${qc.getProgress() * 100}%`);
    $('#progress-bar').css({width: `${progress}`});

    return (qc.getQuestionType() === 'multiple-choice') ? updateAsMultipleChoice(qc) : updateAsTrueFalse(qc);
}


function updateAsMultipleChoice (qc) {
    $('#multiple-choice-answers').removeClass('d-none');
    $('#true-false-answers').addClass('d-none');
    const options = qc.getOptions();
    $('#option1 p').html(options[0]);
    $('#option2 p').html(options[1]);
    $('#option3 p').html(options[2]);
    $('#option4 p').html(options[3]);
    $('#option1 input').val(options[0]);
    $('#option2 input').val(options[1]);
    $('#option3 input').val(options[2]);
    $('#option4 input').val(options[3]);
}

function updateAsTrueFalse (qc) {
    $('#true-false-answers').removeClass('d-none');
    $('#multiple-choice-answers').addClass('d-none');

}

function finish (qc) {
    $('#question-text').html('Finished!');
    $('#finished-message').html(`Final Score: ${qc.getScore()}/${qc.getQuestionCount()}`);
    $('.content-container').addClass('d-none');
    $('#finished-container').removeClass('d-none');

}


$('.true-false-button').on('click', function () {
    // If true/false
    const answer = $(this).data('tfvalue');
    qc.checkAnswer(answer);


    return showResponseContainer();
});


// Next on click and update ui
$('.next-button').on('click', function () {
    const answer = $('input[type=radio][name=answer]:checked').val();
    qc.checkAnswer(answer);

    return showResponseContainer();
});


$('#new-game-btn').on('click', function () {
    $('.content-container').addClass('d-none');
    qc.resetGame();
    return updateUI(qc);
});

function showResponseContainer() {
    $('.content-container').addClass('d-none')
    $('#response-container').removeClass('d-none');
    $('#question-answer').html(qc.getAnswer());

    return qc.nextQuestion();
};

$('#response-btn').on('click', function () {
    $('.content-container').addClass('d-none');

    if (qc.isFinalQuestion()) return finish(qc);
    return updateUI(qc);
});
