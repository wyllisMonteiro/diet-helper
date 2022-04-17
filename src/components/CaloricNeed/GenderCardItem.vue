<template>
  <div :class="[index === selectedCardIndex ? 'card-selected' : '', 'card']" @click="selectCard(index)">
    <div class="card-body">
      <h5 class="card-title" style="margin: 0; text-align: center;">{{ name }}</h5>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapGetters, mapActions } from 'vuex'

@Options({
  props: {
    name: String,
    index: Number
  },
  computed: {
    ...mapGetters('CaloricNeed', {
      selectedCardIndex: 'selectedCardIndex'
    })
  },
  methods: {
    ...mapActions('CaloricNeed', {
      selectCard: 'setSelectedCardIndex'
    })
  }
})
export default class GenderCardItem extends Vue {
  name!: string
  index!: number
  selectedCardIndex!: number
}
</script>

<style lang="scss">
.card-body {
  cursor: pointer;
}

.card-body:hover {
  cursor: pointer;
  background-color: #f7f7f7;
}

.card-selected {
  border: 1px solid blue;
}
</style>
