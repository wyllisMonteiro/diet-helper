<template>
  <div class="organize-meal-view">
    <div class="modal fade" id="modal-portion" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modal-portion-label" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modal-portion-label">Quantité</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <form>
                  <div class="mb-1">
                    <input type="number" class="form-control" id="quantity">
                  </div>
              </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            <button type="button" class="btn btn-danger" id="reset-portion">Réinitialiser</button>
            <button type="button" class="btn btn-primary" id="desired-portion">Ajouter</button>
          </div>
        </div>
      </div>
    </div>

    <div style="max-width: 1280px;margin: 35px auto 0 auto;" class="container">
      <h1 style="margin-bottom: 20px">Organise tes repas de la journée</h1>

      <div class="alert alert-secondary" role="alert" id="nutritionnal-values">
        Energie : 0 kcal <br>
        Protéines : 0 g <br>
        Lipides : 0 g <br>
        Glucides : 0 g
      </div>

      <ul class="nav nav-tabs" style="margin-bottom: 20px;" role="tablist">
        <li class="nav-item">
          <button class="nav-link" id="meats-tab" data-bs-toggle="tab" data-bs-target="#meats" type="button" role="tab" aria-controls="meats" aria-selected="false">Viandes</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" id="fishes-tab" data-bs-toggle="tab" data-bs-target="#fishes" type="button" role="tab" aria-controls="fishes" aria-selected="false">Poissons</button>
        </li>
        <li class="nav-item">
          <button class="nav-link active" id="starches-tab" data-bs-toggle="tab" data-bs-target="#starches" type="button" role="tab" aria-controls="starches" aria-selected="true">Féculents</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" id="vegetables-tab" data-bs-toggle="tab" data-bs-target="#vegetables" type="button" role="tab" aria-controls="vegetables" aria-selected="false">Légumes</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" id="dairy-tab" data-bs-toggle="tab" data-bs-target="#dairy" type="button" role="tab" aria-controls="dairy" aria-selected="false">Produits laitiers</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" id="fruits-tab" data-bs-toggle="tab" data-bs-target="#fruits" type="button" role="tab" aria-controls="fruits" aria-selected="false">Fruits</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" id="food-supplements-tab" data-bs-toggle="tab" data-bs-target="#food-supplements" type="button" role="tab" aria-controls="food-supplements" aria-selected="false">Compléments alimentaires</button>
        </li>
      </ul>

      <div class="container" style="max-width: 1280px;">
        <div class="row">
          <div class="col-8">
              <div id="cards" class="tab-content">
              </div>
          </div>
          <div class="col">
              <div id="foods-list">
                  <h2>Liste des aliments</h2>
                  <div id="filters">
                      <div class="form-check form-check-inline">
                          <input class="form-check-input filter" type="checkbox" id="filter-energy" value="energy">
                          <label class="form-check-label" for="filter-energy">Energie</label>
                      </div>
                      <div class="form-check form-check-inline">
                          <input class="form-check-input filter" type="checkbox" id="filter-protein" value="protein">
                          <label class="form-check-label" for="filter-protein">Proteines</label>
                      </div>
                      <div class="form-check form-check-inline">
                          <input class="form-check-input filter" type="checkbox" id="filter-lipid" value="lipid">
                          <label class="form-check-label" for="filter-lipid">Lipides</label>
                      </div>
                      <div class="form-check form-check-inline">
                          <input class="form-check-input filter" type="checkbox" id="filter-carbohydrate" value="carbohydrate">
                          <label class="form-check-label" for="filter-carbohydrate">Glucides</label>
                      </div>
                  </div>

                  <ul id="foods-list-items"></ul>
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
export default class OrganizeMealView extends Vue {}
</script>
