import axios from 'axios'

export const fetchRecipe = () => axios
  .get('/.netlify/functions/curry')
  .then(({ data }) => data)

export default null
