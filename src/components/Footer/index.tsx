import { Container } from './styles'

import { footerMessage } from '../../constants/utils'

function Footer() {
  return (
    <Container data-testid="footer">
      { footerMessage }
    </Container>
  )
}

export default Footer
