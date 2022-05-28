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

describe('mutations', () => {
  it('SET_SELECTED_CARD_INDEX : value 5', () => {
    const expectedValue = 5

    expect(state.selectedCardIndex).toEqual(1)

    mutations.SET_SELECTED_CARD_INDEX(state, expectedValue)
    expect(state.selectedCardIndex).toEqual(expectedValue)
  })

  it('SET_SELECTED_CARD_INDEX : value < 0', () => {
    const expectedValue = 0

    expect(state.selectedCardIndex).toEqual(5)

    mutations.SET_SELECTED_CARD_INDEX(state, -1)
    expect(state.selectedCardIndex).toEqual(expectedValue)
  })

  it('SET_ACTIVITY : value 2', () => {
    const activityName = 'test 2'
    const expectedValue = 8

    expect(state.activityIndex).toEqual(1)
    expect(state.activityName).toEqual('test')

    mutations.SET_ACTIVITY(state, {
      activityName: activityName,
      activityIndex: expectedValue
    })
    expect(state.activityIndex).toEqual(expectedValue)
    expect(state.activityName).toEqual(activityName)
  })

  it('SET_ACTIVITY : value < 0', () => {
    const activityName = 'test 3'
    const expectedValue = 0

    expect(state.activityIndex).toEqual(8)
    expect(state.activityName).toEqual('test 2')

    mutations.SET_ACTIVITY(state, {
      activityName: activityName,
      activityIndex: -1
    })
    expect(state.activityIndex).toEqual(expectedValue)
    expect(state.activityName).toEqual(activityName)
  })

  it('SET_FIELD_VALUE : size value 174', () => {
    expect(state.fields.size).toEqual(0)

    const field = 'size'
    const expectedValue = 174
    mutations.SET_FIELD_VALUE(state, {
      field: field,
      value: expectedValue
    })
    expect(state.fields.size).toEqual(expectedValue)
  })

  it('SET_FIELD_VALUE : no update', () => {
    const age = 23
    const size = 174
    const weight = 77
    expect(state.fields.age).toEqual(age)
    expect(state.fields.size).toEqual(size)
    expect(state.fields.weight).toEqual(weight)

    const field = 'test'
    const expectedValue = 555
    mutations.SET_FIELD_VALUE(state, {
      field: field,
      value: expectedValue
    })
    expect(state.fields.age).toEqual(age)
    expect(state.fields.size).toEqual(size)
    expect(state.fields.weight).toEqual(weight)
  })
})
