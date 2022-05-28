import { state } from './data/state'
import { mutations } from './data/mutations'
import getters from './data/getters'

describe('getters', () => {
  it('selectedFoods : empty array', () => {
    const selectedFoods = getters.selectedFoods(state)
    expect(selectedFoods.length).toEqual(0)
  })

  it('selectedFoods : array 1 value && check name', () => {
    const foodNameFirstItem = 'name 1'
    state.selectedFoods = [...state.selectedFoods, {
      food: {
        name: foodNameFirstItem,
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
      quantity: 100
    }]
    state.selectedFoods[0].food.name = foodNameFirstItem

    const selectedFoods = getters.selectedFoods(state)
    expect(selectedFoods.length).toEqual(1)
    expect(selectedFoods[0].food.name).toEqual(foodNameFirstItem)
  })

  it('selectedFoods : array 2 values && check name', () => {
    const foodNameFirstItem = 'name 1'
    const foodNameSecondItem = 'name 2'
    state.selectedFoods = [...state.selectedFoods, {
      food: {
        name: foodNameSecondItem,
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
      quantity: 100
    }]

    const selectedFoods = getters.selectedFoods(state)
    expect(selectedFoods.length).toEqual(2)
    expect(selectedFoods[0].food.name).toEqual(foodNameFirstItem)
    expect(selectedFoods[1].food.name).toEqual(foodNameSecondItem)
  })

  it('currentFood : check name', () => {
    const foodNameFirstItem = 'name 1'

    const food = getters.currentFood(state)
    expect(food.name).toEqual(foodNameFirstItem)
  })

  it('nutrients default value 0', () => {
    const nutrients = getters.nutrients(state)

    expect(nutrients.energy).toEqual(0)
    expect(nutrients.protein).toEqual(0)
    expect(nutrients.lipid).toEqual(0)
    expect(nutrients.carbohydrate).toEqual(0)
  })

  it('nutrients value 5', () => {
    const expectedValue = 5

    const nutrients = getters.nutrients(state)
    nutrients.energy = expectedValue
    nutrients.protein = expectedValue
    nutrients.lipid = expectedValue
    nutrients.carbohydrate = expectedValue

    expect(nutrients.energy).toEqual(expectedValue)
    expect(nutrients.protein).toEqual(expectedValue)
    expect(nutrients.lipid).toEqual(expectedValue)
    expect(nutrients.carbohydrate).toEqual(expectedValue)
  })

  it('activeFilters default value false', () => {
    const expectedValue = false

    const filters = getters.activeFilters(state)
    filters.energy = expectedValue
    filters.protein = expectedValue
    filters.lipid = expectedValue
    filters.carbohydrate = expectedValue

    expect(filters.energy).toEqual(expectedValue)
    expect(filters.protein).toEqual(expectedValue)
    expect(filters.lipid).toEqual(expectedValue)
    expect(filters.carbohydrate).toEqual(expectedValue)
  })

  it('activeFilters default value true', () => {
    const expectedValue = true

    const filters = getters.activeFilters(state)
    filters.energy = expectedValue
    filters.protein = expectedValue
    filters.lipid = expectedValue
    filters.carbohydrate = expectedValue

    expect(filters.energy).toEqual(expectedValue)
    expect(filters.protein).toEqual(expectedValue)
    expect(filters.lipid).toEqual(expectedValue)
    expect(filters.carbohydrate).toEqual(expectedValue)
  })

  it('hasNoActiveFilters default value true', () => {
    const expectedValue = true
    const filters = getters.activeFilters(state)
    filters.energy = false
    filters.protein = false
    filters.lipid = false
    filters.carbohydrate = false

    const hasNoActiveFilters = getters.hasNoActiveFilters(state)
    expect(hasNoActiveFilters).toEqual(expectedValue)
  })

  it('hasNoActiveFilters values false', () => {
    const expectedValue = false
    const filters = getters.activeFilters(state)
    filters.energy = true
    filters.protein = true
    filters.lipid = true
    filters.carbohydrate = true

    const hasNoActiveFilters = getters.hasNoActiveFilters(state)
    expect(hasNoActiveFilters).toEqual(expectedValue)
  })

  it('hasNoActiveFilters values false false false true', () => {
    const expectedValue = false
    const filters = getters.activeFilters(state)
    filters.energy = false
    filters.protein = false
    filters.lipid = false
    filters.carbohydrate = true

    const hasNoActiveFilters = getters.hasNoActiveFilters(state)
    expect(hasNoActiveFilters).toEqual(expectedValue)
  })

  it('hasNoActiveFilters values true true true false', () => {
    const expectedValue = false
    const filters = getters.activeFilters(state)
    filters.energy = true
    filters.protein = true
    filters.lipid = true
    filters.carbohydrate = false

    const hasNoActiveFilters = getters.hasNoActiveFilters(state)
    expect(hasNoActiveFilters).toEqual(expectedValue)
  })
})
