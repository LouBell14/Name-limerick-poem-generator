function generateLimerick(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");

  new Typewriter("#poem", {
    strings: "Da Dat Dat Dat Dat Dat DAAAA",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let limerickFormElement = document.querySelector("#limerick-generator-form");
limerickFormElement.addEventListener("submit", generateLimerick);
