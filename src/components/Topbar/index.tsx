import { useState } from 'react'

import Logo from '../Logo'
import AccessCartButton from '../Cart/AccessCartButton'
import { Container } from './styles'

function Topbar() {
  const [productCounter, setProductCounter] = useState(0)

  return (
    <Container>
      <Logo />
      <AccessCartButton
        productCounter={productCounter}
        onClick={setProductCounter}
      />
    </Container>
  )
}

export default Topbar
