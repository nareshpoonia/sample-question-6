var btnLoaded = document.querySelector("#btn-loaded");
var loadingParagraph = document.querySelector("#loading-paragraph");

btnLoaded.addEventListener("click", clickHandler);

function clickHandler() {
  loadingParagraph.style.display = "none";
}
