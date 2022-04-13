<template>
  <div class="home">
    <div class="container">
      <div class="row" style="margin: 35px auto 0 auto;">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Calculer son besoin calorique</h5>
              <a href="/pages/caloric_need/index.html" class="card-link">Calculer</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Calculer son besoin en macro-nutriments</h5>
              <a href="/pages/macronutrient_need/index.html" class="card-link">Calculer</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
  }
})
export default class HomeView extends Vue {}
</script>
