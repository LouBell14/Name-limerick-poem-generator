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
  let context =
    "You are a mischievious leprechaun and that loves to write short, silly limericks. Your mission is to generate a limerick in basic HTML. Make sure to follow the user instructions";
  let prompt = `User instructions: Generate a sweet limerick about $(instructionsInput.value)`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKeyey}`;

  console.log("Generating poem");
  console.log(`Prompt: $(prompt)`);
  console.log(`Context: $(context)`);

  axios.get(apiURL).then(displayPoem);
}
let limerickFormElement = document.querySelector("#limerick-generator-form");
limerickFormElement.addEventListener("submit", generateLimerick);
