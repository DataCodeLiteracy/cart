import { css } from '@emotion/css'
import Header from './components/Header'
import ItemList from './components/ItemList'
import CartModal from './components/CartModal'
import { useSelector } from 'react-redux'

function App() {
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible)

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
