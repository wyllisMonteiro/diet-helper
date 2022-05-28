import { CaloricNeedState, FieldParam } from '@/domain/store/CaloricNeedState'

export default {
  SET_SELECTED_CARD_INDEX (state: CaloricNeedState, newIndex: number) {
    state.selectedCardIndex = newIndex
  },

  SET_ACTIVITY (state: CaloricNeedState, newState: CaloricNeedState) {
    state.activityName = newState.activityName
    state.activityIndex = newState.activityIndex
  },

  SET_FIELD_VALUE (state: CaloricNeedState, param: FieldParam) {
    state.fields[param.field] = param.value
  }
}
