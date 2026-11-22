const questions = [
    {
        category: 'JavaScript',
        question: 'Which keyword declares a variable that can be reassigned?',
        options: ['const', 'let', 'static', 'final'],
        answer: 1,
        explanation: 'Use let when a variable needs a new value. const is for bindings that should not be reassigned.',
    },
    {
        category: 'JavaScript',
        question: 'Which method adds an item to the end of an array?',
        options: ['push()', 'shift()', 'pop()', 'slice()'],
        answer: 0,
        explanation: 'push() appends one or more items to an array and returns its new length.',
    },
    {
        category: 'JavaScript',
        question: 'Which operator checks both value and type?',
        options: ['==', '=', '===', '!='],
        answer: 2,
        explanation: 'The strict equality operator (===) compares values without converting their types.',
    },
    {
        category: 'JavaScript',
        question: 'Which event runs when a user clicks an element?',
        options: ['change', 'submit', 'hover', 'click'],
        answer: 3,
        explanation: 'The click event fires when a user activates an element with a pointer or keyboard.',
    },
    {
        category: 'JavaScript',
        question: 'Which array method creates a new array from matching items?',
        options: ['forEach()', 'filter()', 'findIndex()', 'join()'],
        answer: 1,
        explanation: 'filter() returns a new array containing every item that passes its test.',
    },
    {
        category: 'CSS',
        question: 'Which property changes the text color?',
        options: ['font-style', 'text-color', 'color', 'foreground'],
        answer: 2,
        explanation: 'The color property sets the foreground color used to draw an element’s text.',
    },
    {
        category: 'CSS',
        question: 'Which value makes an element a flex container?',
        options: ['display: flex', 'position: flex', 'flex: display', 'align: flex'],
        answer: 0,
        explanation: 'Setting display: flex creates a flex formatting context for the element’s children.',
    },
    {
        category: 'CSS',
        question: 'Which property controls the space inside an element?',
        options: ['margin', 'padding', 'gap', 'spacing'],
        answer: 1,
        explanation: 'Padding creates space between an element’s content and its border.',
    },
    {
        category: 'CSS',
        question: 'Which selector targets an element with id="menu"?',
        options: ['.menu', '*menu', '#menu', 'menu'],
        answer: 2,
        explanation: 'An ID selector starts with #, so #menu targets the element with id="menu".',
    },
    {
        category: 'CSS',
        question: 'Which property rounds the corners of a box?',
        options: ['corner-shape', 'border-style', 'border-round', 'border-radius'],
        answer: 3,
        explanation: 'border-radius controls how rounded an element’s corners appear.',
    },
    {
        category: 'CSS',
        question: 'Which unit is relative to the root element font size?',
        options: ['em', 'rem', 'px', 'vh'],
        answer: 1,
        explanation: 'A rem is based on the root element’s font size, which makes it useful for scalable layouts.',
    },
    {
        category: 'CSS',
        question: 'Which declaration centers items on the cross axis in a flex row?',
        options: ['align-items: center', 'justify-content: center', 'text-align: center', 'place-content: center'],
        answer: 0,
        explanation: 'In a flex row, align-items controls alignment along the cross axis.',
    },
    {
        category: 'CSS',
        question: 'Which property changes an element transparency?',
        options: ['visibility', 'filter-color', 'opacity', 'display'],
        answer: 2,
        explanation: 'opacity sets how transparent an element and its contents appear, from 0 to 1.',
    },
    {
        category: 'CSS',
        question: 'Which pseudo-class applies while a pointer is over an element?',
        options: [':focus', '::before', ':active', ':hover'],
        answer: 3,
        explanation: ':hover matches an element while a pointing device is over it.',
    },
    {
        category: 'CSS',
        question: 'Which at-rule defines responsive breakpoints?',
        options: ['@supports', '@media', '@keyframes', '@layer'],
        answer: 1,
        explanation: '@media applies styles conditionally, including at viewport-width breakpoints.',
    },
    {
        category: 'HTML',
        question: 'Which element creates a link in HTML?',
        options: ['<link>', '<a>', '<href>', '<url>'],
        answer: 1,
        explanation: 'The anchor element (<a>) creates a hyperlink when it has an href attribute.',
    },
    {
        category: 'HTML',
        question: 'Which element creates a line break?',
        options: ['<break>', '<lb>', '<br>', '<hr>'],
        answer: 2,
        explanation: '<br> inserts a line break. Use it for meaningful line breaks, not page spacing.',
    },
    {
        category: 'HTML',
        question: 'Which element is used for the main page heading?',
        options: ['<h1>', '<head>', '<title>', '<header-text>'],
        answer: 0,
        explanation: '<h1> represents the page’s top-level heading; <head> holds document metadata.',
    },
    {
        category: 'HTML',
        question: 'Which attribute provides alternative text for an image?',
        options: ['src', 'title', 'caption', 'alt'],
        answer: 3,
        explanation: 'The alt attribute describes an image for screen readers and when the image cannot load.',
    },
    {
        category: 'HTML',
        question: 'Which element is used to submit form controls?',
        options: ['<label>', '<form>', '<section>', '<fieldset>'],
        answer: 1,
        explanation: '<form> groups interactive controls and defines how their submitted data is handled.',
    },
];

