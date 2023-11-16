import { LocalMallOutlined } from '@mui/icons-material'

import {
  Container,
  BuyButton,
  ChangeQuantityButton,
  Image,
  NamePriceContainer,
  Description,
  Name,
  Price,
  AddIcon,
  RemoveIcon,
  DeleteIcon,
} from './styles'

interface Product {
  id: string
  name: string
  price: number
  photo: string
  description: string
}

interface ProductProps {
  name: string
  count: number
  price: number
  image: string
  description: string
  onRemove: () => void
  onAdd: () => void
}

function Product({ name, count, price, image, description, onAdd, onRemove }: ProductProps) {
  return (
    <Container>
      <Image src={image} alt={name} />
      <NamePriceContainer>
        <Name>{name}</Name>
        <Price>R${price}</Price>
      </NamePriceContainer>
      <Description>{description}</Description>
      {count > 0
        ? (
          <ChangeQuantityButton>
            {count > 1
              ? <RemoveIcon onClick={onRemove}/>
              : <DeleteIcon onClick={onRemove}/>
            }
            {count}
            <AddIcon onClick={onAdd}/>
          </ChangeQuantityButton>
        ): (
          <BuyButton
            variant="contained"
            startIcon={<LocalMallOutlined />}
            onClick={onAdd}
          >
            Comprar
          </BuyButton>
        )
      }
    </Container>
  )
}

export default Product
