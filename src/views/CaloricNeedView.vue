<template>
  <div class="caloric-need-view">
    <div style="max-width: 1280px;margin: 35px auto 0 auto;" class="container">
      <h1>Besoin calorique</h1>
      <Alert :alertClass="alertErrorClass">
        {{ errorText }}
      </Alert>
      <GenderCardsList />

      <form>
        <InputTextList :items="inputTextItemsData" />
        <InputRadioList :items="inputRadioItemsData" />
        <button class="btn btn-primary" @click.prevent="displayCaloricNeed">Calculer</button>
      </form>

      <Alert :alertClass="alertCaloricNeedClass" >
        <span>{{ baseCaloricNeed }}</span><br>
        <span>{{ dryCaloricNeed }}</span><br>
        <span>{{ gainCaloricNeed }}</span>
      </Alert>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapGetters } from 'vuex'

import { computeBMR, computeCoeffActivity, computeDryMassNeedCaloricNeed, computeWeightGainCaloricNeed } from '../utils/compute'
import Alert from '../components/Alert.vue'
import GenderCardsList from '../components/CaloricNeed/GenderCardsList.vue'
import InputTextList from '../components/CaloricNeed/InputTextList.vue'
import InputRadioList from '../components/CaloricNeed/InputRadioList.vue'

import { CaloricNeedFields } from '../domain/store/CaloricNeedState'
import { inputTextItemsData, inputRadioItemsData } from '../data/CaloricNeed'
import { InputRadio } from '../domain/CaloricNeed'

@Options({
  components: {
    Alert,
    GenderCardsList,
    InputTextList,
    InputRadioList
  },
  computed: {
    ...mapGetters(
      {
        selectedCardIndex: 'CaloricNeed/selectedCardIndex',
        activityName: 'CaloricNeed/activityName',
        fields: 'CaloricNeed/fields'
      }
    )
  }
})
export default class CaloricNeedView extends Vue {
  selectedCardIndex!: number
  activityName!: string
  fields!: CaloricNeedFields
  inputTextItemsData: string[] = inputTextItemsData
  inputRadioItemsData: InputRadio[] = inputRadioItemsData

  alertCaloricNeedClass = 'alert alert-primary'
  alertErrorClass = 'alert alert-danger'
  errorText = ''
  baseCaloricNeed = ''
  dryCaloricNeed = ''
  gainCaloricNeed = ''

  displayCaloricNeed (): void {
    try {
      const gender = this.selectedCardIndex === 0 ? 'male' : 'female'
      const BMR = computeBMR(this.fields.age, this.fields.weight, this.fields.size, gender)
      const caloricNeed = computeCoeffActivity(BMR, this.activityName)
      const dryMassNeedCaloricNeed = computeDryMassNeedCaloricNeed(caloricNeed)
      const weightGainCaloricNeed = computeWeightGainCaloricNeed(caloricNeed)

      this.baseCaloricNeed = `Besoin calorique : ${caloricNeed} kcal`
      this.dryCaloricNeed = `Besoin calorique pour la sèche : ${dryMassNeedCaloricNeed} kcal`
      this.gainCaloricNeed = `Besoin calorique pour la prise de masse : ${weightGainCaloricNeed} kcal`

      this.alertCaloricNeedClass = 'alert alert-primary display-alert'
    } catch (ex) {
      this.alertErrorClass = 'alert alert-danger display-alert'
      this.errorText = ex.message
    }
  }
}
</script>

<style lang="scss">
.alert {
  margin-top: 20px;
  opacity: 0 !important;
}

.display-alert {
  opacity: 1 !important;
}
</style>
