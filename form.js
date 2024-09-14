const form = document.querySelector('[data-js="form"]');

console.log("It works!")

form.addEventListener("submit", (event)) => {
    event.preventDefault();
};

