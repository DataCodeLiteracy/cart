import { css } from '@emotion/css'

const CartItem = () => {
  return (
    <li
      className={css`
        display: flex;
        justify-content: space-between;
        background-color: blue;
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
          테스트 아이템 1
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
          <span>1</span>
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
          <span>6000원</span>
          <span>(6000 원/item)</span>
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
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
