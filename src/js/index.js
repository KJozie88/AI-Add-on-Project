function displayRecipe(response) {
console.log("recipe generated")

        new Typewriter("#recipe", {
  strings: response.data.answer,
  autoStart: true,
  cursor:"",
  delay: 50
});
}

function generateRecipe(event) {
    event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions")
let apiKey = "b30f34a03ff66542oc8t10fb8777f7a6";
let context = "You are a food expert with a passion for quick and easy meals. Your mission is to generate recipes that can be made in 30 minutes or less. Give the recipe title only in <strong/> at the top then seperated by <br/> and list ingredients in bullet format,seperated by <br/> and number instructions in the recipe, also seperated by <br/>. Be sure to include section headings of Ingredients and Instructions in <stong/> element, keep all other text normal and exclude the use of all astrix. Use the international metric system. Make sure to follow user instructions. <br/> Sign the recipe with 'SheCodes AI' in a <stong/>element at the end.";
let prompt = `user instructions: Generate a recipe about ${instructionsInput.value}`;
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Generating recipe");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);

axios.get(apiURL).then(displayRecipe);

}



let recipeformElement = document.querySelector("#recipe-generator-form");
recipeformElement.addEventListener("submit", generateRecipe);