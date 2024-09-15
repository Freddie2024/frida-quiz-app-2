const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formElements = event.target.elements;
    console.log(formElements.yourQuestion.value);
    console.log(formElements.yourAnswer.value);
    console.log(formElements.tag.value);

    const section = document.createElement("section");
    const img = document.createElement("img");
    img.src = "./assets/bookmark.png"
    const h2 = document.createElement("h2");
    h2.textContent = "Your question displayed";
    const button = document.createElement("button");
    button.textContent = "Show answer";
    const p = document.createElement("p");
    p.textContent = "Your answer displayed";
    const div = document.createElement("div");
    div.textContent = "Your chosen tag";

   
    section.append(img, h2, button, p, div);
   
    form.append(section);
});

