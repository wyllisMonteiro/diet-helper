import {
  computeBMR,
  computeCoeffActivity,
  computeDryMassNeedCaloricNeed,
  computeWeightGainCaloricNeed,
  computeProtein,
  computeLipid,
  computeCarbohydrate,
  computeNutrientFromQuantity
} from '../../../src/utils/compute'

describe('computeBMR', () => {
  it('age negative value for male gender', () => {
    const expectedBRM = 1772.5

    const age = -1
    const weight = 77
    const size = 174
    const BRM = computeBMR(age, weight, size, 'male')
    expect(BRM).toEqual(expectedBRM)
  })

  it('age positive value for male gender', () => {
    const expectedBRM = 1747.5

    const age = 23
    const weight = 77
    const size = 174
    const BRM = computeBMR(age, weight, size, 'male')
    expect(BRM).toEqual(expectedBRM)
  })

  it('age negative value for female gender', () => {
    const expectedBRM = 1606.5

    const age = -1
    const weight = 77
    const size = 174
    const BRM = computeBMR(age, weight, size, 'female')
    expect(BRM).toEqual(expectedBRM)
  })

  it('age positive value for female gender', () => {
    const expectedBRM = 1581.5

    const age = 23
    const weight = 77
    const size = 174
    const BRM = computeBMR(age, weight, size, 'female')
    expect(BRM).toEqual(expectedBRM)
  })

  it('weight < 30', () => {
    const age = 23
    const weight = 29
    const size = 174
    try {
      computeBMR(age, weight, size, 'male')
    } catch (err) {
      expect(err.message).toEqual('Poids doit être compris entre 30 et 500 kg')
    }
  })

  it('weight > 500', () => {
    const age = 23
    const weight = 501
    const size = 174
    try {
      computeBMR(age, weight, size, 'male')
    } catch (err) {
      expect(err.message).toEqual('Poids doit être compris entre 30 et 500 kg')
    }
  })

  it('size < 80', () => {
    const age = 23
    const weight = 77
    const size = 79
    try {
      computeBMR(age, weight, size, 'male')
    } catch (err) {
      expect(err.message).toEqual('Taille doit être compris entre 80 et 280 cm')
    }
  })

  it('size > 200', () => {
    const age = 23
    const weight = 77
    const size = 201
    try {
      computeBMR(age, weight, size, 'male')
    } catch (err) {
      expect(err.message).toEqual('Taille doit être compris entre 80 et 280 cm')
    }
  })
})

describe('computeCoeffActivity', () => {
  it('unknown coeffActivityName', () => {
    const BMR = 1500
    const coeffActivityName = 'unknown'
    try {
      computeCoeffActivity(BMR, coeffActivityName)
    } catch (ex) {
      expect(ex.message).toEqual('Activité inconnu pour effectuer le calcul')
    }
  })

  it('BMR < 0', () => {
    const BMR = -1
    const coeffActivityName = 'no'
    try {
      computeCoeffActivity(BMR, coeffActivityName)
    } catch (ex) {
      expect(ex.message).toEqual('Le besoin calorique doit être supérieur à 0')
    }
  })

  it('success', () => {
    const expectedValue = 1650

    const BMR = 1500
    const coeffActivityName = 'no'
    const caloricNeed = computeCoeffActivity(BMR, coeffActivityName)
    expect(caloricNeed).toEqual(expectedValue)
  })
})

describe('computeDryMassNeedCaloricNeed', () => {
  it('BMR < 0', () => {
    const BMR = -1
    try {
      computeDryMassNeedCaloricNeed(BMR)
    } catch (ex) {
      expect(ex.message).toEqual('Le besoin calorique doit être supérieur à 0')
    }
  })

  it('success', () => {
    const expectedValue = 1275

    const BMR = 1500
    const dryMassNeedCaloricNeed = computeDryMassNeedCaloricNeed(BMR)
    expect(dryMassNeedCaloricNeed).toEqual(expectedValue)
  })
})

describe('computeWeightGainCaloricNeed', () => {
  it('BMR < 0', () => {
    const BMR = -1
    try {
      computeWeightGainCaloricNeed(BMR)
    } catch (ex) {
      expect(ex.message).toEqual('Le besoin calorique doit être supérieur à 0')
    }
  })

  it('success', () => {
    const expectedValue = 1725

    const BMR = 1500
    const dryMassNeedCaloricNeed = computeWeightGainCaloricNeed(BMR)
    expect(dryMassNeedCaloricNeed).toEqual(expectedValue)
  })
})

