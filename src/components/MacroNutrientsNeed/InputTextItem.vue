<template>
  <label :for="item.id" class="form-label">{{ item.label }}</label>
  <input
    type="number"
    class="form-control"
    :id="item.id"
    v-model="value"
    @keyup="setField({
      field: item.id,
      value: value
    })">
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapActions } from 'vuex'

import InputText from '../../domain/MacroNutrientsNeed/InputText'

@Options({
  props: {
    item: {
      type: Object as () => InputText
    }
  },
  methods: {
    ...mapActions({
      setField: 'MacroNutrientsNeed/setField'
    })
  }
})
export default class InputTextItem extends Vue {
  item!: InputText
  value = 0

  capitalizeFirstLetter (label: string): string {
    return label.charAt(0).toUpperCase() + label.slice(1)
  }

  formatLabelToId (label: string): string {
    let id = label.replaceAll(' ', '-')
    id = id.replace(/-\(.+\)/g, '')
    return id
  }
}
</script>

<style lang="scss">
</style>
