<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AddressGetter msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import AddressGetter from '@/components/AddressGetter.vue'

export default {
  name: 'Home',
  components: {
    AddressGetter
  }
}
</script>
