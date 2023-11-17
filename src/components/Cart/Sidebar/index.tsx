import { motion } from 'framer-motion'

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

import { sidebarAnimation } from '../../../utils/animationUtils'
import { countTotalPrice, removeItemFromCart } from '../../../utils/itemUtils'

interface CartItem {
  id: string
  name: string
  price: number
  photo: string
  description: string
  count: number
}

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  cartItemList: CartItem[]
  onChangeCartItemList: (cartItemList: CartItem[]) => void
  onRemoveItem: (cartItem: CartItem) => void
  onAddItem: (cartItem: CartItem) => void
}

function Sidebar({ isOpen, onClose, cartItemList, onChangeCartItemList, onAddItem, onRemoveItem }: SidebarProps) {
  const handleRemoveProduct = (cartItem: CartItem) => {
    onChangeCartItemList(removeItemFromCart(cartItemList, cartItem.id))
  }

  return (
    <Container
      as={motion.div}
      initial={{ y: '-100%', opacity: 0 }}
      animate={{ y: isOpen ? 0 : '-100%', opacity: isOpen ? 1 : 0 }}
      exit={{ y: '-100%', opacity: 0 }}
      transition={sidebarAnimation}
    >
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
