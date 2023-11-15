import { createTheme, ThemeProvider } from '@mui/material/styles'

import { ButtonContainer } from './styles'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import colors from '../../../constants/colors'

interface AccessCartButtonProps {
  onClick: (value: number) => void
  productCounter: number
}

const theme = createTheme({
  palette: {
    primary: {
      main: colors.background,
    },
  },
})

function AccessCartButton({ onClick, productCounter = 0 }: AccessCartButtonProps) {
  return (
    <ThemeProvider theme={theme}>
      <ButtonContainer
        variant="contained"
        color="primary"
        startIcon={<ShoppingCartOutlinedIcon />}
        onClick={() => onClick(productCounter + 1)}
      >
        {productCounter}
      </ButtonContainer>
    </ThemeProvider>
  )
}

export default AccessCartButton
