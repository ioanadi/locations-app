<template>
  <v-app>
    <v-main class="locations-app pa-16 d-flex align-center">
      <div class="d-flex align-center flex-column pa-10 locations-app__content">
        <h1>Welcome to UK Locations app! </h1>
        <h5>Find out more about UK areas by entering the postcode</h5>
        <AddressGetter/>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AddressGetter from '@/components/AddressGetter.vue'

export default Vue.extend({
  name: 'App',
  components: {
    AddressGetter
  }
})
</script>
<style lang="scss">
  .locations-app {
    width: 100%;
    background-image: url(https://images.unsplash.com/photo-1475463606759-53a070b44126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1661&q=80);
    background-position: center;
    background-size: cover;
    h1, h5, h2, h3 {
      color: rgb(235, 127, 27);
    }
    h1 { 
      margin-bottom: 1rem;
      @media (max-width: 700px) {
        font-size: 1.5rem;
      }
    }
  }
  .locations-app__content {
    backdrop-filter: blur(5px);
    border: 1px solid orange;
    background-color: rgb(255 255 255 / 43%);
  }
</style>
