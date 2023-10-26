import { css } from '@emotion/css'
import Header from './components/Header'
import ItemList from './components/ItemList'
import CartModal from './components/CartModal'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCartData, sendCartData } from './store/cart-slice'

// 처음에 한 번은 데이터를 보내지 않도록 해야함.. initial일 때 보내지 않게.
let isInitial = true

function App() {
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible)
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   fetch(
  //     'https://gathertown-89030-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json/',
  //     {
  //       method: 'PUT',
  //       body: JSON.stringify(cart)
  //     }
  //   )
  // }, [cart])

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }

    dispatch(sendCartData(cart))
  }, [cart, dispatch])

  return (
    <div
      className={css`
        width: 800px;
        margin: auto;
        margin-top: 30px;
      `}
    >
      <Header />
      {cartIsVisible && <CartModal />}
      <ItemList />
    </div>
  )
}

export default App
