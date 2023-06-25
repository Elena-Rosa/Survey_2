window.onload = function () {
    const surveyForm = document.getElementById("user info");
    surveyForm.addEventListener("submit", submitForm)
}

function submitForm() {
    event.preventDefault();
    const language = document.getElementById('language');

    const answer1 = document.getElementById('fruitsQ')
    const answer2 = document.getElementById('hotDrinkQ')
    const answer3 = document.getElementById('dancingQ')
    const answer4 = document.getElementById('morningPersonQ')
    const answer5 = document.getElementById('devStyleQ')