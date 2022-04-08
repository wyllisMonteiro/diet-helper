import './style.css'
import { computeButtonClicked } from "./events"

const computeBtn = document.getElementById("compute-btn");
computeBtn.addEventListener("click", computeButtonClicked);