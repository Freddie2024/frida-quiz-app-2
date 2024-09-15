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
    div.textContent = formElements.tag.value;
    div.classList.add("question-card__tags");

   
    section.append(img, h2, button, p, div);
   
    form.append(section);
});

