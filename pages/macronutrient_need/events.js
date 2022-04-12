import { computeProtein, computeLipid, computeCarbohydrate } from './compute'

function computeButtonClicked (e) {
  document.getElementById('error-compute').classList.remove('display-alert')

  e.preventDefault()

  const weight = document.getElementById('weight').value
  const caloricNeed = document.getElementById('caloric-need').value

  const isWeightNullOrEmpty = weight == null || weight === ''
  const iscaloricNeedNullOrEmpty = caloricNeed == null || caloricNeed === ''
  if (isWeightNullOrEmpty || iscaloricNeedNullOrEmpty) {
    document.getElementById('error-compute').innerText = 'Vous n\'avez pas rempli tous les champs'
    document.getElementById('error-compute').classList.add('display-alert')
    return
  }

  try {
    const protein = computeProtein(weight)
    const lipid = computeLipid(weight)
    const carbohydrate = computeCarbohydrate(protein, lipid, caloricNeed)

    document.getElementById('macronutrient-need').innerText =
        `Protéines : ${protein} g
        Lipides : ${lipid} g
        Glucides : ${carbohydrate} g`
    document.getElementById('macronutrient-need').classList.add('display-alert')
  } catch (ex) {
    document.getElementById('error-compute').innerText = `${ex.message}`
    document.getElementById('error-compute').classList.add('display-alert')
  }
}

export { computeButtonClicked }
