function generateRecipe(event) {
    event.preventDefault();

    let recipeElement = document.querySelector("#recipe");
    recipeElement.innerHTML = "Best breakfast recipe";
}

let recipeformElement = document.querySelector("#recipe-generator-form");
recipeformElement.addEventListener("submit", generateRecipe);