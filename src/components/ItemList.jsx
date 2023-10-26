import { css } from '@emotion/css'
import Item from './Item'

const ItemList = () => {
  const mockItems = [
    {
      id: 1,
      title: '테스트 아이템 1',
      description: '테스트 아이템 1 설명',
      price: 6000
    },
    {
      id: 2,
      title: '테스트 아이템 2',
      description: '테스트 아이템 2 설명',
      price: 4000
    }
  ]

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
        {mockItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  )
}

export default ItemList
