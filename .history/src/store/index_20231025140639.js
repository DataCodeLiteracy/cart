import { configureStore } from '@reduxjs/toolkit'

import cartSlice from './cart-slice'
import uiSlice from './ui-slice'
import thunk from 'redux-thunk'

const loggerMiddleware = (store) => (next) => (action) => {
  console.log('store', store)
  console.log('action', action)
  next(action)
}

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer
  },
  middleware: [thunk, loggerMiddleware] // 미들웨어 배열로 설정
})

export default store
