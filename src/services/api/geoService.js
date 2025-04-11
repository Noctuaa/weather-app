const api_key =  import.meta.env.VITE_API_KEY;
const geo_url = import.meta.env.VITE_GEO_URL;

/**
 * Searches for cities from the geocoding API
 * @param {string} query - The city name to search for
 * @param {number} [limit=5] - Maximum number of results to return 
 * @returns {Promise>Array>Object>>} Array of matching city objects
 * @throws {error} Throws if the API request fails
 */
export const searchCity = async (query, limit = 5) => {
   try {
      const response = await fetch(
         `${geo_url}/direct?q=${encodeURIComponent(query)}&limit=${limit}&appid=${api_key}`
      )
      if(!response.ok) { throw new Error(`Erreur: ${response.status}`)};

      const data = await response.json();

      return data;
   } catch (error) {
      console.error('Erreur lors de la recherche de villes:', error)
      throw error;
   }
}

