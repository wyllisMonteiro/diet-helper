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
            <a class="nav-link active" aria-current="page" href="#">Accueil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/caloric_need/index.html">Besoin calorique</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/macronutrient_need/index.html">Besoin macro-nutriments</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/organize_meal/index.html">Organise tes repas</a>
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
