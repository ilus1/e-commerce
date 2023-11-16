import ProductComponent from '../../components/Product'
import { Container } from './styles'

interface Product {
  id: string
  name: string
  price: number
  photo: string
  description: string
}

interface CartItem {
  id: string
  name: string
  price: number
  photo: string
  description: string
  count: number
}

interface ProductListProps {
  products: Product[]
  cartItems: CartItem[]
  onAddProduct: (product: Product) => void
  onRemoveProduct: (product: CartItem) => void
}


function ProductList({ products, cartItems, onAddProduct, onRemoveProduct }: ProductListProps) {
  return (
    <Container data-testid="product-list">
      {products.map((product) => (
        <ProductComponent
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.photo}
          description={product.description}
          count={cartItems.find((item) => item.id === product.id)?.count || 0}
          onAdd={() => onAddProduct(product)}
          onRemove={() => onRemoveProduct(cartItems.find((item) => item.id === product.id)!)}
        />
      ))}

    </Container>
  )
}

export default ProductList
