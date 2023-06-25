window.onload = function () {
    const surveyForm = document.getElementById("user info");
    surveyForm.addEventListener("submit", submitForm);
}
console.log(surveyForm)
function submitForm() {
    event.preventDefault();
    const language = document.getElementById('language');
    language.classList.remove("hidden")

    const answer1 = document.getElementById('fruitsQ');
    const answer2 = document.getElementById('hotDrinkQ');
    const answer3 = document.getElementById('dancingQ');
    const answer4 = document.getElementById('morningPersonQ');
    const answer5 = document.getElementById('devStyleQ');

    if (answer1.value == "apples" && answer2.value == "tea" && answer2.value == "y" && answer3.value == "y" && answer4.value == "frontend") {
        language = "Possibly JavaScript!"
    }
    else if (answer1.value == "oranges" && answer2.value == "coffee" && answer3.value == "no" && answer4.value == "no" && answer5.value == "backend") {
        language = "We recommend C#!"
    }
