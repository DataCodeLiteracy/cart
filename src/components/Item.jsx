import { css } from '@emotion/css'

const Item = () => {
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
      `}
    >
      <div>
        <h2>테스트 아이템 1</h2>
        <div>테스트 아이템 1 설명</div>
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
        <div>6000원</div>
        <button>카트 추가</button>
      </div>
    </li>
  )
}

export default Item