describe('computeProtein', () => {
  it('weight < 0', () => {
    const weight = -1
    try {
      computeProtein(weight)
    } catch (ex) {
      expect(ex.message).toEqual('Poids doit être compris entre 30 et 500 kg')
    }
  })

  it('weight > 500', () => {
    const weight = 501
    try {
      computeProtein(weight)
    } catch (ex) {
      expect(ex.message).toEqual('Poids doit être compris entre 30 et 500 kg')
    }
  })

  it('success', () => {
    const expectedValue = 100

    const weight = 50
    const proteinNeed = computeProtein(weight)
    expect(proteinNeed).toEqual(expectedValue)
  })
})

describe('computeLipid', () => {
  it('weight < 0', () => {
    const weight = -1
    try {
      computeLipid(weight)
    } catch (ex) {
      expect(ex.message).toEqual('Poids doit être compris entre 30 et 500 kg')
    }
  })

  it('weight > 500', () => {
    const weight = 501
    try {
      computeLipid(weight)
    } catch (ex) {
      expect(ex.message).toEqual('Poids doit être compris entre 30 et 500 kg')
    }
  })

  it('success', () => {
    const expectedValue = 50

    const weight = 50
    const proteinNeed = computeLipid(weight)
    expect(proteinNeed).toEqual(expectedValue)
  })
})

describe('computeCarbohydrate', () => {
  it('protein < 0', () => {
    const protein = -1
    const lipid = 77
    const caloricNeed = 1500
    try {
      computeCarbohydrate(protein, lipid, caloricNeed)
    } catch (ex) {
      expect(ex.message).toEqual('Les protéines doivent être supérieure à 0 g')
    }
  })

  it('lipid < 0', () => {
    const protein = 144
    const lipid = -1
    const caloricNeed = 1500
    try {
      computeCarbohydrate(protein, lipid, caloricNeed)
    } catch (ex) {
      expect(ex.message).toEqual('Les lipides doivent être supérieure à 0 g')
    }
  })

  it('caloric need < 0', () => {
    const protein = 144
    const lipid = 77
    const caloricNeed = -1
    try {
      computeCarbohydrate(protein, lipid, caloricNeed)
    } catch (ex) {
      expect(ex.message).toEqual('Le besoin calorique doit être supérieure à 0 g')
    }
  })

  it('success', () => {
    const expectedValue = 162.5

    const protein = 100
    const lipid = 50
    const caloricNeed = 1500
    const proteinNeed = computeCarbohydrate(protein, lipid, caloricNeed)
    expect(proteinNeed).toEqual(expectedValue)
  })
})

describe('computeNutrientFromQuantity', () => {
  it('nutrientValue < 0', () => {
    const nutrientValue = -5
    const baseQuantity = 5
    const quantity = 5
    try {
      computeNutrientFromQuantity(nutrientValue, baseQuantity, quantity)
    } catch (ex) {
      expect(ex.message).toEqual('La valeur nutritionnelle doit être supérieure à 0 g')
    }
  })

  it('baseQuantity < 0', () => {
    const nutrientValue = 5
    const baseQuantity = -5
    const quantity = 5
    try {
      computeNutrientFromQuantity(nutrientValue, baseQuantity, quantity)
    } catch (ex) {
      expect(ex.message).toEqual('La quantité de base doit être supérieure à 0 g')
    }
  })

  it('quantity < 0', () => {
    const nutrientValue = 5
    const baseQuantity = 5
    const quantity = -5
    try {
      computeNutrientFromQuantity(nutrientValue, baseQuantity, quantity)
    } catch (ex) {
      expect(ex.message).toEqual('La quantité doit être supérieure à 0 g')
    }
  })

  it('success', () => {
    const expectedValue = 200

    const nutrientValue = 10
    const baseQuantity = 5
    const quantity = 100
    const proteinNeed = computeNutrientFromQuantity(nutrientValue, baseQuantity, quantity)
    expect(proteinNeed).toEqual(expectedValue)
  })
})
