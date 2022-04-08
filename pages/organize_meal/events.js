import { computeFoodEnergy } from "./compute"
import starches from "../../foods/starches";

let energy = 0;
let foodNameWaitingToBeAdded = "";

function foodClicked() {
    foodNameWaitingToBeAdded = this.getAttribute("data-food");
}

function addPortionFoodButtonClicked() {
    const desiredPortion = document.getElementById("quatity").value;
    if (desiredPortion != 0) {
        energy += computeFoodEnergy(starches[foodNameWaitingToBeAdded], desiredPortion);
        //card.classList.add("card-selected");
    } else {
        energy = 0;
        //card.classList.remove("card-selected");
    }

    document.getElementById("quatity").value = 0;
    document.getElementById("energy").innerText = `${energy} kcal`;
}

function resetPortionFoodButtonClicked() {
    energy = 0;
    document.getElementById("quatity").value = 0;
    document.getElementById("energy").innerText = `${energy} kcal`;
}

export { foodClicked, addPortionFoodButtonClicked, resetPortionFoodButtonClicked }