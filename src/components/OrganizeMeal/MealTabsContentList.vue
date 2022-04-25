<template>
  <div class="tab-content">
    <div
      :class="setClass(index)"
      :id="category.id"
      role="tabpanel"
      :aria-labelledby="category.ariaLabelledBy"
      v-for="(category, index) in categories"
      :key="index">
      <FoodCardItem :category="category" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import FoodCardItem from '../OrganizeMeal/FoodCardItem.vue'
import { categories } from '../../data/Foods/food'

@Options({
  components: {
    FoodCardItem
  }
})
export default class MealTabsContentList extends Vue {
  categories = categories

  activeTabIndex = 2

  setClass (index: number): string {
    return index === this.activeTabIndex ? 'tab-pane fade show active' : 'tab-pane fade'
  }
}
</script>

<style scoped lang="scss">
.active {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
