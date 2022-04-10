import { getSelectedFoods, getFoodQantity, setFoodQuantity, computeEnergyFromSelectedFoods } from "./compute"
import meats from "../../foods/meats";
import fishes from "../../foods/fishes";
import starches from "../../foods/starches";
import vegetables from "../../foods/vegetables";
import dairy from "../../foods/dairy";
import fruits from "../../foods/fruits";
import foodSupplements from "../../foods/food_supplements";

const foods = {
    ...meats,
    ...fishes,
    ...starches,
    ...vegetables,
    ...dairy,
    ...fruits,
    ...foodSupplements
};

let foodNameWaitingToBeAdded = "";

function addPortionClicked() {
    foodNameWaitingToBeAdded = this.getAttribute("data-food");
    document.getElementById("quantity").value = getFoodQantity(foodNameWaitingToBeAdded);
}

function resetPortionClicked() {
    foodNameWaitingToBeAdded = this.getAttribute("data-food");
    confirmResetPortionButtonClicked();
}

function confirmAddPortionButtonClicked() {
    const quantity = document.getElementById("quantity").value;
    setFoodQuantity(foodNameWaitingToBeAdded, quantity);
    document.getElementById("quantity").value = quantity;

    if (quantity > 0) {
        const removeButton = document.querySelector(`.card-link-rm[data-food='${foodNameWaitingToBeAdded}']`);
        if (removeButton == null ) {
            document.querySelector(`.card-link-add[data-food='${foodNameWaitingToBeAdded}']`).parentElement.innerHTML += `<a href="#" data-food='${foodNameWaitingToBeAdded}'] style="color: darkred;" class="card-link card-link-rm">Retirer</a>`;
            document.querySelector(`.card-link-add[data-food='${foodNameWaitingToBeAdded}']`)
                .addEventListener("click", addPortionClicked);
            document.querySelector(`.card-link-rm[data-food='${foodNameWaitingToBeAdded}']`)
                .addEventListener("click", resetPortionClicked);
        }
        
        document.querySelector(`.card-link-add[data-food='${foodNameWaitingToBeAdded}']`).parentElement.parentElement.classList.add("card-selected");
        const selectedFoods = Object.values(getSelectedFoods());
        let foodsListElement = "";
        selectedFoods.forEach( food => {
            if (food.quantity <= 0)
                return;

            const itemElement = document.querySelector(`#foods-list-items li[data-item-food="${food.name}"]`);
            if (itemElement != null)
                foodsListElement += "";
    
            foodsListElement += `<li data-item-food="${food.name}">${foods[food.name].title} - ${food.quantity} g</li>`;
        })
        document.getElementById("foods-list-items").innerHTML = foodsListElement;
    } else {
        document.querySelector(`.card-link-add[data-food='${foodNameWaitingToBeAdded}']`).parentElement.parentElement.classList.remove("card-selected");
    }

    const energy = computeEnergyFromSelectedFoods();
    document.getElementById("energy").innerText = `${energy} kcal`;
}

function confirmResetPortionButtonClicked() {
    setFoodQuantity(foodNameWaitingToBeAdded, 0);
    document.getElementById("quantity").value = 0;
    document.querySelector(`.card-link-add[data-food='${foodNameWaitingToBeAdded}']`).parentElement.parentElement.classList.remove("card-selected");
    document.querySelector(`.card-link-rm[data-food='${foodNameWaitingToBeAdded}'`).remove();
    document.querySelector(`#foods-list-items li[data-item-food="${foodNameWaitingToBeAdded}"]`).remove();

    const energy = computeEnergyFromSelectedFoods();
    document.getElementById("energy").innerText = `${energy} kcal`;
}

export { addPortionClicked, resetPortionClicked, confirmAddPortionButtonClicked, confirmResetPortionButtonClicked }