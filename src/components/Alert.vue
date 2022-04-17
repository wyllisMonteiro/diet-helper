<template>
  <div :class="alertClass" role="alert">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    alertClass: String
  }
})
export default class Alert extends Vue {
  alertClass!: string
}
</script>

<style lang="scss">
</style>
