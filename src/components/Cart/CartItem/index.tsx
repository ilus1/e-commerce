import { motion } from 'framer-motion';
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
    <Container
      data-testid="cart-item-component"
      as={motion.li}
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.15,
        duration: 0.8,
        ease: "easeOut"
      }}
    >
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
