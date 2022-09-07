/*
Открытие менюшки с чекбоксами при клике и замена названия
*/

const selectMenu = document.querySelector(".projects__select");
const radioGrid = document.querySelector(".projects__options");
const projectsOptions = document.querySelectorAll(".projects__option");
const size = window.matchMedia("(min-width: 700px)");

selectMenu.addEventListener("click", (event) => {
  radioGrid.classList.toggle("projects__options_opened");
});
projectsOptions.forEach((option) => {
  option.addEventListener("click", (event) => {
    if (!size.matches) {
      radioGrid.classList.toggle("projects__options_opened");
    }
    selectMenu.textContent = event.target.textContent;
  });
});

function handlerSize(size) {
  radioGrid.classList.remove("projects__options_opened");
}
size.addEventListener("change", handlerSize);
