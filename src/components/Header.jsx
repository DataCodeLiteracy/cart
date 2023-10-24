import { css } from '@emotion/css'

const Header = () => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <h1>ReduxCart</h1>
      <button
        className={css`
          display: flex;
          justify-content: space-around;
          align-items: center;
          cursor: pointer;
          width: 200px;
          height: 40px;
          & span {
            width: 30px;
            height: 20px;
            border-radius: 10px;
            line-height: 20px;
            background-color: #2ee6e9;
          }
        `}
      >
        내 카트
        <span>1</span>
      </button>
    </div>
  )
}

export default Header
