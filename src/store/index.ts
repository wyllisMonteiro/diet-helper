import { createStore, createLogger } from 'vuex'

import CaloricNeed from './modules/CaloricNeed/index'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    CaloricNeed
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
