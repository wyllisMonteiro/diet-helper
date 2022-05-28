import { OrganizeMealState } from '@/domain/store/OrganizeMealState'

export default {
  selectedFoods: (state: OrganizeMealState) => state.selectedFoods,
  currentFood: (state: OrganizeMealState) => state.currentFood,
  nutrients: (state: OrganizeMealState) => state.nutrients,
  activeFilters: (state: OrganizeMealState) => state.activeFilters,
  hasNoActiveFilters: (state: OrganizeMealState) => {
    const filters = state.activeFilters
    return !filters.energy && !filters.protein && !filters.lipid && !filters.carbohydrate
  }
}
