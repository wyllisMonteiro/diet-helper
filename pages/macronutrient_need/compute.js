const MIN_WEIGHT = 30;
const MAX_WEIGHT = 500;

const computeProtein = (weight) => {
    if (weight < MIN_WEIGHT || weight > MAX_WEIGHT)
        throw new Error(`Poids doit être compris entre ${MIN_WEIGHT} et ${MAX_WEIGHT} kg`);

    return 2 * weight;
}

const computeLipid = (weight) => {
    if (weight < MIN_WEIGHT || weight > MAX_WEIGHT)
        throw new Error(`Poids doit être compris entre ${MIN_WEIGHT} et ${MAX_WEIGHT} kg`);

    return 1 * weight;
}

const computeCarbohydrate = (protein, lipid, caloricNeed) => {
    const proteinKCAL = protein * 4; // 1g de protéine = 4kcal
    const lipidKCAL = lipid * 9; // 1g de lipide = 9kcal
    const carbohydrateKCAL = caloricNeed - (proteinKCAL + lipidKCAL);
    return carbohydrateKCAL / 4; // 1g de glucide = 4kcal
}

export { computeProtein, computeLipid, computeCarbohydrate }