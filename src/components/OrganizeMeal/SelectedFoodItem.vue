<template>
  <div v-if="hasNoActiveFilters">
    {{ item.food.title }} - {{ item.quantity }} g
  </div>
  <div v-else>
    {{ item.food.title }} - {{ item.quantity }} g
    <ul>
      <li v-if="activeFilters.energy">Energie : {{ item.food.nutritionalValues.energy }} kcal</li>
      <li v-if="activeFilters.protein">Protéines : {{ item.food.nutritionalValues.protein }} g</li>
      <li v-if="activeFilters.lipid">Lipides : {{ item.food.nutritionalValues.lipid }} g</li>
      <li v-if="activeFilters.carbohydrate">Glucides : {{ item.food.nutritionalValues.carbohydrate }} g</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapGetters } from 'vuex'

import { SelectedFood, NutrientFilters } from '../../domain/store/OrganizeMealState'

@Options({
  props: {
    item: {
      type: Object as () => SelectedFood
    }
  },

  computed: {
    ...mapGetters({
      hasNoActiveFilters: 'OrganizeMeal/hasNoActiveFilters',
      activeFilters: 'OrganizeMeal/activeFilters'
    })
  }
})
export default class SelectedFoodItem extends Vue {
  hasNoActiveFilters!: boolean
  activeFilters!: NutrientFilters
}
</script>
