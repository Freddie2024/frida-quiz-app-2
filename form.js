const questionInput = document.querySelector('[data-js="yourQuestion"]');

const charactersLeftElement = document.querySelector(
    '[data-js="remaining-characters"]'
  );

  questionInput.addEventListener("input", (event) => {
  charactersLeftElement.textContent = 150 - parseInt(event.target.value.length) + " characters left";
});

const answerInput = document.querySelector('[data-js="yourAnswer"]');

const remainingCharactersAnswer = document.querySelector(
  '[data-js="remaining-characters__answer"]'
);

answerInput.addEventListener("input", (event) => {
  remainingCharactersAnswer.textContent = 150 - parseInt(event.target.value.length) + " characters left";
});

/*
this did not work
  document.querySelectorAll('input-field').forEach(item => {
    item.addEventListener("input", (event) => {
    charactersLeftElement.textContent = 150 - parseInt(event.target.value.length);
    }
});
*/

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formElements = event.target.elements;
    console.log(formElements.yourQuestion.value);
    console.log(formElements.yourAnswer.value);
    console.log(formElements.tag.value);

    const section = document.createElement("section");
   
    const nerdButton = document.createElement("button");
    nerdButton.innerHTML = "&#129299;";
    nerdButton.classList.add("card__bookmark");

    const h2 = document.createElement("h2");
    h2.textContent = formElements.yourQuestion.value;
    h2.classList.add("question-card__title");

    const button = document.createElement("button");
    button.textContent = "Show answer";
    button.classList.add("question-card__button");

    const p = document.createElement("p");
    p.textContent = formElements.yourAnswer.value;
    p.classList.add("question-card__answer");

    const div = document.createElement("div");
    div.textContent = "#" + formElements.tag.value.toLowerCase();
    div.classList.add("question-card__tag");

   
    section.append(nerdButton, h2, button, p, div);
   
    form.append(section);
});