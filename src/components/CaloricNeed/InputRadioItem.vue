<template>
  <input class="form-check-input" :value="defaultValue" name="coeff-activity" type="radio" :id="id" :checked="checked">
  <label class="form-check-label" :for="id">
    {{ label }}
  </label>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    label: String,
    id: String,
    defaultValue: String,
    checked: Boolean
  }
})
export default class InputRadioItem extends Vue {
  label!: string
  id!: string
  defaultValue!: string
  checked!: boolean

  capitalizeFirstLetter (label: string): string {
    return label.charAt(0).toUpperCase() + label.slice(1)
  }
}
</script>

<style lang="scss">
</style>
