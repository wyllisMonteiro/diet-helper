const computeFoodEnergy = (food, desiredPortion) => {
    const nutritionalValues = food.nutritional_values;
    return desiredPortion * nutritionalValues.energy_value / nutritionalValues.portion_value;
}

export { computeFoodEnergy }