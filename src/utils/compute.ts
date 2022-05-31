import CoeffMultiplierActivity from '../domain/CoeffMultiplierActivity'

const MIN_AGE = 18

const MIN_WEIGHT = 30
const MAX_WEIGHT = 500

const MIN_SIZE = 80
const MAX_SIZE = 280

// Basal Metabolic Rate (métabolisme de base)
const computeBMR = (age: number, weight: number, size: number, gender = 'male') => {
  if (age < MIN_AGE) {
    age = MIN_AGE
  }

  if (weight < MIN_WEIGHT || weight > MAX_WEIGHT) {
    throw new Error(`Poids doit être compris entre ${MIN_WEIGHT} et ${MAX_WEIGHT} kg`)
  }

  if (size < MIN_SIZE || size > MAX_SIZE) {
    throw new Error(`Taille doit être compris entre ${MIN_SIZE} et ${MAX_SIZE} cm`)
  }

  // using  Mifflin St-Jeor equation
  if (gender === 'male') {
    return 10 * weight + 6.25 * size - 5 * age + 5
  }

  return 10 * weight + 6.25 * size - 5 * age - 161
}

const coeffMutiplierFromName: CoeffMultiplierActivity = {
  no: 1.1,
  low: 1.2,
  medium: 1.3,
  strong: 1.4,
  extreme: 1.5
}

const computeCoeffActivity = (bmr: number, coeffActivityName: string) => {
  if (bmr <= 0) {
    throw new Error('Le besoin calorique doit être supérieur à 0')
  }

  const coeff = coeffMutiplierFromName[coeffActivityName]
  if (coeff == null) {
    throw new Error('Activité inconnu pour effectuer le calcul')
  }

  return Math.round(bmr * coeff)
}

const computeDryMassNeedCaloricNeed = (caloricNeed: number) => {
  if (caloricNeed <= 0) {
    throw new Error('Le besoin calorique doit être supérieur à 0')
  }

  return caloricNeed - caloricNeed * 15 / 100
}

const computeWeightGainCaloricNeed = (caloricNeed: number) => {
  if (caloricNeed <= 0) {
    throw new Error('Le besoin calorique doit être supérieur à 0')
  }
  return caloricNeed + caloricNeed * 15 / 100
}

const computeProtein = (weight: number) => {
  if (weight < MIN_WEIGHT || weight > MAX_WEIGHT) {
    throw new Error(`Poids doit être compris entre ${MIN_WEIGHT} et ${MAX_WEIGHT} kg`)
  }

  return 2 * weight
}

const computeLipid = (weight: number) => {
  if (weight < MIN_WEIGHT || weight > MAX_WEIGHT) {
    throw new Error(`Poids doit être compris entre ${MIN_WEIGHT} et ${MAX_WEIGHT} kg`)
  }

  return 1 * weight
}

const computeCarbohydrate = (protein: number, lipid: number, caloricNeed: number) => {
  if (protein < 0) {
    throw new Error('Les protéines doivent être supérieure à 0 g')
  }

  if (lipid < 0) {
    throw new Error('Les lipides doivent être supérieure à 0 g')
  }

  if (caloricNeed < 0) {
    throw new Error('Le besoin calorique doit être supérieure à 0 g')
  }

  const proteinKCAL = protein * 4 // 1g de protéine = 4kcal
  const lipidKCAL = lipid * 9 // 1g de lipide = 9kcal
  const carbohydrateKCAL = caloricNeed - (proteinKCAL + lipidKCAL)
  return carbohydrateKCAL / 4 // 1g de glucide = 4kcal
}

const computeNutrientFromQuantity = (nutrientValue: number, baseQuantity: number, quantity: number) => {
  if (nutrientValue < 0) {
    throw new Error('La valeur nutritionnelle doit être supérieure à 0 g')
  }

  if (baseQuantity < 0) {
    throw new Error('La quantité de base doit être supérieure à 0 g')
  }

  if (quantity < 0) {
    throw new Error('La quantité doit être supérieure à 0 g')
  }

  return quantity * nutrientValue / baseQuantity
}

export {
  computeBMR,
  computeCoeffActivity,
  computeDryMassNeedCaloricNeed,
  computeWeightGainCaloricNeed,
  computeProtein,
  computeLipid,
  computeCarbohydrate,
  computeNutrientFromQuantity
}
