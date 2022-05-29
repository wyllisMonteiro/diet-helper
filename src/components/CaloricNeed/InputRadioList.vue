<template>
  <div class="form-check"
    v-for="(item, index) in items"
    :key="index"
    @click="setActivity({
      activityName: item.defaultValue,
      activityIndex: index
    })">
    <InputRadioItem
      :label="item.label"
      :defaultValue="item.defaultValue"
      :checked="item.defaultValue === 'medium'"
      :id="item.id" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapActions } from 'vuex'

import InputRadioItem from './InputRadioItem.vue'
import { InputRadio } from '../../domain/CaloricNeed'

@Options({
  components: {
    InputRadioItem
  },
  props: {
    items: Array<InputRadio>()
  },
  methods: {
    ...mapActions({
      setActivity: 'CaloricNeed/setActivity'
    })
  }
})
export default class InputRadioList extends Vue {
  items!: Array<InputRadio>
}
</script>

<style lang="scss">
</style>
