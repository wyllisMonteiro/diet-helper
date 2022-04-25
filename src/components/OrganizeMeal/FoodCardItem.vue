<template>
  <div :class="setCardClass(food)" style="width: 45%" v-for="(food, index) in category.foods" :key="index">
    <div class="card-body">
      <h5 class="card-title">{{ food.title }}</h5>
      <p class="card-text">Énergie : {{ food.nutritionalValues.energy + ' ' + food.nutritionalValues.energyUnity }} </p>
      <div class="collapse" :id="setCollapseId(food.name)">
        <p class="portion">Quantité : {{ food.nutritionalValues.portionValue + ' ' + food.nutritionalValues.portionUnity }}</p>
        <p class="pretein">Protéines : {{ food.nutritionalValues.protein }} g</p>
        <p class="lipid">Lipides : {{ food.nutritionalValues.lipid }} g</p>
        <p class="carbohydrate">Glucides : {{ food.nutritionalValues.carbohydrate }} g</p>
      </div>
      <a class="card-link card-link-show" data-bs-toggle="collapse" :href="setCollapseHref(food.name)" role="button" aria-expanded="false" aria-controls="food-details">Détails</a>
      <a class="card-link card-link-add" data-bs-toggle="modal" data-bs-target="#modal-portion" role="button" @click="setCurrentFood(food)">Ajouter</a>
      <a style="color: darkred;" class="card-link" v-show="displayRemoveBtn" @click="removeCurrentFood(food)">Retirer</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapActions, mapGetters } from 'vuex'

import { FoodCategory, Food } from '../../domain/food'
import { SelectedFood } from '../../domain/store/OrganizeMealState'

@Options({
  props: {
    category: {
      type: Object as () => FoodCategory
    }
  },

  computed: {
    ...mapGetters({
      selctedFoods: 'OrganizeMeal/selctedFoods'
    })
  },

  methods: {
    ...mapActions({
      setCurrentFood: 'OrganizeMeal/setCurrentFood',
      removeCurrentFood: 'OrganizeMeal/removeCurrentFood'
    })
  }
})
export default class FoodCardItem extends Vue {
  category!: FoodCategory
  selctedFoods!: SelectedFood[]

  displayRemoveBtn = false

  setCardClass (food: Food) {
    const isFoodSelected = this.selctedFoods.filter(item => item.food.name === food.name).length >= 1

    if (isFoodSelected) {
      this.displayRemoveBtn = true
      return 'card card-selected'
    }

    this.displayRemoveBtn = false
    return 'card'
  }

  setCollapseId (foodName: string) {
    return foodName + '-food-details'
  }

  setCollapseHref (foodName: string) {
    return '#' + foodName + '-food-details'
  }
}
</script>

<style scoped lang="scss">
.card {
  margin: 10px;
}

.card-selected {
  background-color: #cfe2ff;
}
</style>
