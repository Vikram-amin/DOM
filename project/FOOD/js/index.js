import navbar from "../components/navbar.js";
import { show, hide } from "../scripts/showHide.js";
import { showMeal, displayData } from "../scripts/showData.js";
import { fetchData, searchMeal } from "../scripts/getData.js";
// Navbar HTMl
document.querySelector(".navigation").innerHTML = await navbar();

// Search Functionality
let timerId;
window.debounce = debounce;
window.main = main;
window.searchMeal = searchMeal;
window.show = show;
window.hide = hide;
window.showMeal = showMeal;
window.fetchData = fetchData;
function debounce(cb, delay) {
  show();
  if (timerId) {
    clearTimeout(timerId);
  }

  timerId = setTimeout(function () {
    cb();
  }, delay);
}

async function main() {
  let data = await searchMeal();
  if (data === undefined) {
    return false;
  }
  displayData(data);
}