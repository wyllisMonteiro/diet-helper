<template>
  <div class="caloric-need-view">
    <div style="max-width: 1280px;margin: 35px auto 0 auto;" class="container">
      <h1>Besoin calorique</h1>

      <div class="alert alert-danger" role="alert" id="error-compute">
      </div>
      <p>Vous êtes un(e)</p>
      <div class="row" style="margin-bottom: 1rem;">
        <div class="col">
          <div class="card card-selected">
            <div class="card-body">
              <h5 class="card-title" data-gender="male" style="margin: 0; text-align: center;">Homme</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title" data-gender="female" style="margin: 0; text-align: center;">Femme</h5>
            </div>
          </div>
        </div>
      </div>

      <form>
        <div class="mb-3">
          <label for="age" class="form-label">Age</label>
          <input type="number" class="form-control" id="age" value="23">
        </div>
        <div class="mb-3">
          <label for="weight" class="form-label">Poids (kg)</label>
          <input type="number" class="form-control" id="weight" value="77">
        </div>
        <div class="mb-3">
          <label for="size" class="form-label">Taille (cm)</label>
          <input type="number" class="form-control" id="size" value="174">
        </div>

        <div class="form-check">
          <input class="form-check-input" value="no" type="radio" name="coeff-activity" id="no-sports-activity">
          <label class="form-check-label" for="no-sports-activity">
            Aucune activité sportive
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" value="low" type="radio" name="coeff-activity" id="low-sports-activity">
          <label class="form-check-label" for="low-sports-activity">
            1 à 3 fois par semaine (intensité faible)
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" value="medium" type="radio" name="coeff-activity" id="medium-sports-activity" checked>
          <label class="form-check-label" for="medium-sports-activity">
            3 à 5 fois par semaine (intensité modéré)
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" value="strong" type="radio" name="coeff-activity" id="strong-sports-activity">
          <label class="form-check-label" for="strong-sports-activity">
            6 fois par semaine (forte intensité)
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" value="extreme" type="radio" name="coeff-activity" id="extreme-sports-activity">
          <label class="form-check-label" for="extreme-sports-activity">
            Athlète professionnel (forte intensité)
          </label>
        </div>
        <button class="btn btn-primary" id="compute-btn">Calculer</button>
      </form>

      <div class="alert alert-primary" role="alert" id="-view">
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
export default class CaloricNeedView extends Vue {}
</script>
