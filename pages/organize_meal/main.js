import "./style.css"

import vegetables from "../../foods/vegetables";
import starches from "../../foods/starches";
import { foodClicked, addPortionFoodButtonClicked, resetPortionFoodButtonClicked } from "./events";

const addFoodToCard = (food, index) => {
    return `<div class="card" style="margin-right: 15px;cursor: pointer" data-food="${Object.keys(starches)[index]}">
        <div class="card-body">
            <h5 class="card-title">${food.title}</h5>
            <p class="card-text">Énergie : ${food.nutritional_values.energy_value} ${food.nutritional_values.energy_unity}</p>
            <a href="#" class="card-link" data-bs-toggle="modal" data-bs-target="#modal-portion">Ajouter</a>
        </div>
    </div>`;
}

let cardsHTML = "";
Object.values(starches).forEach( (food, index) => {
    cardsHTML += addFoodToCard(food, index);
})

document.getElementById("cards").innerHTML = cardsHTML;

const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("click", foodClicked)
})

const addPortionFoodButton = document.getElementById("desired-portion");
addPortionFoodButton.addEventListener("click", addPortionFoodButtonClicked);

const resetPortionFoodButton = document.getElementById("reset-portion");
resetPortionFoodButton.addEventListener("click", resetPortionFoodButtonClicked);