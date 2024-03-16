import axios from "axios"

export const getRecipeList = async (tags = null, size) => {
    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {
          from: '0',
          size: size || '20',
          tags
        },
        headers: {
          'X-RapidAPI-Key': 'b1efabf8e6msh38fcb3876fc6794p18df30jsna276a7e953aa',
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
      };
    return await axios.request(options);
}