export const footerMessage = 'MKS sistemas © Todos os direitos reservados'

export const apiURL = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC'

export const mountLoaders = (Loader: JSX.Element, amount: number): JSX.Element[] => {
  const loaderArray = []
  for (let i = 0; i < amount; i++) {
    loaderArray.push(Loader)
  }
  return loaderArray
}
