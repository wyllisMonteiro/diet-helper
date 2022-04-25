export interface Food {
  name: string
  title: string,
  weightValue: number | null,
  weightUnity: string,
  nutriScore: string | null,
  companyName: string | null,
  nutritionalValues: {
    portionValue: number,
    portionUnity: string,
    energy: number,
    energyUnity: string,
    protein: number,
    lipid: number,
    carbohydrate: number
  }
}

export interface FoodCategory {
  categorieName: string,
  id: string,
  ariaLabelledBy: string,
  foods: Food[]
}
