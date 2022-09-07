const cards = Array.from(document.querySelectorAll(".lab-card"));
const popup = document.querySelector(".lab-card-popup");
cards.forEach((card) => {
  card.addEventListener("click", openPopup);
});

function openPopup(event) {
  const card = event.target.closest(".lab-card");
  const header = card.querySelector(".lab-card__header").textContent;
  popup.querySelector(".lab-card-popup__header").textContent = header;
  popup.classList.add("lab-card-popup_opened");
  document.addEventListener("keydown", handleEsc);
}
popup.addEventListener("click", closePopup);

function handleEsc(event) {
  console.log(event.key);
  if (event.key == "Escape") closePopup(event);
}

function closePopup(event) {
  const isClosable =
    event.target.classList.contains("lab-card-popup") ||
    event.target.classList.contains("lab-card-popup__cross") ||
    event.key === "Escape";
  if (isClosable) {
    popup.classList.remove("lab-card-popup_opened");
  }
  document.removeEventListener("keydown", handleEsc);
}
