import { css } from '@emotion/css'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/ui-slice'

const Header = () => {
  const dispatch = useDispatch()
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)

  const handleShowCart = () => {
    dispatch(uiActions.toggle())
  }

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
        onClick={handleShowCart}
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
        <span>{totalQuantity}</span>
      </button>
    </div>
  )
}

export default Header
