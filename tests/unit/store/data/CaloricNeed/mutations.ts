import { CaloricNeedState, FieldParam, FieldParamActivity } from '@/domain/store/CaloricNeedState'

export default {
  SET_SELECTED_CARD_INDEX (state: CaloricNeedState, newIndex: number) {
    state.selectedCardIndex = newIndex < 0 ? 0 : newIndex
  },

  SET_ACTIVITY (state: CaloricNeedState, newState: FieldParamActivity) {
    state.activityName = newState.activityName
    state.activityIndex = newState.activityIndex < 0 ? 0 : newState.activityIndex
  },

  SET_FIELD_VALUE (state: CaloricNeedState, param: FieldParam) {
    if (state.fields[param.field] === undefined) {
      return
    }

    state.fields[param.field] = param.value
  }
}
