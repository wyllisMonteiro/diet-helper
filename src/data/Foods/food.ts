import Meats from './meats'
import Fishes from './fishes'
import Starches from './starches'
import Vegetables from './vegetables'
import Dairy from './dairy'
import Fruits from './fruits'
import FoodSupplements from './food_supplements'

import { FoodCategory } from '../../domain/food'

export const categories: FoodCategory[] = [
  {
    categorieName: 'Viandes',
    id: 'meats',
    ariaLabelledBy: 'meats-tab',
    foods: Meats
  },
  {
    categorieName: 'Poissons',
    id: 'fishes',
    ariaLabelledBy: 'fishes-tab',
    foods: Fishes
  },
  {
    categorieName: 'Féculents',
    id: 'starches',
    ariaLabelledBy: 'starches-tab',
    foods: Starches
  },
  {
    categorieName: 'Légumes',
    id: 'vegetables',
    ariaLabelledBy: 'vegetables-tab',
    foods: Vegetables
  },
  {
    categorieName: 'Laitages',
    id: 'dairy',
    ariaLabelledBy: 'dairy-tab',
    foods: Dairy
  },
  {
    categorieName: 'Fruits',
    id: 'fruits',
    ariaLabelledBy: 'fruits-tab',
    foods: Fruits
  },
  {
    categorieName: 'Compléments alimentaires',
    id: 'food-supplements',
    ariaLabelledBy: 'food-supplements-tab',
    foods: FoodSupplements
  }
]
