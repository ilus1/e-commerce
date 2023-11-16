import { countTotalPrice, removeItemFromCart } from '../../../utils/itemUtils'
import CartItemList from '../CartItemList'
import {
  Container,
  Header,
  Title,
  CloseButton,
  Cost,
  Total,
  BuyButton,
} from './styles'

interface CartItem {
  id: string
  name: string
  price: number
  photo: string
  description: string
  count: number
}

interface SidebarProps {
  onClose: () => void
  cartItemList: CartItem[]
  onChangeCartItemList: (cartItemList: CartItem[]) => void
  onRemoveItem: (cartItem: CartItem) => void
  onAddItem: (cartItem: CartItem) => void
}

function Sidebar({ onClose, cartItemList, onChangeCartItemList, onAddItem, onRemoveItem }: SidebarProps) {
  const handleRemoveProduct = (cartItem: CartItem) => {
    onChangeCartItemList(removeItemFromCart(cartItemList, cartItem.id))
  }

  return (
    <Container>
      <Header>
        <Title>Carrinho de compras</Title>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Header>
      <CartItemList
        cartItemList={cartItemList}
        onRemoveProduct={handleRemoveProduct}
        onRemoveItem={onRemoveItem}
        onAddItem={onAddItem}
      />
      <Cost>
        <Total>Total:</Total>
        <Total>R${countTotalPrice(cartItemList)}</Total>
      </Cost>
      <BuyButton>Finalizar Compra</BuyButton>
    </Container>
  )
}

export default Sidebar
