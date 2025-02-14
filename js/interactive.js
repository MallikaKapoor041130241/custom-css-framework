// interactive.js
document.addEventListener("DOMContentLoaded", function () {
    const quizBtn = document.getElementById("quiz-btn");

    if (quizBtn) {
        quizBtn.addEventListener("click", function () {
            alert("Quiz Started!");
        });
    }

    // Handling the quiz choices selection
    const choices = document.querySelectorAll(".choice");
    choices.forEach(choice => {
        choice.addEventListener("click", function () {
            choices.forEach(c => c.classList.remove("selected"));
            this.classList.add("selected");
        });
    });
});
