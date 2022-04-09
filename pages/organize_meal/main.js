import "./style.css"

import meats from "../../foods/meats";
import fishes from "../../foods/fishes";
import starches from "../../foods/starches";
import vegetables from "../../foods/vegetables";
import dairy from "../../foods/dairy";
import fruits from "../../foods/fruits";
import foodSupplements from "../../foods/food_supplements";

import { addPortionClicked, confirmAddPortionButtonClicked, confirmResetPortionButtonClicked } from "./events";

const foods = {
    ...meats,
    ...fishes,
    ...starches,
    ...vegetables,
    ...dairy,
    ...fruits,
    ...foodSupplements
};

const INDEX_CARD_TO_SHOW = Object.values(meats).length + Object.values(fishes).length;

const addFoodToCard = (food, index, indexCardToShowFirst) => {
    const collapseElement = document.getElementById(`${food.category}`);
    if (collapseElement == null) {
        if (index == indexCardToShowFirst) {
            document.getElementById("cards").innerHTML += `<div class="tab-pane fade show active" id="${food.category}" role="tabpanel" aria-labelledby="${food.category}-tab"></div>`;
        } else {
            document.getElementById("cards").innerHTML += `<div class="tab-pane fade" id="${food.category}" role="tabpanel" aria-labelledby="${food.category}-tab"></div>`;
        }
    }

    const foodName = Object.keys(foods)[index];
    document.getElementById(`${food.category}`).innerHTML += `<div class="card" style="width: 45%">
        <div class="card-body">
            <h5 class="card-title">${food.title}</h5>
            <p class="card-text">Énergie : ${food.nutritional_values.energy_value} ${food.nutritional_values.energy_unity}</p>
            <div class="collapse" id="${foodName}-food-details">
                <p class="portion">Quantité : ${food.nutritional_values.portion_value} ${food.nutritional_values.portion_unity}</p>
                <p class="pretein">Protéines : ${food.nutritional_values.protein} g</p>
                <p class="lipid">Lipides : ${food.nutritional_values.lipid} g</p>
                <p class="carbohydrate">Glucides : ${food.nutritional_values.carbohydrates} g</p>
            </div>
            <a data-food="${foodName}" class="card-link card-link-show" data-bs-toggle="collapse" href="#${foodName}-food-details" role="button" aria-expanded="false" aria-controls="food-details">Détails</a>
            <a data-food="${foodName}" class="card-link card-link-add" data-bs-toggle="modal" data-bs-target="#modal-portion">Ajouter</a>
        </div>
    </div>`;
}

Object.values(foods).forEach((food, index) => {
    addFoodToCard(food, index, INDEX_CARD_TO_SHOW);
})

const cards = document.querySelectorAll(".card-link-add");
cards.forEach(card => {
    card.addEventListener("click", addPortionClicked)
})

const addPortionFoodModalButton = document.getElementById("desired-portion");
addPortionFoodModalButton.addEventListener("click", confirmAddPortionButtonClicked);

const resetPortionFoodModalButton = document.getElementById("reset-portion");
resetPortionFoodModalButton.addEventListener("click", confirmResetPortionButtonClicked);