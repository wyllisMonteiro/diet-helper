<template>
  <li class="nav-item" v-for="(item, index) in mealtabs" :key="index">
    <MealTabItem :item="item" :index="index" />
  </li>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import MealTab from '../../domain/OrganizeMeal/MealTab'
import MealTabItem from '../OrganizeMeal/MealTabItem.vue'

@Options({
  components: {
    MealTabItem
  }
})
export default class OrganizeMealView extends Vue {
  mealtabs: MealTab[] = [
    {
      id: 'meats-tab',
      dataBSTarget: '#meats',
      ariaControls: 'meats',
      text: 'Viandes'
    },
    {
      id: 'fishes-tab',
      dataBSTarget: '#fishes',
      ariaControls: 'fishes',
      text: 'Poissons'
    },
    {
      id: 'starches-tab',
      dataBSTarget: '#starches',
      ariaControls: 'starches',
      text: 'Féculents'
    },
    {
      id: 'vegetables-tab',
      dataBSTarget: '#vegetables',
      ariaControls: 'vegetables',
      text: 'Légumes'
    },
    {
      id: 'dairy-tab',
      dataBSTarget: '#dairy',
      ariaControls: 'dairy',
      text: 'Laitages'
    },
    {
      id: 'fruits-tab',
      dataBSTarget: '#fruits',
      ariaControls: 'fruits',
      text: 'Fruits'
    },
    {
      id: 'food-supplements-tab',
      dataBSTarget: '#food-supplements',
      ariaControls: 'food-supplements',
      text: 'Compléments alimentaires'
    }
  ]
}
</script>
