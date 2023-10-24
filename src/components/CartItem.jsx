import { css } from '@emotion/css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cart-slice'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  const { id, title, quantity, total, price } = item

  const handleRemoveItem = () => {
    dispatch(cartActions.removeItemFromCart(id))
  }

  const handleAddItem = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price
      })
    )
  }

  return (
    <li
      className={css`
        display: flex;
        justify-content: space-between;
        background-color: blue;
        border: 1px solid black;
        margin-top: 30px;
        width: 80%;
        margin-right: 65px;
        padding: 30px;
        color: white;
      `}
    >
      <div>
        <div
          className={css`
            font-size: 20px;
          `}
        >
          {title}
        </div>
        <div
          className={css`
            & span:nth-child(2) {
              margin-left: 10px;
              font-size: 20px;
            }
          `}
        >
          <span>x</span>
          <span>{quantity}</span>
        </div>
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: end;
        `}
      >
        <div>
          <span>{total}원</span>
          <span>
            ({price}
            {' 원'}/item)
          </span>
        </div>
        <div
          className={css`
            width: 100px;
            display: flex;
            justify-content: space-around;
            & button {
              width: 40px;
            }
          `}
        >
          <button onClick={handleRemoveItem}>-</button>
          <button onClick={handleAddItem}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
