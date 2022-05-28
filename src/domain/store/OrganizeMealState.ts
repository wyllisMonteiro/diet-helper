import { Food } from '../../domain/food'

export interface SelectedFood {
  food: Food,
  quantity: number
}

export interface Nutrients {
  energy: number,
  protein: number,
  lipid: number,
  carbohydrate: number
}

export interface NutrientFilters {
  energy: boolean,
  protein: boolean,
  lipid: boolean,
  carbohydrate: boolean
}

export interface OrganizeMealState {
  selectedFoods: SelectedFood[],
  currentFood: Food,
  nutrients: Nutrients,
  activeFilters: NutrientFilters
}