const categories = ['HTML', 'CSS', 'JavaScript'];
const state = {
    questionIndex: 0,
    answers: Array(questions.length).fill(null),
    reviewing: false,
    celebrationPlayed: false,
};
let timerStartedAt = 0;
let timerInterval = null;

const introScreen = document.querySelector('#intro-screen');
const quizScreen = document.querySelector('#quiz-screen');
const resultsScreen = document.querySelector('#results-screen');
const startButton = document.querySelector('#start-button');
const questionTitle = document.querySelector('#question-text');
const questionCategory = document.querySelector('#question-category');
const questionCounter = document.querySelector('#question-counter');
const progressLabel = document.querySelector('#progress-label');
const progressTrack = document.querySelector('.progress-track');
const progressFill = document.querySelector('#progress-fill');
const scoreValue = document.querySelector('#score-value');
const options = Array.from(document.querySelectorAll('.option'));
const feedback = document.querySelector('#feedback');
const feedbackIcon = document.querySelector('#feedback-icon');
const feedbackTitle = document.querySelector('#feedback-title');
const feedbackExplanation = document.querySelector('#feedback-explanation');
const previousButton = document.querySelector('#previous-button');
const nextButton = document.querySelector('#next-button');
const reviewNote = document.querySelector('#review-note');
const resultsMessage = document.querySelector('#results-message');
const resultsTitle = document.querySelector('#results-title');
const finalScore = document.querySelector('#final-score');
const scorePercent = document.querySelector('#score-percent');
const timerValue = document.querySelector('#timer-value');
const finalDuration = document.querySelector('#final-duration');
const topicResultsList = document.querySelector('#topic-results-list');
const reviewButton = document.querySelector('#review-button');
const restartButton = document.querySelector('#restart-button');
const flowerConfetti = document.querySelector('#flower-confetti');

function showScreen(activeScreen) {
    for (const screen of [introScreen, quizScreen, resultsScreen]) {
        screen.classList.toggle('hidden', screen !== activeScreen);
    }
}

function getScore() {
    return state.answers.reduce((total, answer, index) => {
        return total + (answer === questions[index].answer ? 1 : 0);
    }, 0);
}

