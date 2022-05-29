<template>
  <div class="organize-meal-view">
    <AddFoodQuantityModal />

    <div style="max-width: 1280px;margin: 35px auto 0 auto;" class="container">
      <h1 style="margin-bottom: 20px">Organise tes repas de la journée</h1>
      <Alert alertClass="alert alert-secondary display-alert">
        <span>Energie : {{ nutrients.energy }} kcal</span><br>
        <span>Protéines : {{ nutrients.protein }} g</span><br>
        <span>Lipides : {{ nutrients.lipid }} g</span><br>
        <span>Glucides : {{ nutrients.carbohydrate }} g</span><br>
      </Alert>

      <ul class="nav nav-tabs" style="margin-bottom: 20px;" role="tablist">
        <MealTabsList />
      </ul>

      <div class="container" style="max-width: 1280px;">
        <div class="row">
          <div class="col-8">
            <MealTabsContentList />
          </div>
          <div class="col">
            <h2>Liste des aliments</h2>
            <NutrientFiltersList />
            <SelectedFoodList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import AddFoodQuantityModal from '../components/OrganizeMeal/AddFoodQuantityModal.vue'
import Alert from '../components/Alert.vue'
import MealTabsList from '../components/OrganizeMeal/MealTabsList.vue'
import MealTabsContentList from '../components/OrganizeMeal/MealTabsContentList.vue'
import NutrientFiltersList from '../components/OrganizeMeal/NutrientFiltersList.vue'
import SelectedFoodList from '../components/OrganizeMeal/SelectedFoodList.vue'
import { mapGetters } from 'vuex'

@Options({
  components: {
    AddFoodQuantityModal,
    Alert,
    MealTabsList,
    MealTabsContentList,
    NutrientFiltersList,
    SelectedFoodList
  },

  computed: {
    ...mapGetters({
      nutrients: 'OrganizeMeal/nutrients'
    })
  }
})
export default class OrganizeMealView extends Vue {
}
</script>
