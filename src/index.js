function generateLimerick(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "Da Da Dat Dat Da Daaarrr";
}
let limerickFormElement = document.querySelector("#limerick-generator-form");
limerickFormElement.addEventListener("submit", generateLimerick);
