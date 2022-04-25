<template>
  <input
    class="form-check-input filter"
    type="checkbox" :id="filter.id"
    :value="filter.value"
    @click="setFilter(filter.value)">
  <label class="form-check-label" :for="filter.id">{{ filter.label }}</label>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapActions } from 'vuex'

import Filter from '../../domain/OrganizeMeal/Filter'

@Options({
  props: {
    filter: {
      type: Object as () => Filter
    }
  },

  methods: {
    ...mapActions({
      setFilter: 'OrganizeMeal/setFilter'
    })
  }
})
export default class NutrientFilterItem extends Vue {
  filter!: Filter
}
</script>
