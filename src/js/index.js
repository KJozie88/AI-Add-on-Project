function generateRecipe(event) {
    event.preventDefault();

        new Typewriter("#recipe", {
  strings: "Your recipe goes here",
  autoStart: true,
  cursor:"",
  delay: 50
})
}



let recipeformElement = document.querySelector("#recipe-generator-form");
recipeformElement.addEventListener("submit", generateRecipe);