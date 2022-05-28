import { state } from './data/MacroNutrientsNeed/state'
import getters from './data/MacroNutrientsNeed/getters'
import mutations from './data/MacroNutrientsNeed/mutations'

describe('getters', () => {
  it('fields : default value 0', () => {
    const fields = getters.fields(state)
    expect(fields.weight).toEqual(0)
    expect(fields.caloric_need).toEqual(0)
  })

  it('fields : value 5', () => {
    const expectedValue = 5
    state.fields.weight = expectedValue
    state.fields.caloric_need = expectedValue
    const fields = getters.fields(state)
    expect(fields.weight).toEqual(expectedValue)
    expect(fields.caloric_need).toEqual(expectedValue)
  })

  it('field : value 5', () => {
    const expectedValue = 5
    const field = getters.field(state, 'weight')
    expect(field).toEqual(expectedValue)
  })

  it('field : value 0', () => {
    const expectedValue = 0
    state.fields.weight = expectedValue
    const field = getters.field(state, 'weight')
    expect(field).toEqual(expectedValue)
  })
})
