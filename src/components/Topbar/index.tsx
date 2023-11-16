import Logo from '../Logo'
import AccessCartButton from '../Cart/AccessCartButton'
import { Container } from './styles'

interface TopbarProps {
  productCounter: number
  onClick: () => void
}

function Topbar({ productCounter, onClick }: TopbarProps) {
  return (
    <Container>
      <Logo />
      <AccessCartButton productCounter={productCounter} onClick={onClick} />
    </Container>
  )
}

export default Topbar
