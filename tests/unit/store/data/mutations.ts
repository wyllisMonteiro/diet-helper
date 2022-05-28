import { Food } from '@/domain/food'
import { OrganizeMealState } from '@/domain/store/OrganizeMealState'

export const mutations = {
  REMOVE_CURRENT_FOOD (state: OrganizeMealState, food: Food) {
    state.selectedFoods = state.selectedFoods.filter(item => item.food.name !== food.name)
  }
}
