import meats from "../../foods/meats";
import fishes from "../../foods/fishes";
import starches from "../../foods/starches";
import vegetables from "../../foods/vegetables";
import dairy from "../../foods/dairy";
import fruits from "../../foods/fruits";

let selctedFoods = {};
const foods = {
    ...meats,
    ...fishes,
    ...starches,
    ...vegetables,
    ...dairy,
    ...fruits,
};

const getFoodQantity = (foodName) => {
    return selctedFoods[foodName] == null ? 0 : selctedFoods[foodName].quantity;
}

const setFoodQuantity = (foodName, quantity) => {
    selctedFoods[foodName] = {
        quantity: quantity
    }
}

const computeEnergyFromSelectedFoods = () => {
    const initialEnergy = 0;
    return Object.values(selctedFoods).reduce((accumulator, currentFood, index) => {
        const currentFoodQuantity = currentFood.quantity == null ? 0 : currentFood.quantity;
        const key = Object.keys(selctedFoods)[index];
        const currentEnergy = computeFoodEnergy(foods[key], currentFoodQuantity);

        return accumulator + currentEnergy
    }, initialEnergy)
}

const computeFoodEnergy = (food, quantity) => {
    const nutritionalValues = food.nutritional_values;
    return quantity * nutritionalValues.energy_value / nutritionalValues.portion_value;
}

export { getFoodQantity, setFoodQuantity, computeEnergyFromSelectedFoods, computeFoodEnergy }