# Frontend Quiz | Practice Edition

Frontend Quiz is a responsive, browser-based practice test covering core HTML, CSS, and JavaScript concepts. The quiz includes 20 multiple-choice questions and provides immediate explanations for both correct and incorrect answers.

## Quiz content

- 5 HTML questions
- 10 CSS questions
- 5 JavaScript questions
- 4 answer choices per question
- 1 correct answer and an explanation for every question

## Features

- Start and restart the quiz
- Navigate to previous or next questions
- Change a selected answer before completing the quiz
- Use number keys `1`-`4` to select answers
- View the live score and question progress
- Track elapsed time during the attempt
- Receive instant visual and text feedback
- Review topic-level results after finishing
- Review answers in read-only mode
- Replay the quiz from the results screen
- Enjoy an optional flower-petal celebration
- Use responsive layouts on desktop and mobile
- Respect the user's reduced-motion preference

## Getting started

No installation or build process is required.

### Open directly

Open `index.html` in a modern web browser.

### Run with a local server

For a more reliable local setup, open the project folder in Visual Studio Code and use an extension such as Live Server. Then open the local address shown by the extension, typically `http://127.0.0.1:5500`.

## How to use

1. Select **Start the quiz**.
2. Choose an answer using the answer buttons or keys `1`-`4`.
3. Read the explanation, then continue to the next question.
4. Use **Previous** to revisit and change an answer before finishing.
5. Select **See my results** after the final question.
6. Review score details by topic or enter read-only answer review.
7. Select **Play again** to reset the quiz.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure for the introduction, quiz, and results screens |
| `index.css` | Responsive visual design, answer states, animations, and accessibility styles |
| `index.js` | Question data, scoring, timer, navigation, feedback, review mode, and confetti |

## Customization

- Add or modify questions in the `questions` array in `index.js`.
- Update topic names and distribution in the same file.
- Change the visual theme in the CSS custom properties at the start of `index.css`.

The quiz currently uses 20 questions, so updates to the number of questions should also update topic counts and related UI text.

## Accessibility

The interface includes keyboard focus styles, semantic buttons, accessible progress and timer labels, live answer feedback, and support for `prefers-reduced-motion`. The quiz uses a 320 px minimum layout width.

## Technologies

HTML5, CSS3, and vanilla JavaScript with no external dependencies.
