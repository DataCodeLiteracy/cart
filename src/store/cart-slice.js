import { createSlice } from '@reduxjs/toolkit'

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://gathertown-89030-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json'
      )

      if (!response.ok) {
        throw new Error('실패')
      }

      const data = await response.json()
      return data
    }
    try {
      const cartData = await fetchData()
      console.log(cartData)
      dispatch(cartActions.replaceCart(cartData))
    } catch (error) {
      console.error(error.message)
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        'https://gathertown-89030-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json/',
        {
          method: 'PUT',
          body: JSON.stringify(cart)
        }
      )

      if (!response.ok) {
        throw new Error('실패')
      }
    }
    try {
      await sendRequest()
    } catch (error) {
      console.error(error.message)
    }
  }
}

const cartState = {
  items: [],
  totalQuantity: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity
      state.items = action.payload.items
    },
    addItemToCart(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)

      state.totalQuantity++
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice += newItem.price
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)
      state.totalQuantity--
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice -= existingItem.price
      }
    }
  }
})

export const cartActions = cartSlice.actions

export default cartSlice
