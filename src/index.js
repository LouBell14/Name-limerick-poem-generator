function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateLimerick(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "aft4c703eb4e588f70o3063bb1c00a8b";
  let context = `You are a leprechaun and that loves to write short, silly limericks using a person's name. Your mission is to generate a limerick in basic HTML. Each sentence is to be separate using <br> tag. Make sure to follow the user instructions. Do not include a title for the AI you generate. Do not use ";echo in the limerick. Sign the poem with 'SheCodes AI' and a ☘️ in a <strong> element at the end of the poem`;
  let prompt = `User instructions: Generate a limerick about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating your limerick for you, ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}
let limerickFormElement = document.querySelector("#limerick-generator-form");
limerickFormElement.addEventListener("submit", generateLimerick);
