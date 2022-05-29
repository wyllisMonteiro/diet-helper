<template>
  <div class="mb-3" v-for="(item, index) in items" :key="index">
    <InputTextItem :label="item" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import InputTextItem from './InputTextItem.vue'

@Options({
  components: {
    InputTextItem
  },
  props: {
    items: Array<string>()
  }
})
export default class InputTextList extends Vue {
  items!: Array<string>
}
</script>

<style lang="scss">
</style>
