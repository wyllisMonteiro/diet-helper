import meats from "../../foods/meats";
import fishes from "../../foods/fishes";
import starches from "../../foods/starches";
import vegetables from "../../foods/vegetables";
import dairy from "../../foods/dairy";
import fruits from "../../foods/fruits";
import foodSupplements from "../../foods/food_supplements";

let selctedFoods = {};
const foods = {
    ...meats,
    ...fishes,
    ...starches,
    ...vegetables,
    ...dairy,
    ...fruits,
    ...foodSupplements
};

const getSelectedFoods = () => {
    return selctedFoods;
}

const getFoodQantity = (foodName) => {
    return selctedFoods[foodName] == null ? 0 : selctedFoods[foodName].quantity;
}

const setFoodQuantity = (foodName, quantity) => {
    selctedFoods[foodName] = {
        name: foodName,
        quantity: quantity
    }
}

const computEnergiesFromSelectedFoods = () => {
    return {
        energy: computeEnergyFromSelectedFoods("energy_value"),
        protein: computeEnergyFromSelectedFoods("protein"),
        lipid: computeEnergyFromSelectedFoods("lipid"),
        carbohydrate: computeEnergyFromSelectedFoods("carbohydrate")
    };
}

const computeEnergyFromSelectedFoods = (energy) => {
    const initialEnergy = 0;
    return Object.values(selctedFoods).reduce((accumulator, currentFood, index) => {
        const currentFoodQuantity = currentFood.quantity == null ? 0 : currentFood.quantity;
        const key = Object.keys(selctedFoods)[index];
        const nutritionnalValues = foods[key].nutritional_values;
        const currentEnergy = computeEnergyFromQuantity(nutritionnalValues[energy], nutritionnalValues.portion_value, currentFoodQuantity);

        return accumulator + currentEnergy
    }, initialEnergy)
}

const computeEnergyFromQuantity = (energy, portion, quantity) => {
    return quantity * energy / portion;
}

export { getSelectedFoods, getFoodQantity, setFoodQuantity, computEnergiesFromSelectedFoods }