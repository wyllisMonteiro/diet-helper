import {
  getSelectedFoods,
  getFoodQantity,
  setFoodQuantity,
  computeEnergiesFromSelectedFoods
} from './compute'

import { renderRemoveButtonToCard, renderNutritionalValues, renderFoodsList } from './render'

let foodNameWaitingToBeAdded = ''

function addPortionClicked () {
  foodNameWaitingToBeAdded = this.getAttribute('data-food')
  document.getElementById('quantity').value = getFoodQantity(foodNameWaitingToBeAdded)
}

function resetPortionClicked () {
  foodNameWaitingToBeAdded = this.getAttribute('data-food')
  confirmResetPortionButtonClicked()
}

function confirmAddPortionButtonClicked () {
  const quantity = document.getElementById('quantity').value
  setFoodQuantity(foodNameWaitingToBeAdded, quantity)
  document.getElementById('quantity').value = quantity

  const addButton = document.querySelector(`.card-link-add[data-food='${foodNameWaitingToBeAdded}']`)

  if (quantity > 0) {
    const removeButton = document.querySelector(`.card-link-rm[data-food='${foodNameWaitingToBeAdded}']`)
    if (removeButton == null) {
      addButton.parentElement.innerHTML += renderRemoveButtonToCard(foodNameWaitingToBeAdded)
      addButton.addEventListener('click', addPortionClicked)
      document.querySelector(`.card-link-rm[data-food='${foodNameWaitingToBeAdded}']`)
        .addEventListener('click', resetPortionClicked)
    }

    document.querySelector(`.card-link-add[data-food='${foodNameWaitingToBeAdded}']`).parentElement.parentElement.classList.add('card-selected')
    filterClicked()
  } else {
    addButton.parentElement.parentElement.classList.remove('card-selected')
  }

  const nutritionalValues = computeEnergiesFromSelectedFoods()
  document.getElementById('nutritionnal-values').innerHTML = renderNutritionalValues(nutritionalValues)
}

function confirmResetPortionButtonClicked () {
  setFoodQuantity(foodNameWaitingToBeAdded, 0)
  document.getElementById('quantity').value = 0
  document.querySelector(`.card-link-add[data-food='${foodNameWaitingToBeAdded}']`).parentElement.parentElement.classList.remove('card-selected')
  document.querySelector(`.card-link-rm[data-food='${foodNameWaitingToBeAdded}'`).remove()
  document.querySelector(`#foods-list-items li[data-item-food="${foodNameWaitingToBeAdded}"]`).remove()
  const listElement = document.querySelector(`#foods-list-items ul[data-item-food="${foodNameWaitingToBeAdded}"]`)
  if (listElement) { listElement.remove() }

  const nutritionalValues = computeEnergiesFromSelectedFoods()
  document.getElementById('nutritionnal-values').innerHTML = renderNutritionalValues(nutritionalValues)
}

function filterClicked () {
  const selectedFoods = Object.values(getSelectedFoods())
  const foodsListElement = renderFoodsList(selectedFoods)
  document.getElementById('foods-list-items').innerHTML = foodsListElement
}

export { addPortionClicked, resetPortionClicked, confirmAddPortionButtonClicked, confirmResetPortionButtonClicked, filterClicked }
