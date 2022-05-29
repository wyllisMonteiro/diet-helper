<template>
  <button :class="setClass()" :id="item.id" data-bs-toggle="tab" :data-bs-target="item.dataBSTarget" type="button" role="tab" :aria-controls="item.ariaControls" aria-selected="false">{{ item.text }}</button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import MealTab from '../../domain/OrganizeMeal/MealTab'

@Options({
  props: {
    item: {
      type: Object as () => MealTab
    },
    index: Number
  }
})
export default class OrganizeMealView extends Vue {
  item!: MealTab
  index!: number

  activeTabIndex = 2

  setClass (): string {
    return this.index === this.activeTabIndex ? 'nav-link active' : 'nav-link'
  }
}
</script>
