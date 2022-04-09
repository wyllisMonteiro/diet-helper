import "./style.css"

import meats from "../../foods/meats";
import fishes from "../../foods/fishes";
import starches from "../../foods/starches";
import vegetables from "../../foods/vegetables";
import dairy from "../../foods/dairy";
import fruits from "../../foods/fruits";
import foodSupplements from "../../foods/food_supplements";

import { foodClicked, addPortionFoodButtonClicked, resetPortionFoodButtonClicked } from "./events";

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
    document.getElementById(`${food.category}`).innerHTML += `<div class="card" style="width: 45%" data-food="${foodName}">
        <div class="card-body">
            <h5 class="card-title">${food.title}</h5>
            <p class="card-text">Énergie : ${food.nutritional_values.energy_value} ${food.nutritional_values.energy_unity}</p>
            <a href="#" class="card-link" data-bs-toggle="modal" data-bs-target="#modal-portion">Ajouter</a>
        </div>
    </div>`;
}

Object.values(foods).forEach((food, index) => {
    addFoodToCard(food, index, INDEX_CARD_TO_SHOW);
})

const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("click", foodClicked)
})

const addPortionFoodButton = document.getElementById("desired-portion");
addPortionFoodButton.addEventListener("click", addPortionFoodButtonClicked);

const resetPortionFoodButton = document.getElementById("reset-portion");
resetPortionFoodButton.addEventListener("click", resetPortionFoodButtonClicked);