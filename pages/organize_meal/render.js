import meats from "../../foods/meats";
import fishes from "../../foods/fishes";
import starches from "../../foods/starches";
import vegetables from "../../foods/vegetables";
import dairy from "../../foods/dairy";
import fruits from "../../foods/fruits";
import foodSupplements from "../../foods/food_supplements";

import {
    computeEnergyFromSelectedFood
} from "./compute";

const foods = {
    ...meats,
    ...fishes,
    ...starches,
    ...vegetables,
    ...dairy,
    ...fruits,
    ...foodSupplements
};

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
            <p class="card-text">Énergie : ${food.nutritional_values.energy} ${food.nutritional_values.energy_unity}</p>
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

const frEquivalent = {
    energy: "Energie",
    protein: "Protéines",
    lipid: "Lipides",
    carbohydrate: "Glucides"
}

const renderFoodsList = selectedFoods => {
    let foodsListElement = "";
    selectedFoods.forEach( food => {
        if (food.quantity <= 0)
            return;

        const itemElement = document.querySelector(`#foods-list-items li[data-item-food="${food.name}"]`);
        if (itemElement != null)
            foodsListElement += "";

        const filters = document.querySelectorAll("#filters .filter:checked");
        if (filters.length <= 0)
            foodsListElement += `<li data-item-food="${food.name}">${foods[food.name].title} - ${food.quantity} g</li>`;
        else {
            foodsListElement += `<li data-item-food="${food.name}">${foods[food.name].title} - ${food.quantity} g</li>
                <ul data-item-food="${food.name}" id="foods-sub-list-items">`;

            filters.forEach(filter => {
                const filterId = filter.getAttribute("id");
                const filterName = filterId.replace("filter-", "");
                const unity = filterName == "energy" ? "kcal" : "g";
                const value = computeEnergyFromSelectedFood(food.name, filterName, food.quantity);
                foodsListElement += `<li data-item-food="${food.name}">${frEquivalent[filterName]} : ${value} ${unity}</li>`;
            })    
                    
            foodsListElement += `</ul>`;
        }
    });
    return foodsListElement;
}

export { renderActiveTab, renderTab, renderCard, renderRemoveButtonToCard, renderNutritionalValues, renderFoodsList }