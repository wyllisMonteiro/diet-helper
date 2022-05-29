<template>
  <p>Vous êtes un(e)</p>
  <div class="row" style="margin-bottom: 1rem;" >
    <div class="col" v-for="(name, index) in cardsList" :key="index">
      <GenderCardItem :name="name" :index="index" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import GenderCardItem from './GenderCardItem.vue'

@Options({
  components: {
    GenderCardItem
  }
})
export default class GenderCardsList extends Vue {
  cardsList: string[] = ['Homme', 'Femme']
}
</script>

<style scoped lang="scss">
</style>
