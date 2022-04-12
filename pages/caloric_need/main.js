import './style.css'
import { computeButtonClicked, genderCardClicked } from './events'

const computeBtn = document.getElementById('compute-btn')
computeBtn.addEventListener('click', computeButtonClicked)

const cards = document.querySelectorAll('.card')
cards.forEach(card => {
  card.addEventListener('click', genderCardClicked)
})
