console.log("Hello World!")

const bookmark = document.querySelector("#bookmarkIcon");
bookmark.addEventListener("click", () => {
    console.log("bookmarked");
    const currentSrc = bookmark.src.split("/").pop();
    if (currentSrc === "bookmark.png") {
        bookmark.src = "./assets/bookmark_filled.png";
    } else {
        bookmark.src = "./assets/bookmark.png";
    }
});
