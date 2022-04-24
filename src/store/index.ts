import { createStore, createLogger } from 'vuex'

import CaloricNeed from './modules/CaloricNeed/index'
import MacroNutrientsNeed from './modules/MacroNutrientsNeed/index'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    CaloricNeed,
    MacroNutrientsNeed
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
