const questionInput = document.querySelector('[data-js="yourQuestion"]');
const answerInput = document.querySelector('[data-js="yourAnswer"]');

const charactersLeftElement = document.querySelector(
    '[data-js="remaining-characters"]'
  );

  questionInput.addEventListener("input", (event) => {
  charactersLeftElement.textContent = 150 - parseInt(event.target.value.length) + " characters left";
});

/*

this code does not work 
Uncaught TypeError: Cannot set properties of null (setting 'textContent')
    at HTMLTextAreaElement.<anonymous>

const charactersLeftElement2 = document.querySelector(
    '[data-js="remaining-characters2"]'
);

answerInput.addEventListener("input", (event) => {
    charactersLeftElement2.textContent = 150 - parseInt(event.target.value.length) + " characters left";

});
*/


/*
this did also not work
  const charactersLeftElement2 = document.querySelector(
    '[data-js="remaining-characters2"]'
  );
 */

/*
this did also not work
  document.querySelectorAll('input-field').forEach(item => {
    item.addEventListener("input", (event) => {
    charactersLeftElement.textContent = 150 - parseInt(event.target.value.length);
    }
});
*/

/*
this did also not work
  answerInput.addEventListener("input", (event) => {
    charactersLeftElement2.textContent = 150 - parseInt(event.target.value.length);
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
   
    const img = document.createElement("img");
    img.src = "./assets/bookmark.png";
    img.classList.add("question-card__icon");

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

   
    section.append(img, h2, button, p, div);
   
    form.append(section);
});