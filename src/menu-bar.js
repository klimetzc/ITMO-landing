//Поиск по DOM
const burgerBtn = document.querySelector(".menu-bar__burger-btn");
const menu = document.querySelector(".menu-bar__burgernav");
const menuBar = document.querySelector(".menu-bar");
const aspBtn = document.querySelectorAll(".menu-bar__dropdown-link-asp");
const magBtn = document.querySelectorAll(".menu-bar__dropdown-link-mag");
const educationBurgerBtn = document.querySelector(
  ".menu-bar__burgernav-dropdown-btn"
);
const burgerDropdown = document.querySelector(
  ".menu-bar__burgernav-dropdown-content"
);
const sectionEducation = document.getElementById("education");
const radioAsp = document.getElementById("education__tab-input-asp");
const radioMag = document.getElementById("education__tab-input-mag");

//Развернуть / свернуть меню
function toggleMenu() {
  burgerBtn.classList.toggle("menu-bar__burger-btn_opened");
  menu.classList.toggle("menu-bar__burgernav_opened");
  menuBar.classList.toggle("menu-bar_opened");
  burgerDropdown.classList.remove(
    "menu-bar__burgernav-dropdown-content_active"
  );
  educationBurgerBtn.classList.remove(
    "menu-bar__burgernav-dropdown-btn_active"
  );
}

//Слушатели
// 1. Кнопка бургера
burgerBtn.addEventListener("click", toggleMenu);

// 2. Сворачивание меню после клика на ссылке
menu.addEventListener("click", (evt) => {
  if (
    (evt.target.classList.contains("menu-bar__burgernav-link") &&
      !evt.target.classList.contains("menu-bar__burgernav-dropdown-btn")) ||
    evt.target.classList.contains("menu-bar__burgernav-dropdown-link")
  ) {
    toggleMenu();
  }
});

// 3. Выпадающее меню
function setEventListeners(btn, radio) {
  btn.addEventListener("click", () => {
    sectionEducation.scrollIntoView();
    radio.checked = true;
  });
}
aspBtn.forEach((btn) => {
  setEventListeners(btn, radioAsp);
});

magBtn.forEach((btn) => {
  setEventListeners(btn, radioMag);
});

// 4. Выпадающее бургерное меню
educationBurgerBtn.addEventListener("click", () => {
  educationBurgerBtn.classList.toggle(
    "menu-bar__burgernav-dropdown-btn_active"
  );
  burgerDropdown.classList.toggle(
    "menu-bar__burgernav-dropdown-content_active"
  );
});
