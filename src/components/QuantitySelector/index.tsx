import { Container, Button, Quantity } from './styles';

interface CartItem {
  id: string
  name: string
  price: number
  photo: string
  description: string
  count: number
}

interface QuantitySelectorProps {
  item: CartItem
  onAdd: (item: CartItem) => void
  onRemove: (item: CartItem) => void
}

function QuantitySelector({ item, onAdd, onRemove }: QuantitySelectorProps) {
  const { count } = item;

  return (
    <Container>
      <Button onClick={() => onRemove(item)}>-</Button>
      <Quantity>{count}</Quantity>
      <Button onClick={() => onAdd(item)}>+</Button>
    </Container>
  );
}

export default QuantitySelector;
