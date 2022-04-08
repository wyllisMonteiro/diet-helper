const MIN_AGE = 18;

const MIN_WEIGHT = 30;
const MAX_WEIGHT = 500;

const MIN_SIZE = 80;
const MAX_SIZE = 280;

// Basal Metabolic Rate (métabolisme de base)
const computeBMR = (age, weight, size) => {
    if (age < MIN_AGE)
        age = MIN_AGE;

    if (weight < MIN_WEIGHT || weight > MAX_WEIGHT)
        throw new Error(`Poids doit être compris entre ${MIN_WEIGHT} et ${MAX_WEIGHT} kg`);

    if (size < MIN_SIZE || size > MAX_SIZE)
        throw new Error(`Taille doit être compris entre ${MIN_SIZE} et ${MAX_SIZE} cm`);

    // using  Mifflin St-Jeor equation
    return 10 * weight + 6.25 * size - 5 * age + 5;
}

const COEFF_ACTIVITY = {
    no: 1.1,
    low: 1.2,
    medium: 1.3,
    strong: 1.4,
    extreme: 1.5
}

const computeCoeffActivity = (bmr, coeffActivityName) => {
    const coeff = COEFF_ACTIVITY[coeffActivityName];
    if (coeff == null)
        throw new Error(`Activité inconnu pour effectuer le calcul`);

    return bmr * coeff;
}

const computeDryMassNeedCaloricNeed = (caloricNeed) => {
    return caloricNeed - caloricNeed * 15 / 100;
}

const computeWeightGainCaloricNeed = (caloricNeed) => {
    return caloricNeed + caloricNeed * 15 / 100;
}

export { computeBMR, computeCoeffActivity, computeDryMassNeedCaloricNeed, computeWeightGainCaloricNeed }