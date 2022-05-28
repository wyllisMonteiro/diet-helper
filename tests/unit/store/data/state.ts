import { SelectedFood } from '@/domain/store/OrganizeMealState'

export const state = {
  selectedFoods: Array<SelectedFood>(),
  currentFood: {
    name: 'name 1',
    title: 'string',
    weightValue: null,
    weightUnity: 'string',
    nutriScore: 'string',
    companyName: 'string',
    nutritionalValues: {
      portionValue: 0,
      portionUnity: 'string',
      energy: 0,
      energyUnity: 'string',
      protein: 0,
      lipid: 0,
      carbohydrate: 0
    }
  },
  nutrients: {
    energy: 0,
    protein: 0,
    lipid: 0,
    carbohydrate: 0
  },
  activeFilters: {
    energy: false,
    protein: false,
    lipid: false,
    carbohydrate: false
  }
}
