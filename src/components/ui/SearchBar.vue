<script setup>
   import { ref, computed } from 'vue';
   import { useLocationStore } from '../../stores/locationStore';

   const locationStore = useLocationStore();

   const searchQuery = ref('');
   const suggestions = ref([]);
   const debounceTimeout = ref(null);

   /**
    * Handles user input in the search bar with debounce functionality
    * Fetches city suggestions after user stops typing
    */
   const handleInput = async () => {
      clearTimeout(debounceTimeout.value);
  
      if (searchQuery.value.length < 2) {
         suggestions.value = [];
         return;
      }

      debounceTimeout.value = setTimeout(async () => {
         try {
            suggestions.value = await locationStore.searchCitySuggestions(searchQuery.value);
         } catch (error) {
            console.error('Erreur lors de la recherche:', error); 
         }
      }, 300)
   }

   /**
    * Computed property that indicates whether a search is in progress
    * @returns {booleans} True if a search operation is loading, false otherwise
    */
   const isLoading = computed(() => locationStore.loading);

</script>

<template>
   <div class="search-container d-flex j-content-center">
      <div class="search-bar d-flex a-items-center p-relative">
         <button class="search-btn">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
         </button>
         <input type="text" v-model="searchQuery" @input="handleInput" placeholder="Rechercher une ville" name="city" id:="city" class="search-input w-100"> 
         <button class="location-btn">
            <font-awesome-icon icon="fa-solid fa-location-dot" />
         </button>     
      </div>
      <div class="suggestion-list">
         <div class="suggestion-item" v-for="suggestion in suggestions" :key="suggestion.id">
            {{ suggestion.name  }} - {{ suggestion.state }} - {{ suggestion.country }}
         </div>
      </div>
   </div>
</template>

<style scoped>
   @import url('@/assets/styles/components/searchBar.css');
</style>