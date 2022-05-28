import { state } from './data/state'
import mutations from './data/mutations'
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

describe('mutations', () => {
  it('SET_FOOD_QUANTITY : push non existing selectedFood', () => {
    const nameFirst = 'name 1'
    const quantity = 200
    const selectedFood = {
      food: {
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
      quantity: quantity
    }

    state.selectedFoods.pop()
    state.selectedFoods.pop()

    mutations.SET_FOOD_QUANTITY(state, selectedFood)
    expect(state.selectedFoods.length).toEqual(1)
    expect(state.selectedFoods[0].food.name).toEqual(nameFirst)
    expect(state.selectedFoods[0].quantity).toEqual(quantity)
  })

  it('SET_FOOD_QUANTITY : push existing selectedFood with quantity 500', () => {
    const nameFirst = 'name 1'
    const quantity = 500
    const selectedFood = {
      food: {
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
      quantity: quantity
    }

    mutations.SET_FOOD_QUANTITY(state, selectedFood)
    expect(state.selectedFoods.length).toEqual(1)
    expect(state.selectedFoods[0].food.name).toEqual(nameFirst)
    expect(state.selectedFoods[0].quantity).toEqual(quantity)
  })

  it('SET_CURRENT_FOOD : set a food', () => {
    const currentFoodName = 'currentFood'
    const currentFood = {
      name: currentFoodName,
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
    }

    mutations.SET_CURRENT_FOOD(state, currentFood)
    expect(state.currentFood).toBe(currentFood)
  })

  it('REMOVE_CURRENT_FOOD : not food found', () => {
    const foodNameFirst = 'name 1'
    const currentFoodName = 'not found'
    const currentFood = {
      name: currentFoodName,
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
    }

    expect(state.selectedFoods.length).toEqual(1)
    expect(state.selectedFoods[0].food.name).toEqual(foodNameFirst)

    mutations.REMOVE_CURRENT_FOOD(state, currentFood)
    expect(state.selectedFoods.length).toEqual(1)
    expect(state.selectedFoods[0].food.name).toEqual(foodNameFirst)
  })

  it('REMOVE_CURRENT_FOOD : success', () => {
    const foodNameFirst = 'name 1'
    const currentFood = {
      name: foodNameFirst,
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
    }

    expect(state.selectedFoods.length).toEqual(1)
    expect(state.selectedFoods[0].food.name).toEqual(foodNameFirst)

    mutations.REMOVE_CURRENT_FOOD(state, currentFood)
    expect(state.selectedFoods.length).toEqual(0)
  })

  it('SET_FILTER : energy filter to false', () => {
    const filterName = 'energy'

    expect(state.activeFilters.energy).toEqual(true)

    mutations.SET_FILTER(state, filterName)
    expect(state.activeFilters.energy).toEqual(false)
  })

  it('SET_FILTER : energy filter to true', () => {
    const filterName = 'energy'

    expect(state.activeFilters.energy).toEqual(false)

    mutations.SET_FILTER(state, filterName)
    expect(state.activeFilters.energy).toEqual(true)
  })

  it('SET_FILTER : lipid filter to false', () => {
    const filterName = 'lipid'

    expect(state.activeFilters.lipid).toEqual(true)

    mutations.SET_FILTER(state, filterName)
    expect(state.activeFilters.lipid).toEqual(false)
  })
})
