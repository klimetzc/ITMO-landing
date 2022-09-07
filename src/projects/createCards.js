const wrapper = document.querySelector(".projects__wrapper");

function createCard(data) {
  const template = document.querySelector("#projects__card").content;
  const card = template.querySelector(".projects__card").cloneNode(true);
  const cardText = card.querySelector(".projects__card-text");
  const cardLogo = card.querySelector(".projects__card-logo");
  const logoClass = "projects__card-logo";
  card.classList.add(`${data.filter}`);
  cardLogo.classList.add(`${logoClass}_${data.company}`);
  cardText.textContent = data.text;

  return card;
}

for (const card of cardsArray) {
  const newCard = createCard(card);
  wrapper.append(newCard);
}
