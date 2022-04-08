import { getFoodQantity, setFoodQuantity, computeEnergyFromSelectedFoods } from "./compute"

let foodNameWaitingToBeAdded = "";

function foodClicked() {
    foodNameWaitingToBeAdded = this.getAttribute("data-food");
    document.getElementById("quantity").value = getFoodQantity(foodNameWaitingToBeAdded);
}

function addPortionFoodButtonClicked() {
    const quantity = document.getElementById("quantity").value;
    setFoodQuantity(foodNameWaitingToBeAdded, quantity);
    document.getElementById("quantity").value = quantity;

    if (quantity > 0)
        document.querySelector(`.card[data-food='${foodNameWaitingToBeAdded}']`).classList.add("card-selected");
    else
        document.querySelector(`.card[data-food='${foodNameWaitingToBeAdded}']`).classList.remove("card-selected");


    const energy = computeEnergyFromSelectedFoods();
    document.getElementById("energy").innerText = `${energy} kcal`;
}

function resetPortionFoodButtonClicked() {
    setFoodQuantity(foodNameWaitingToBeAdded, 0);
    document.getElementById("quantity").value = 0;

    document.querySelector(`.card[data-food='${foodNameWaitingToBeAdded}']`).classList.remove("card-selected");

    const energy = computeEnergyFromSelectedFoods();
    document.getElementById("energy").innerText = `${energy} kcal`;
}

export { foodClicked, addPortionFoodButtonClicked, resetPortionFoodButtonClicked }