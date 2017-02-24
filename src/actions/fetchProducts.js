import axios from 'axios'

const API_KEY = "833625feb0218c764640681d15327431"
const ROOT_URL = "http://api.prosperent.com/api/search?query="

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

export function fetchProducts(search) {
  if (search.includes(" ")) {
    search = search.split(" ").join("+")
  }

  const url = `https://cors-anywhere.herokuapp.com/http://api.prosperent.com/api/search?query=${search}&api_key=${API_KEY}`
  const request = axios.get(url)

  console.log('Request': request);

  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}
