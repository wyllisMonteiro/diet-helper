import { Commit } from 'vuex'
import { CaloricNeedFields, FieldParam } from '../../../domain/store/CaloricNeedState'

export default {
  setSelectedCardIndex ({ commit }: { commit: Commit }, newIndex: number) {
    commit('SET_SELECTED_CARD_INDEX', newIndex)
  },

  setActivity ({ commit }: { commit: Commit }, param: CaloricNeedFields) {
    commit('SET_ACTIVITY', param)
  },

  setField ({ commit }: { commit: Commit }, param: FieldParam) {
    commit('SET_FIELD_VALUE', param)
  }
}
