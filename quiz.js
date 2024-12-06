const quizData = [
    {
        question: "What is the main purpose of cellular respiration?",
        options: ["To produce oxygen", "To convert sunlight into energy", "To produce ATP", "To break down DNA"],
        correct: "To produce ATP",
    },

    {
        question: "Which organelle is primarily responsible for cellular respiration in eukaryotic cells?",
        options: ["Nucleus", "Ribosome", "Chloroplast", "Mitochondrion"],
        correct: "Mitochondrion",
    },
    {
        question: "What is the starting molecule for glycolysis?",
        options: ["Glucose", "Pyruvate", "Oxygen", "ATP"],
        correct: "Glucose",
    },
    {
        question: "How many ATP molecules are produced during glycolysis?",
        options: ["1", "2", "4", "36"],
        correct: "2",
    },
    {
        question: "Which of the following is a byproduct of the Krebs cycle?",
        options: ["Oxygen", "Lactic acid", "Carbon dioxide", "Glucose"],
        correct: "Carbon dioxide",
    },
    {
        question: "In the electron transport chain, what molecule serves as the final electron acceptor?",
        options: ["NADH", "Oxygen", "Carbon dioxide", "Glucose"],
        correct: "Oxygen",
    },
    {
        question: "What is the total ATP yield from one molecule of glucose after cellular respiration (aerobic)?",
        options: ["2", "18", "32-38", "50"],
        correct: "32-38",
    },
    ];


const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit-btn");
const goBackButton = document.getElementById("go-back-btn"); // Go Back button

// Generate Quiz
function buildQuiz() {
    const output = quizData.map((currentQuestion, questionIndex) => {
        const answers = currentQuestion.options
            .map(
                (option) =>
                    `<label>
                        <input type="radio" name="question${questionIndex}" value="${option}">
                        ${option}
                    </label>`
            )
            .join("");

        return `
            <div class="question">${questionIndex + 1}. ${currentQuestion.question}</div>
            <div class="answers">${answers}</div>
        `;
    });
    quizContainer.innerHTML = output.join("");
}

// Show Results
function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");
    let score = 0;

    quizData.forEach((currentQuestion, questionIndex) => {
        const selectedAnswer = (
            answerContainers[questionIndex].querySelector(
                `input[name="question${questionIndex}"]:checked`
            ) || {}
        ).value;

        if (selectedAnswer === currentQuestion.correct) {
            score++;
        }
    });

    resultsContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

// Go Back to Homepage
goBackButton.addEventListener("click", () => {
    window.location.href = "index.html"; // Replace with the correct path to your homepage
});

submitButton.addEventListener("click", showResults);

// Initialize Quiz
buildQuiz();
