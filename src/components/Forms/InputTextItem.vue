<template>
    <label :for="label" class="form-label">{{ capitalizeFirstLetter(label) }}</label>
    <input
      type="number"
      class="form-control"
      :id="label"
      v-model="value"
      @keyup="setField({
        field: label,
        value: value
      })">
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapActions } from 'vuex'

@Options({
  props: {
    label: String
  },
  methods: {
    ...mapActions({
      setField: 'CaloricNeed/setField'
    })
  }
})
export default class InputTextItem extends Vue {
  label!: string
  value = 0

  capitalizeFirstLetter (label: string): string {
    return label.charAt(0).toUpperCase() + label.slice(1)
  }
}
</script>

<style lang="scss">
</style>