function updateElapsedTime() {
    const elapsedSeconds = Math.floor((Date.now() - timerStartedAt) / 1000);
    const hours = Math.floor(elapsedSeconds / 3600);
    const minutes = Math.floor((elapsedSeconds % 3600) / 60);
    const seconds = elapsedSeconds % 60;
    const formattedTime = hours > 0
        ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        : `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    timerValue.textContent = formattedTime;
    timerValue.setAttribute('datetime', `PT${elapsedSeconds}S`);
    finalDuration.textContent = `Completed in ${formattedTime}`;
}

function startTimer() {
    if (timerInterval !== null) {
        window.clearInterval(timerInterval);
    }

    timerStartedAt = Date.now();
    updateElapsedTime();
    timerInterval = window.setInterval(updateElapsedTime, 1000);
}

function stopTimer() {
    if (timerInterval === null) {
        return;
    }

    window.clearInterval(timerInterval);
    timerInterval = null;
    updateElapsedTime();
}

function renderFeedback(selectedAnswer, question) {
    const isCorrect = selectedAnswer === question.answer;
    const answerText = question.options[question.answer];

    feedback.classList.remove('hidden', 'feedback-wrong');
    if (isCorrect) {
        feedbackIcon.textContent = '✓';
        feedbackTitle.textContent = 'Correct — nice work!';
    } else {
        feedback.classList.add('feedback-wrong');
        feedbackIcon.textContent = '!';
        feedbackTitle.textContent = `Not quite. The answer is ${answerText}.`;
    }
    feedbackExplanation.textContent = question.explanation;
}

function renderQuestion(moveFocus = false) {
    const question = questions[state.questionIndex];
    const selectedAnswer = state.answers[state.questionIndex];
    const questionNumber = state.questionIndex + 1;
    const isLastQuestion = state.questionIndex === questions.length - 1;

    questionTitle.textContent = question.question;
    questionCategory.textContent = question.category;
    questionCounter.textContent = `${String(questionNumber).padStart(2, '0')} / ${questions.length}`;
    progressLabel.textContent = `Question ${questionNumber} of ${questions.length}`;
    progressFill.style.width = `${(questionNumber / questions.length) * 100}%`;
    progressTrack.setAttribute('aria-valuenow', questionNumber);
    scoreValue.textContent = getScore();

    options.forEach((option, index) => {
        const isSelected = selectedAnswer === index;
        const isCorrectAnswer = index === question.answer;

        option.querySelector('.option-text').textContent = question.options[index];
        option.setAttribute('aria-pressed', String(isSelected));
        option.disabled = state.reviewing;
        option.classList.toggle('answer-correct', selectedAnswer !== null && isCorrectAnswer);
        option.classList.toggle('answer-wrong', selectedAnswer === index && !isCorrectAnswer);
    });

    if (selectedAnswer === null) {
        feedback.classList.add('hidden');
    } else {
        renderFeedback(selectedAnswer, question);
    }

    previousButton.classList.toggle('hidden', state.questionIndex === 0);
    nextButton.classList.toggle('hidden', selectedAnswer === null && !state.reviewing);
    nextButton.innerHTML = state.reviewing
        ? (isLastQuestion ? 'Back to results <span aria-hidden="true">↗</span>' : 'Next answer <span aria-hidden="true">→</span>')
        : (isLastQuestion ? 'See my results <span aria-hidden="true">→</span>' : 'Next question <span aria-hidden="true">→</span>');
    reviewNote.classList.toggle('hidden', !state.reviewing);

    if (moveFocus) {
        questionTitle.focus({ preventScroll: true });
    }
}

function startQuiz() {
    state.questionIndex = 0;
    state.answers.fill(null);
    state.reviewing = false;
    state.celebrationPlayed = false;
    flowerConfetti.replaceChildren();
    startTimer();
    showScreen(quizScreen);
    renderQuestion(true);
}

function chooseAnswer(answerIndex) {
    if (state.reviewing || answerIndex < 0 || answerIndex >= options.length) {
        return;
    }

    state.answers[state.questionIndex] = answerIndex;
    renderQuestion();
}

function renderTopicResults() {
    topicResultsList.replaceChildren();

    for (const category of categories) {
        const categoryQuestions = questions
            .map((question, index) => ({ question, index }))
            .filter(({ question }) => question.category === category);
        const correctCount = categoryQuestions.filter(({ question, index }) => {
            return state.answers[index] === question.answer;
        }).length;
        const percentage = Math.round((correctCount / categoryQuestions.length) * 100);

        const row = document.createElement('div');
        row.className = 'topic-result-row';

        const name = document.createElement('span');
        name.className = 'topic-result-name';
        name.textContent = category;

        const track = document.createElement('span');
        track.className = 'topic-result-track';
        track.setAttribute('aria-hidden', 'true');

        const fill = document.createElement('span');
        fill.className = 'topic-result-fill';
        fill.style.width = `${percentage}%`;
        track.append(fill);

        const score = document.createElement('span');
        score.className = 'topic-result-score';
        score.textContent = `${correctCount} / ${categoryQuestions.length}`;

        row.append(name, track, score);
        topicResultsList.append(row);
    }
}

function releaseFlowerPetals() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    const colors = ['pink', 'gold', 'mint', 'violet'];
    const petals = document.createDocumentFragment();

    for (let index = 0; index < 36; index++) {
        const petal = document.createElement('span');
        const duration = 3.2 + Math.random() * 1.8;
        const delay = Math.random() * 0.9;
        const drift = Math.round(Math.random() * 240 - 120);
        const rotation = 360 + Math.round(Math.random() * 720);

        petal.className = `flower-petal flower-petal-${colors[index % colors.length]}`;
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.setProperty('--petal-duration', `${duration}s`);
        petal.style.setProperty('--petal-delay', `${delay}s`);
        petal.style.setProperty('--petal-drift', `${drift}px`);
        petal.style.setProperty('--petal-turn', `${rotation}deg`);
        petal.addEventListener('animationend', () => petal.remove(), { once: true });
        petals.append(petal);
    }

    flowerConfetti.replaceChildren(petals);
}

function showResults() {
    stopTimer();
    const score = getScore();
    const percentage = Math.round((score / questions.length) * 100);

    finalScore.textContent = score;
    scorePercent.textContent = `${percentage}% correct`;
    if (score === questions.length) {
        resultsTitle.textContent = 'You’ve got the whole frontend thing!';
        resultsMessage.textContent = 'A perfect score — your HTML, CSS, and JavaScript fundamentals are looking sharp.';
    } else if (percentage >= 90) {
        resultsTitle.textContent = 'Frontend challenge complete!';
        resultsMessage.textContent = 'Excellent work — your frontend fundamentals are looking sharp.';
    } else if (percentage >= 70) {
        resultsTitle.textContent = 'Frontend challenge complete!';
        resultsMessage.textContent = 'A strong foundation. Review the topics below to make it even stronger.';
    } else {
        resultsTitle.textContent = 'Frontend challenge complete!';
        resultsMessage.textContent = 'Every answer is a chance to learn. Review the explanations and give it another go.';
    }

    renderTopicResults();
    showScreen(resultsScreen);
    if (!state.celebrationPlayed) {
        state.celebrationPlayed = true;
        releaseFlowerPetals();
    }
    resultsTitle.focus({ preventScroll: true });
}

startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', startQuiz);

options.forEach((option, index) => {
    option.addEventListener('click', () => chooseAnswer(index));
});

previousButton.addEventListener('click', () => {
    if (state.questionIndex === 0) {
        return;
    }

    state.questionIndex--;
    renderQuestion(true);
});

nextButton.addEventListener('click', () => {
    if (state.questionIndex === questions.length - 1) {
        showResults();
        return;
    }

    state.questionIndex++;
    renderQuestion(true);
});

reviewButton.addEventListener('click', () => {
    state.reviewing = true;
    state.questionIndex = 0;
    showScreen(quizScreen);
    renderQuestion(true);
});

document.addEventListener('keydown', (event) => {
    if (quizScreen.classList.contains('hidden') || state.reviewing || !/^[1-4]$/.test(event.key)) {
        return;
    }

    const target = event.target;
    if (target instanceof HTMLElement && (target.isContentEditable || target.closest('input, textarea, select'))) {
        return;
    }

    event.preventDefault();
    chooseAnswer(Number(event.key) - 1);
});
