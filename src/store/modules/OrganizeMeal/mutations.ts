import { OrganizeMealState, SelectedFood } from '../../../domain/store/OrganizeMealState'
import { Food } from '../../../domain/food'

export default {
  SET_FOOD_QUANTITY (state: OrganizeMealState, param: SelectedFood) {
    for (let index = 0; index < Object.values(state.selectedFoods).length; index++) {
      const food = state.selectedFoods[index]
      if (food.food.name === param.food.name) {
        state.selectedFoods[index].quantity = param.quantity
        return
      }
    }

    state.selectedFoods.push({
      food: param.food,
      quantity: param.quantity
    })
  },

  SET_CURRENT_FOOD (state: OrganizeMealState, food: Food) {
    state.currentFood = food
  },

  REMOVE_CURRENT_FOOD (state: OrganizeMealState, food: Food) {
    state.selectedFoods = state.selectedFoods.filter(item => item.food.name !== food.name)
  },

  SET_FILTER (state: OrganizeMealState, filterName: string) {
    switch (filterName) {
      case 'energy':
        state.activeFilters.energy = !state.activeFilters.energy
        break
      case 'protein':
        state.activeFilters.protein = !state.activeFilters.protein
        break
      case 'lipid':
        state.activeFilters.lipid = !state.activeFilters.lipid
        break
      case 'carbohydrate':
        state.activeFilters.carbohydrate = !state.activeFilters.carbohydrate
        break
    }
  }
}
