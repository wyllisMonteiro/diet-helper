<template>
  <div class="macronutrients-need-view">
    <div style="max-width: 1280px;margin: 35px auto 0 auto;" class="container">
      <h1>Besoin en macro-nutriments</h1>
      <Alert :alertClass="alertErrorClass">
        {{ errorText }}
      </Alert>

      <form>
        <InputTextList :items="inputTextItemsData" />
        <button class="btn btn-primary" @click.prevent="displayCaloricNeed">Calculer</button>
      </form>

      <Alert :alertClass="alertCaloricNeedClass" >
        <span>Protéines : {{ protein }} g</span><br>
        <span>Lipides : {{ lipid }} g</span><br>
        <span>Glucides : {{ carbohydrate }} g</span>
      </Alert>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapGetters } from 'vuex'

import Alert from '../components/Alert.vue'
import InputTextList from '../components/MacroNutrientsNeed/InputTextList.vue'

import { MacroNutrientsNeedFields } from '../domain/store/MacroNutrientsNeedState'

import { inputTextItemsData } from '../data/MacroNutrientNeed'

import {
  computeProtein,
  computeLipid,
  computeCarbohydrate
} from '../utils/compute'

@Options({
  components: {
    Alert,
    InputTextList
  },
  computed: {
    ...mapGetters(
      {
        fields: 'MacroNutrientsNeed/fields'
      }
    )
  }
})
export default class MacroNutrientsNeedView extends Vue {
  fields!: MacroNutrientsNeedFields
  inputTextItemsData = inputTextItemsData

  alertCaloricNeedClass = 'alert alert-primary'
  alertErrorClass = 'alert alert-danger'
  errorText = ''
  protein = 0
  lipid = 0
  carbohydrate = 0

  displayCaloricNeed (): void {
    try {
      this.protein = computeProtein(this.fields.weight)
      this.lipid = computeLipid(this.fields.weight)
      this.carbohydrate = computeCarbohydrate(this.protein, this.lipid, this.fields.caloric_need)

      this.alertCaloricNeedClass = 'alert alert-primary display-alert'
    } catch (ex) {
      this.alertErrorClass = 'alert alert-danger display-alert'
      this.errorText = ex.message
    }
  }
}
</script>
