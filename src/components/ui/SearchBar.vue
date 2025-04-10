<script setup>


</script>

<template>
   <div class="search-bar d-flex a-items-center p-relative">
      <button class="search-btn">
         <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </button>
      <input type="text" placeholder="Rechercher une ville" name="city" id:="city" class="search-input w-100"> 
      <button class="location-btn">
         <font-awesome-icon icon="fa-solid fa-location-dot" />
      </button>     
   </div>
</template>

<style scoped>
   @import url('@/assets/styles/components/searchBar.css');
</style>