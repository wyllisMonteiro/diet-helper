<template>
  <Navigation />
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navigation from './components/Navigation.vue'

@Options({
  components: {
    Navigation
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  height: 100vh;
  background: url('~@/assets/bg.png') no-repeat;
  background-size: cover;
}
</style>
