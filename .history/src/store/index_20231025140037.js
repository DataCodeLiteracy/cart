import {
  applyMiddleware,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit'

import cartSlice from './cart-slice'
import uiSlice from './ui-slice'

const loggerMiddleware = (store) => (next) => (action) => {
  console.log('store', store)
  console.log('action', action)
  next(action)
}

const middleware = [...getDefaultMiddleware(), loggerMiddleware]

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer
  },
  middleware: middleware
})

export default store
