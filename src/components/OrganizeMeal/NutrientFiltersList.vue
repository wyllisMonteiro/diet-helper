<template>
  <div class="form-check form-check-inline" v-for="(filter, index) in filtersInput" :key="index">
    <NutrientFilterItem :filter="filter" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapGetters } from 'vuex'

import NutrientFilterItem from './NutrientFilterItem.vue'
import Filter from '../../domain/OrganizeMeal/Filter'
import { NutrientFilters } from '@/domain/store/OrganizeMealState'

@Options({
  components: {
    NutrientFilterItem
  },

  computed: {
    ...mapGetters({
      activeFilters: 'OrganizeMeal/activeFilters'
    })
  }
})
export default class NutrientFiltersList extends Vue {
  filters!: NutrientFilters
  filtersInput: Filter[] = [
    {
      id: 'filter-energy',
      value: 'energy',
      label: 'Energie'
    },
    {
      id: 'filter-protein',
      value: 'protein',
      label: 'Protein'
    },
    {
      id: 'filter-lipid',
      value: 'lipid',
      label: 'Lipides'
    },
    {
      id: 'filter-carbohydrate',
      value: 'carbohydrate',
      label: 'Glucides'
    }
  ]
}
</script>
