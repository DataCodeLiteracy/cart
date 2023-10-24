import { css } from '@emotion/css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cart-slice'

const Item = ({ item }) => {
  const dispatch = useDispatch()
  const { title, price, description, id } = item

  const handleAddItem = () => {
    dispatch(cartActions.addItemToCart({ id, title, price }))
  }

  return (
    <li
      className={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        margin: auto;
        padding: 20px;
        background-color: gray;
        border: 1px solid black;
        margin-top: 30px;
      `}
    >
      <div>
        <h2>{title}</h2>
        <div>{description}</div>
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          height: 80px;
          justify-content: space-between;
          & div {
            background-color: black;
            color: white;
            padding: 5px;
            border-radius: 15px;
          }
          & button {
            cursor: pointer;
          }
        `}
      >
        <div>{price}원</div>
        <button onClick={handleAddItem}>카트 추가</button>
      </div>
    </li>
  )
}

export default Item
