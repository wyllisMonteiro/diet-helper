import { computeBMR, computeCoeffActivity, computeDryMassNeedCaloricNeed, computeWeightGainCaloricNeed } from "./compute"

function computeButtonClicked(e) {
    document.getElementById("error-compute").classList.remove("display-alert");

    e.preventDefault();

    const gender = document.querySelector(".card-selected .card-title").getAttribute("data-gender");
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;
    const size = document.getElementById("size").value;
    const coeffActivityName = document.querySelector("input[type='radio']:checked").value;

    const isAgeNullOrEmpty = age == null || age == "";
    const isWeightNullOrEmpty = weight == null || weight == "";
    const isSizeNullOrEmpty = size == null || size == "";
    const isCoeffActivityNameNullOrEmpty = coeffActivityName == null || coeffActivityName == "";

    if (isAgeNullOrEmpty || isWeightNullOrEmpty || isSizeNullOrEmpty || isCoeffActivityNameNullOrEmpty) {
        document.getElementById("error-compute").innerText = `Vous n'avez pas rempli tous les champs`;
        document.getElementById("error-compute").classList.add("display-alert");
        return;
    }

    try {
        const BMR = computeBMR(age, weight, size, gender);
        const caloricNeed = computeCoeffActivity(BMR, coeffActivityName);
        const dryMassNeedCaloricNeed = computeDryMassNeedCaloricNeed(caloricNeed);
        const weightGainCaloricNeed = computeWeightGainCaloricNeed(caloricNeed);

        document.getElementById("caloric-need").innerText = 
        `Besoin calorique : ${caloricNeed} kcal
        Besoin calorique pour la sèche : ${dryMassNeedCaloricNeed} kcal
        Besoin calorique pour la prise de masse : ${weightGainCaloricNeed} kcal`;
        document.getElementById("caloric-need").classList.add("display-alert");
    } catch(ex) {
        document.getElementById("error-compute").innerText = `${ex.message}`;
        document.getElementById("error-compute").classList.add("display-alert");
    }
}

function genderCardClicked() {
    document.querySelector(".card-selected").classList.remove("card-selected");
    this.classList.add("card-selected");
}

export { computeButtonClicked, genderCardClicked }