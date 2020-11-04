<template>
  <div class="address-getter__container">
    <v-autocomplete class="pa-4"
      auto-select-first clearable
      label="Postcode here.."
      v-model.trim="postcode"
      :items="locationList"
      :item-text="'postcode'"
      no-data-text="It seems the postcode is not in our database :("
    ></v-autocomplete>
    <div v-if="location" class="pa-4">
      <h3>Location details:</h3>
      <p>Postcode: {{location.postcode}}</p>
      <p>Eastings: {{location.eastings}}</p>
      <p>Northings: {{location.northings}}</p>
      <p>Country: {{location.country}}</p>
      <p>Nhs ha: {{location.nhs_ha}}</p>
      <p>Longitude: {{location.longitude}}</p>
      <p>Latitude: {{location.latitude}}</p>
      <p></p>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator'
import { locations, Location } from '@/services/locations.ts'
import { AxiosRequestConfig } from 'axios'

@Component({
  name: 'AdressGetter',
  watch: {
    postcode: function (val) {
      if (val) {
        (this as any).locationList.forEach((location: Location) => {
          if (location.postcode == (this as any).postcode) {
            (this as any).location = location
          }
        })
      } else {
        (this as any).location = null
      } 
    }
  },
})
export default class AddressGetter extends Vue {
  public locationList = [] as Array<Location>
  public error = '' as string
  public postcode = '' as string
  public location = null

  mounted () {
    locations.list().then((res: AxiosRequestConfig) => {
      this.locationList = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
.address-getter__container {
    max-width: 500px;
    min-height: 250px;
    margin: 5rem auto 0;
    padding: 2rem 1rem;
    backdrop-filter: blur(7px);
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}
</style>
