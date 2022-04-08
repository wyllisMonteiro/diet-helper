import { getFoodQantity, setFoodQuantity, computeEnergyFromSelectedFoods } from "./compute"

let foodNameWaitingToBeAdded = "";

function foodClicked() {
    foodNameWaitingToBeAdded = this.getAttribute("data-food");
    document.getElementById("quantity").value = getFoodQantity(foodNameWaitingToBeAdded);
}

function addPortionFoodButtonClicked() {
    const quantity = document.getElementById("quantity").value;

    setFoodQuantity(foodNameWaitingToBeAdded, quantity);

    document.getElementById("quantity").value = getFoodQantity(foodNameWaitingToBeAdded);
    const energy = computeEnergyFromSelectedFoods();
    document.getElementById("energy").innerText = `${energy} kcal`;
}

function resetPortionFoodButtonClicked() {
    setFoodQuantity(foodNameWaitingToBeAdded, 0);

    document.getElementById("quantity").value = getFoodQantity(foodNameWaitingToBeAdded);
    const energy = computeEnergyFromSelectedFoods();
    document.getElementById("energy").innerText = `${energy} kcal`;
}

export { foodClicked, addPortionFoodButtonClicked, resetPortionFoodButtonClicked }