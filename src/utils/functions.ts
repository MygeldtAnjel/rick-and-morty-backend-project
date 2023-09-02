import axios from 'axios';

export const fetchGraphQL = async (query: string) => {
    try {
      const response = await axios.post(
        "https://rickandmortyapi.com/graphql",
        { query },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      return response.data;
    } catch (error) {
      console.error('error:', error);
      throw error;
    }
}