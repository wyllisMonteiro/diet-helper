import { getFoodQantity, setFoodQuantity, computeEnergyFromSelectedFoods } from "./compute"

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
        const removeButton = document.querySelector(`.card-link-rm[data-food='${foodNameWaitingToBeAdded}'`);
        if (removeButton == null ) {
            document.querySelector(`.card-link-add[data-food='${foodNameWaitingToBeAdded}']`).parentElement.innerHTML += `<a href="#" data-food='${foodNameWaitingToBeAdded}'] style="color: darkred;" class="card-link card-link-rm">Retirer</a>`;
            document.querySelector(`.card-link-rm[data-food='${foodNameWaitingToBeAdded}']`)
                    .addEventListener("click", resetPortionClicked);
        }
        
        document.querySelector(`.card-link-add[data-food='${foodNameWaitingToBeAdded}']`).parentElement.parentElement.classList.add("card-selected");
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

    const energy = computeEnergyFromSelectedFoods();
    document.getElementById("energy").innerText = `${energy} kcal`;
}

export { addPortionClicked, resetPortionClicked, confirmAddPortionButtonClicked, confirmResetPortionButtonClicked }