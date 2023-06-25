window.onload = function () {
    const surveyForm = document.getElementById("user info");
    surveyForm.addEventListener("submit", submitForm)
}

function submitForm() {
    event.preventDefault();
    const language = document.getElementById('language');
