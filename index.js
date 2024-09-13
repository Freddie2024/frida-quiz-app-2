console.log("Hello World!")

const bookmark = document.querySelector(".question-card__icon");
bookmark.addEventListener("click", () => {
    console.log("bookmarked");
    const currentSrc = bookmark.src.split("/").pop();
    if (currentSrc === "bookmark.png") {
        bookmark.src = "./assets/bookmark_filled.png";
    } else {
        bookmark.src = "./assets/bookmark.png";
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
