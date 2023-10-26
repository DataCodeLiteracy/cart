import { applyMiddleware, configureStore } from '@reduxjs/toolkit'

import cartSlice from './cart-slice'
import uiSlice from './ui-slice'

const loggerMiddleware = (store) => (next) => (action) => {
  next(action)
}

const middleware = applyMiddleware(loggerMiddleware)

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer
  }
})

export default store
