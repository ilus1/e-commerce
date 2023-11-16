import QuantitySelector from '../../QuantitySelector'
import {
  Container,
  CloseButton,
  Price,
  Name,
  Image,
} from './styles';

interface CartItem {
  id: string
  name: string
  price: number
  photo: string
  description: string
  count: number
}

interface CartItemProps {
  item: CartItem
  onRemove: (item: CartItem) => void
  onAddItem: (item: CartItem) => void
  onRemoveItem: (item: CartItem) => void
}

function CartItem({ item, onRemove, onAddItem, onRemoveItem }: CartItemProps) {
  const { photo, name, price } = item;
  return (
    <Container>
      <CloseButton onClick={() => onRemove(item)}>X</CloseButton>
      <Image src={photo} />
      <Name>{name}</Name>
      <QuantitySelector
        item={item}
        onAdd={onAddItem}
        onRemove={onRemoveItem}
      />
      <Price>R$ {price}</Price>
    </Container>
  );
}

export default CartItem;
