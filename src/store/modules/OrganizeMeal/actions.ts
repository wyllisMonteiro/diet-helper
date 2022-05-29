import { Commit } from 'vuex'
import { SelectedFood } from '../../../domain/store/OrganizeMealState'
import { Food } from '../../../domain/food'

export default {
  setFoodQuantity ({ commit }: { commit: Commit }, param: SelectedFood) {
    commit('SET_FOOD_QUANTITY', param)
  },

  setCurrentFood ({ commit }: { commit: Commit }, food: Food) {
    commit('SET_CURRENT_FOOD', food)
  },

  cleanCurrentFood ({ commit }: { commit: Commit }) {
    commit('SET_CURRENT_FOOD', {})
  },

  removeCurrentFood ({ commit }: { commit: Commit }, food: Food) {
    commit('REMOVE_CURRENT_FOOD', food)
  },

  setFilter ({ commit }: { commit: Commit }, filterName: string) {
    commit('SET_FILTER', filterName)
  }
}
