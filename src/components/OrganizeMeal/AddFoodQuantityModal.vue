<template>
  <div class="modal fade" id="modal-quantity" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modal-portion-label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal-quantity-label">Quantité (g)</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="cleanCurrentFood()"></button>
        </div>
        <div class="modal-body">
            <form>
                <div class="mb-1">
                  <input type="number" class="form-control" v-model="quantity">
                </div>
            </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="cleanCurrentFood()">Fermer</button>
          <button type="button" class="btn btn-danger">Réinitialiser</button>
          <button type="button" class="btn btn-primary" @click="addQuantity()">Ajouter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapActions, mapGetters } from 'vuex'

import { Food } from '../../domain/food'
import { SelectedFood, Nutrients } from '../../domain/store/OrganizeMealState'

@Options({
  computed: {
    ...mapGetters({
      currentFood: 'OrganizeMeal/currentFood',
      selectedFoods: 'OrganizeMeal/selectedFoods',
      nutrients: 'OrganizeMeal/nutrients'
    })
  },
  methods: {
    ...mapActions({
      setFoodQuantity: 'OrganizeMeal/setFoodQuantity',
      cleanCurrentFood: 'OrganizeMeal/cleanCurrentFood'
    }),

    addQuantity () {
      this.setFoodQuantity({
        food: this.currentFood,
        quantity: this.quantity
      })
    }
  }
})
export default class AddFoodQuantityModal extends Vue {
  currentFood!: Food
  selectedFoods!: SelectedFood[]
  nutrients!: Nutrients

  quantity = 0
}
</script>
