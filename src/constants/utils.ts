export const footerMessage = 'Online Store © Todos os direitos reservados'

export const apiURL = 'https://s3ilus.s3.sa-east-1.amazonaws.com/ecommerceproducts.json'

export const mountLoaders = (Loader: JSX.Element, amount: number): JSX.Element[] => {
  const loaderArray = []
  for (let i = 0; i < amount; i++) {
    loaderArray.push(Loader)
  }
  return loaderArray
}
