import { Food } from '@/domain/food'
import { Commit } from 'vuex'

export const actions = {
  removeCurrentFood ({ commit }: { commit: Commit }, food: Food) {
    commit('REMOVE_CURRENT_FOOD', food)
  }
}
