import { css } from '@emotion/css'
import CartItem from './CartItem'

const CartModal = () => {
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
          justify-content: center;
          width: 100%;
        `}
      >
        <CartItem />
      </ul>
    </div>
  )
}

export default CartModal
