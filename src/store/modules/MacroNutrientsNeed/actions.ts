import { Commit } from 'vuex'
import { FieldParam } from '../../../domain/store/MacroNutrientsNeedState'

export default {
  setField ({ commit }: { commit: Commit }, param: FieldParam) {
    commit('SET_FIELD_VALUE', param)
  }
}
