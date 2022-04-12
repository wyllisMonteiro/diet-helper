import './style.css'

import meats from '../../foods/meats'
import fishes from '../../foods/fishes'
import starches from '../../foods/starches'
import vegetables from '../../foods/vegetables'
import dairy from '../../foods/dairy'
import fruits from '../../foods/fruits'
import foodSupplements from '../../foods/food_supplements'

import { addPortionClicked, confirmAddPortionButtonClicked, confirmResetPortionButtonClicked, filterClicked } from './events'
import { renderActiveTab, renderTab, renderCard } from './render'

const foods = {
  ...meats,
  ...fishes,
  ...starches,
  ...vegetables,
  ...dairy,
  ...fruits,
  ...foodSupplements
}

const INDEX_CARD_TO_SHOW = Object.values(meats).length + Object.values(fishes).length

const addFoodToCard = (food, index, indexCardToShowFirst) => {
  const collapseElement = document.getElementById(`${food.category}`)
  if (collapseElement == null) {
    if (index === indexCardToShowFirst) {
      document.getElementById('cards').innerHTML += renderActiveTab(food.category)
    } else {
      document.getElementById('cards').innerHTML += renderTab(food.category)
    }
  }

  const foodName = Object.keys(foods)[index]
  document.getElementById(`${food.category}`).innerHTML += renderCard(foodName, food)
}

Object.values(foods).forEach((food, index) => {
  addFoodToCard(food, index, INDEX_CARD_TO_SHOW)
})

const cards = document.querySelectorAll('.card-link-add')
cards.forEach(card => {
  card.addEventListener('click', addPortionClicked)
})

const addPortionFoodModalButton = document.getElementById('desired-portion')
addPortionFoodModalButton.addEventListener('click', confirmAddPortionButtonClicked)

const resetPortionFoodModalButton = document.getElementById('reset-portion')
resetPortionFoodModalButton.addEventListener('click', confirmResetPortionButtonClicked)

const filters = document.querySelectorAll('.filter')
filters.forEach(filter => {
  filter.addEventListener('click', filterClicked)
})
