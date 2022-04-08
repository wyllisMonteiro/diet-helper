import starches from "../../foods/starches";

let selctedFoods = {};

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
        const currentEnergy = computeFoodEnergy(starches[key], currentFoodQuantity);

        return accumulator + currentEnergy
    }, initialEnergy)
}

const computeFoodEnergy = (food, quantity) => {
    const nutritionalValues = food.nutritional_values;
    return quantity * nutritionalValues.energy_value / nutritionalValues.portion_value;
}

export { getFoodQantity, setFoodQuantity, computeEnergyFromSelectedFoods, computeFoodEnergy }