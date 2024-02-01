function generateLimerick(event) {
  event.preventDefault();

  alert("Generating limerick");
}
let limerickFormElement = document.querySelector("#limerick-generator-form");
limerickFormElement.addEventListener("submit", generateLimerick);
