console.log("Hello World!")

const bookmark = document.querySelector(".card__bookmark");
bookmark.addEventListener("click", () => {
    console.log("bookmarked");
   
  const currentColor = window.getComputedStyle(bookmark).backgroundColor;

    console.log(currentColor);

    if (currentColor === "rgb(173, 255, 47)") {
        bookmark.style.backgroundColor = "rgb(255, 0, 0)";
    } else {
        bookmark.style.backgroundColor = "rgb(173, 255, 47)";
    }
    });

const answerButton = document.querySelector(".question-card__button");
answerButton.addEventListener("click", () => {
    
    const hiddenAnswer = document.querySelector(".question-card__answer");
    hiddenAnswer.classList.toggle("hidden");

    if (hiddenAnswer.classList.contains("hidden")) {
        answerButton.textContent = "show answer";
    } else {
        answerButton.textContent = "hide answer";
    }
});


 /*
    const currentSrc = bookmark.src.split("/").pop();
    if (currentSrc === "bookmark.png") {
        bookmark.src = "./assets/bookmark_filled.png";
    } else {
        bookmark.src = "./assets/bookmark.png";
    */