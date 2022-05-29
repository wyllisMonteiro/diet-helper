import { CaloricNeedState } from '@/domain/store/CaloricNeedState'

export default {
  selectedCardIndex: (state: CaloricNeedState) => state.selectedCardIndex,
  activityName: (state: CaloricNeedState) => state.activityName,
  activityIndex: (state: CaloricNeedState) => state.activityIndex,
  fields: (state: CaloricNeedState) => state.fields,
  field: (state: CaloricNeedState, fieldName: string) => {
    return state.fields[fieldName] === undefined ? state.fields.age : state.fields[fieldName]
  }
}
