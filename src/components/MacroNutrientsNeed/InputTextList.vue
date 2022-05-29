<template>
  <div class="mb-2" v-for="(item, index) in items" :key="index">
    <InputTextItem :item="item" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import InputTextItem from './InputTextItem.vue'
import InputText from '../../domain/MacroNutrientsNeed/InputText'

@Options({
  components: {
    InputTextItem
  },
  props: {
    items: Array<InputText>()
  }
})
export default class InputTextList extends Vue {
  items!: Array<InputText>
}
</script>

<style lang="scss">
</style>
