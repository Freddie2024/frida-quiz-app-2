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
/*

    answerButton.textContent = "hide answer";


    if (hiddenAnswer.display !== "none") {
        text
    }
  });
*/

  /*

console.log("Yeah");

  var button = document.getElementById('button'); // Assumes element with id='button'

button.onclick = function() {
    var div = document.getElementById('newpost');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

*/
