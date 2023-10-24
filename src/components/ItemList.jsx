import { css } from '@emotion/css'
import Item from './Item'

const ItemList = () => {
  return (
    <div
      className={css`
        margin: auto;
        & p {
          text-align: center;
          font-size: 25px;
          font-weight: bold;
        }
      `}
    >
      <p>좋아하는 제품 구매</p>
      <ul>
        <Item />
      </ul>
    </div>
  )
}

export default ItemList
