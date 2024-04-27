import { apiURL } from '../constants/utils'

export const fetchProducts = async () => {
  return await fetch(apiURL)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}
