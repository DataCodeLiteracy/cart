import { css } from '@emotion/css'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const CartModal = () => {
  const cartItems = useSelector((state) => state.cart.items)

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: auto;
        background-color: #7a7ad6;
      `}
    >
      <h2
        className={css`
          text-align: center;
        `}
      >
        당신의 쇼핑카트
      </h2>
      <ul
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
        `}
      >
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price
            }}
          />
        ))}
      </ul>
    </div>
  )
}

export default CartModal
