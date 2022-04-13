<template>
  <div class="macronutrients-need-view">
    <div style="max-width: 1280px;margin: 35px auto 0 auto;" class="container">
        <h1>Besoin en macro-nutriments</h1>

        <div class="alert alert-danger" role="alert" id="error-compute">
        </div>

        <form>
            <div class="mb-2">
            <label for="weight" class="form-label">Poids (kg)</label>
            <input type="number" class="form-control" id="weight" value="77">
            </div>
            <div class="mb-2">
            <label for="caloric-need" class="form-label">Nombre de kcal par jour (kcal)</label>
            <input type="number" class="form-control" id="caloric-need" value="1900">
            </div>
            <button class="btn btn-primary" id="compute-btn">Calculer</button>
        </form>

        <div class="alert alert-primary" role="alert" id="macronutrient-need">
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
export default class MacroNutrientsNeedView extends Vue {}
</script>
