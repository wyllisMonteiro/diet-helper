import { FieldParam, MacroNutrientsNeedState } from '@/domain/store/MacroNutrientsNeedState'

export default {
  SET_FIELD_VALUE (state: MacroNutrientsNeedState, param: FieldParam) {
    state.fields[param.field] = param.value
  }
}
