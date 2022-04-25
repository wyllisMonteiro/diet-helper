<template>
  <ul>
    <li v-for="(selectedFood, index) in selectedFoods" :key="index">
      <SelectedFoodItem :item="selectedFood" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapGetters } from 'vuex'

import SelectedFoodItem from './SelectedFoodItem.vue'
import { SelectedFood } from '../../domain/store/OrganizeMealState'

@Options({
  components: {
    SelectedFoodItem
  },
  computed: {
    ...mapGetters({
      selectedFoods: 'OrganizeMeal/selctedFoods'
    })
  }
})
export default class SelectedFoodList extends Vue {
  selctedFoods!: SelectedFood[]
}
</script>
