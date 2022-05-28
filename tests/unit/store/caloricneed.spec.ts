import { state } from './data/CaloricNeed/state'
import getters from './data/CaloricNeed/getters'
import mutations from './data/CaloricNeed/mutations'

describe('getters', () => {
  it('selectedCardIndex : default value 0', () => {
    const expectedValue = 0
    const selectedCardIndex = getters.selectedCardIndex(state)
    expect(selectedCardIndex).toEqual(expectedValue)
  })

  it('selectedCardIndex : value 1', () => {
    const expectedValue = 1
    state.selectedCardIndex = expectedValue
    const selectedCardIndex = getters.selectedCardIndex(state)
    expect(selectedCardIndex).toEqual(expectedValue)
  })

  it('activityName : default value medium', () => {
    const expectedValue = 'medium'
    const selectedCardIndex = getters.activityName(state)
    expect(selectedCardIndex).toEqual(expectedValue)
  })

  it('activityName : value test', () => {
    const expectedValue = 'test'
    state.activityName = expectedValue
    const activityName = getters.activityName(state)
    expect(activityName).toEqual(expectedValue)
  })

  it('activityIndex : default value 2', () => {
    const expectedValue = 2
    const activityIndex = getters.activityIndex(state)
    expect(activityIndex).toEqual(expectedValue)
  })

  it('activityIndex : value 1', () => {
    const expectedValue = 1
    state.activityIndex = expectedValue
    const activityIndex = getters.activityIndex(state)
    expect(activityIndex).toEqual(expectedValue)
  })

  it('fields : default value 0', () => {
    const expectedValue = 0
    const fields = getters.fields(state)
    expect(fields.age).toEqual(expectedValue)
    expect(fields.weight).toEqual(expectedValue)
    expect(fields.size).toEqual(expectedValue)
  })

  it('fields : age value 23', () => {
    const expectedAgeValue = 23
    const expectedValue = 0

    state.fields.age = expectedAgeValue

    const fields = getters.fields(state)
    expect(fields.age).toEqual(expectedAgeValue)
    expect(fields.weight).toEqual(expectedValue)
    expect(fields.size).toEqual(expectedValue)
  })

  it('field : default weight value 0', () => {
    const expectedValue = 0
    const expectedField = 'weight'
    const field = getters.field(state, expectedField)
    expect(field).toEqual(expectedValue)
  })

  it('field : weight value 23', () => {
    const expectedWeightValue = 77
    const expectedField = 'weight'

    state.fields.weight = expectedWeightValue

    const field = getters.field(state, expectedField)
    expect(field).toEqual(expectedWeightValue)
  })

  it('field : unknown field', () => {
    const expectedAgeValue = 23
    const expectedField = 'test'

    const field = getters.field(state, expectedField)
    expect(field).toEqual(expectedAgeValue)
  })
})
