export enum CaloricNeedKeyFields {
  AGE = 'age',
  WEIGHT = 'weight',
  SIZE = 'size'
}

export interface CaloricNeedFields {
  [key: string]: number;
}

export interface FieldParam {
  field: string,
  value: number
}

export interface FieldParamActivity {
  activityName: string,
  activityIndex: number
}

export interface CaloricNeedState {
  selectedCardIndex: number,
  activityName: string,
  activityIndex: number,
  fields: CaloricNeedFields
}
