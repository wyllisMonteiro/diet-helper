import { MacroNutrientsNeedState } from '@/domain/store/MacroNutrientsNeedState'

export default {
  fields: (state: MacroNutrientsNeedState) => state.fields,
  field: (state: MacroNutrientsNeedState, fieldName: string) => state.fields[fieldName]
}
