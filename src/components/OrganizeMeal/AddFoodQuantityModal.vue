<template>
  <div class="modal fade" id="modal-portion" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modal-portion-label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal-portion-label">Quantité (g)</h5>
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

import { Nutrients } from '../../domain/store/OrganizeMealState'

@Options({
  computed: {
    ...mapGetters({
      currentFood: 'OrganizeMeal/currentFood',
      selctedFoods: 'OrganizeMeal/selctedFoods',
      nutrients: 'OrganizeMeal/nutrients'
    })
  },
  methods: {
    ...mapActions({
      setFoodQuantity: 'OrganizeMeal/setFoodQuantity',
      cleanCurrentFood: 'OrganizeMeal/cleanCurrentFood'
    }),

    addQuantity () {
      if (this.quantity > 0) {
        // const removeButton = document.querySelector(`.card-link-rm[data-food='${foodNameWaitingToBeAdded}']`)
        // if (removeButton == null) {
        // addButton.parentElement.innerHTML += renderRemoveButtonToCard(foodNameWaitingToBeAdded)
        // }

        // document.querySelector(`.card-link-add[data-food='${foodNameWaitingToBeAdded}']`).parentElement.parentElement.classList.add('card-selected')
        // filterClicked()
      } else {
        // addButton.parentElement.parentElement.classList.remove('card-selected')
      }

      // const nutritionalValues = computeEnergiesFromSelectedFoods()
      this.setFoodQuantity({
        food: this.currentFood,
        quantity: this.quantity
      })
    }
  }
})
export default class AddFoodQuantityModal extends Vue {
  nutrients!: Nutrients

  quantity = 0
}
</script>
