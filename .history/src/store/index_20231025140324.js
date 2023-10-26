import { applyMiddleware, configureStore } from '@reduxjs/toolkit'

import cartSlice from './cart-slice'
import uiSlice from './ui-slice'
import thunk from 'redux-thunk'

const loggerMiddleware = (store) => (next) => (action) => {
  console.log('store', store)
  console.log('action', action)
  next(action)
}

const middleware = applyMiddleware(thunk, loggerMiddleware)

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer
  },
  middleware: middleware
})

export default store
