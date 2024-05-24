document.getElementById('generate-pizza').addEventListener('click', generatePizza);

var ingredients = {
    'Fleisch': ['Salami', 'Schinken', 'Parmaschinken', 'Hähnchen', 'Thunfisch', 'Pepperoni', 'Chorizo', 'Hackfleisch', 'Speck', 'Gyros', 'Garnelen', 'Rinderfilet', 'Putenbrust', 'Sardellen', 'Serrano-Schinken', 'Lachs', 'Sardellen', 'Serrano-Schinken', 'Lachs'],
    'Soßen': ['Tomatensauce', 'Barbecuesauce', 'Knoblauchsauce', 'Pesto', 'Sour Cream', 'Salsa', 'Ketchup', 'Mayonnaise', 'Senf', 'Aioli', 'Chilisauce', 'Currysauce', 'Hollandaise', 'Süß-Sauer-Sauce', 'Teriyaki-Sauce', 'Tzatziki'],
    'Gemüse': ['Tomaten', 'Mozzarella', 'Basilikum', 'Oliven', 'Pilze', 'Zwiebeln', 'Paprika', 'Ananas', 'Rucola', 'Spinat', 'Mais', 'Peperoni', 'Champignons', 'Artischocken', 'Rote Beete']
};

window.onload = function() {
    var selects = ['category-select-1', 'category-select-2', 'category-select-3'];
    selects.forEach(function(selectId) {
        var select = document.getElementById(selectId);
        for (var category in ingredients) {
            var option = document.createElement('option');
            option.textContent = category;
            select.appendChild(option);
        }
    });
};

function generatePizza() {
    var selectedIngredients = [];
    var selects = ['category-select-1', 'category-select-2', 'category-select-3'];
    selects.forEach(function(selectId) {
        var select = document.getElementById(selectId);
        var category = select.value;
        var randomIndex = Math.floor(Math.random() * ingredients[category].length);
        selectedIngredients.push(ingredients[category][randomIndex]);
    });
    displayIngredients(selectedIngredients);
}

function displayIngredients(selectedIngredients) {
    var ingredientsDiv = document.getElementById('ingredients');
    ingredientsDiv.innerHTML = '';
    selectedIngredients.forEach(function(ingredient) {
        var ingredientDiv = document.createElement('div');
        ingredientDiv.textContent = ingredient;
        ingredientsDiv.appendChild(ingredientDiv);
    });
}