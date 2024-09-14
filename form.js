const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formElements = event.target.elements;
    console.log(formElements.yourQuestion.value);
    console.log(formElements.yourAnswer.value);
    console.log(formElements.tag.value);
});

