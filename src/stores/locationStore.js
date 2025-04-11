import { defineStore } from "pinia";
import { searchCity } from "../services/api/geoService";

/**
 * Pinia Store for location management and city search
 * @typedef {Object} LocationStore
 * @property {Array} searchCitySuggestions - List of city suggestions
 * @property {boolean} loading - Whether a search operation is in progress
 * @property {string|null} error - Error message if any
 */

/**
 * Location store to manage city search and geolocation functionality
 * @type {LocationStore}
 */
export const useLocationStore = defineStore('location', {
   state: () => ({
      searchSuggestions: [],
      loading: false,
      error: null,
   }),

   actions: {
      /**
       * Searches for city suggestions based on user input
       * @param {string} query - The search text entered by the user
       * @returns {Promise<Array>} A promise that resolves with an array city suggestions
       */
      async searchCitySuggestions(query) {
         if(!query || query.length < 2 ) return;
         try {
            this.loading = true;
            const results = await searchCity(query, 5); // Limit to 5 suggestions
            this.searchSuggestions = results;
            return results;
         } catch (error) {
            console.error('Erreur lors de la recherche de suggestions:', error);
            this.error = error.message;
            return;
         }finally{
            this.loading = false;
         }
      }
   }
})