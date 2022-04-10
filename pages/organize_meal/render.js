const renderActiveTab = (foodCategory) => {
    return `<div class="tab-pane fade show active" id="${foodCategory}" role="tabpanel" aria-labelledby="${foodCategory}-tab"></div>`
}

const renderTab = (foodCategory) => {
    return `<div class="tab-pane fade" id="${foodCategory}" role="tabpanel" aria-labelledby="${foodCategory}-tab"></div>`
}

const renderCard = (foodName, food) => {
    return `<div class="card" style="width: 45%">
        <div class="card-body">
            <h5 class="card-title">${food.title}</h5>
            <p class="card-text">Énergie : ${food.nutritional_values.energy_value} ${food.nutritional_values.energy_unity}</p>
            <div class="collapse" id="${foodName}-food-details">
                <p class="portion">Quantité : ${food.nutritional_values.portion_value} ${food.nutritional_values.portion_unity}</p>
                <p class="pretein">Protéines : ${food.nutritional_values.protein} g</p>
                <p class="lipid">Lipides : ${food.nutritional_values.lipid} g</p>
                <p class="carbohydrate">Glucides : ${food.nutritional_values.carbohydrate} g</p>
            </div>
            <a data-food="${foodName}" class="card-link card-link-show" data-bs-toggle="collapse" href="#${foodName}-food-details" role="button" aria-expanded="false" aria-controls="food-details">Détails</a>
            <a data-food="${foodName}" class="card-link card-link-add" data-bs-toggle="modal" data-bs-target="#modal-portion" role="button">Ajouter</a>
        </div>
    </div>`
}

const renderRemoveButtonToCard = foodName => {
    return `<a href="#" data-food='${foodName}'] style="color: darkred;" class="card-link card-link-rm">Retirer</a>`
}

const renderNutritionalValues = nutritionalValues => {
    return `Energie : ${nutritionalValues.energy} kcal
        Protéines : ${nutritionalValues.protein} g
        Lipides : ${nutritionalValues.lipid} g
        Glucides : ${nutritionalValues.carbohydrate} g`;
}

export { renderActiveTab, renderTab, renderCard, renderRemoveButtonToCard, renderNutritionalValues }