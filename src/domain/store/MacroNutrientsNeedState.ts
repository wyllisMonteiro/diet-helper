export enum MacroNutrientsNeedKeyFields {
  AGE = 'age',
  CALORIC_NEED = 'caloric-need'
}

export interface MacroNutrientsNeedFields {
  [key: string]: number;
}

export interface FieldParam {
  field: string,
  value: number
}

export interface MacroNutrientsNeedState {
  fields: MacroNutrientsNeedFields
}
