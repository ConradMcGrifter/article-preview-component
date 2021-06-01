const SHARE_ICON = document.querySelector(".share-icon");
const SHARE_BOX = document.querySelector(".share-popup");
const BODY = document.querySelector("body");

SHARE_ICON.addEventListener("click", () => {
    SHARE_BOX.classList.toggle("display");

    SHARE_ICON.classList.toggle("display");
});
