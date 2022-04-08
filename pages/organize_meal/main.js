import "./style.css"

import vegetables from "../../foods/vegetables";
import starches from "../../foods/starches";

const addFoodToCard = (food) => {
    return `<div class="card" style="margin-right: 15px;cursor: pointer" data-energy="${food.nutritional_values.energy_value}">
        <div class="card-body">
            <h5 class="card-title">${food.title}</h5>
            <p class="card-text">Énergie : ${food.nutritional_values.energy_value} ${food.nutritional_values.energy_unity}</p>
        </div>
    </div>`;
}

let cardsHTML = "";
Object.values(starches).forEach(food => {
    cardsHTML += addFoodToCard(food);
})

document.getElementById("cards").innerHTML = cardsHTML;

let energy = 0;
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("click", () => {
        const regex = /card-selected/g;
        const classes = Object.values(card.classList).join(" ")
        const classFound = classes.match(regex);
        if (classFound) {
            card.classList.remove("card-selected");
            energy -= parseInt(card.getAttribute("data-energy"));
            document.getElementById("energy").textContent = `${energy} kcal`;
            return
        }

        card.classList.add("card-selected");
        energy += parseInt(card.getAttribute("data-energy"));
        document.getElementById("energy").textContent = `${energy} kcal`;
    })
})