<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Diet helper</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/caloric-need" class="nav-link">Besoin calorique</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/macronutrients-need" class="nav-link">Besoin macro-nutriments</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/organize-meal" class="nav-link">Organise tes repas</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Navigation extends Vue {
}
</script>

<style scoped lang="scss">
</style>
