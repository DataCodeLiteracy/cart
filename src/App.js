import { css } from '@emotion/css'
import Header from './components/Header'
import ItemList from './components/ItemList'
import CartModal from './components/CartModal'

function App() {
  return (
    <div
      className={css`
        width: 800px;
        margin: auto;
        margin-top: 30px;
      `}
    >
      <Header />
      <CartModal />
      <ItemList />
    </div>
  )
}

export default App
