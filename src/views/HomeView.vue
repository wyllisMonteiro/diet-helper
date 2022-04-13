<template>
  <div class="home">
    <div class="container">
      <div class="row" style="margin: 35px auto 0 auto;">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Calculer son besoin calorique</h5>
              <router-link to="/caloric-need" class="card-link">Calculer</router-link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Calculer son besoin en macro-nutriments</h5>
              <router-link to="/macronutrients-need" class="card-link">Calculer</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
export default class HomeView extends Vue {}
</script>
