import CartItemComponent from '../CartItem'
import { Container } from './styles';

interface CartItem {
  id: string
  name: string
  price: number
  photo: string
  description: string
  count: number
}

interface CartItemListProps {
  cartItemList: CartItem[]
  onRemoveItem: (cartItem: CartItem) => void
  onRemoveProduct: (cartItem: CartItem) => void
  onAddItem: (cartItem: CartItem) => void
}

function CartItemList({ cartItemList, onRemoveItem, onAddItem, onRemoveProduct }: CartItemListProps) {
  return (
    <Container>
      {cartItemList.map((cartItem) => (
        <CartItemComponent
          key={cartItem.id}
          onRemove={onRemoveProduct}
          item={cartItem}
          onAddItem={onAddItem}
          onRemoveItem={onRemoveItem}
        />
      ))}
    </Container>
  );
}

export default CartItemList;
