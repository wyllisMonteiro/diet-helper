<template>
  <div class="loader-container">
    <div class="spinner-border text-light" style="width: 3rem; height: 3rem;" role="status">
      <span class="visually-hidden">{{ text }}</span>
    </div>
    <strong class="text-light">{{ text }}</strong>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    text: String
  }
})
export default class Loader extends Vue {
  text!: string
}
</script>

<style lang="scss">
.loader-container-active {
  display: flex;
}

.loader-container {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.6);
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
