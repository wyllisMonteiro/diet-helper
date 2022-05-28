import { OrganizeMealState } from '../../../domain/store/OrganizeMealState'
import { computeNutrientFromQuantity } from '../../../utils/compute'

function nutrientsFromSelectedFoods (state: OrganizeMealState, nutrientName: string) {
  const initialNutrient = 0
  return state.selectedFoods.reduce((accumulator, currentFood) => {
    const currentFoodQuantity = currentFood.quantity == null ? 0 : currentFood.quantity
    const nutritionnalValues = currentFood.food.nutritionalValues

    let nutrientVal = 0
    switch (nutrientName) {
      case 'energy':
        nutrientVal = nutritionnalValues.energy
        break
      case 'protein':
        nutrientVal = nutritionnalValues.protein
        break
      case 'lipid':
        nutrientVal = nutritionnalValues.lipid
        break
      case 'carbohydrate':
        nutrientVal = nutritionnalValues.carbohydrate
        break
    }

    const currentNutrient = computeNutrientFromQuantity(nutrientVal, nutritionnalValues.portionValue, currentFoodQuantity)

    return accumulator + currentNutrient
  }, initialNutrient)
}

export default {
  selectedFoods: (state: OrganizeMealState) => state.selectedFoods,
  currentFood: (state: OrganizeMealState) => state.currentFood,
  nutrients: (state: OrganizeMealState) => {
    return {
      energy: nutrientsFromSelectedFoods(state, 'energy'),
      protein: nutrientsFromSelectedFoods(state, 'protein'),
      lipid: nutrientsFromSelectedFoods(state, 'lipid'),
      carbohydrate: nutrientsFromSelectedFoods(state, 'carbohydrate')
    }
  },
  activeFilters: (state: OrganizeMealState) => state.activeFilters,
  hasNoActiveFilters: (state: OrganizeMealState) => {
    const filters = state.activeFilters
    return !filters.energy && !filters.protein && !filters.lipid && !filters.carbohydrate
  }
}
