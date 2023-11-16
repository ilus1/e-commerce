import { apiURL } from '../constants/utils'

export const fetchProducts = async () => {
  return await fetch(apiURL)
  .then((res) => res.json())
}
