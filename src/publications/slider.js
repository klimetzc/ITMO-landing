const publicationsSwiper = new Swiper(".publications__slider", {
  slidesPerView: "auto",
  breakpoints: {
    768: {
      spaceBetween: 30,
      slidesPerView: 2,
      slidesPerGroup: 2,
      centeredSlides: false,
    },
    1280: {
      spaceBetween: 33,
      slidesPerView: 3,
      slidesPerGroup: 3,
      centeredSlides: false,
    },
  },
  centeredSlides: true,
  spaceBetween: 8,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  rewind: true,
  watchOverflow: true,
  pagination: {
    el: ".publications__pagination",
    bulletActiveClass: "publications__bullet_active",
    bulletClass: "publications__bullet",
    clickable: true,
  },
  navigation: {
    nextEl: ".publications__button-next",
    prevEl: ".publications__button-prev",
  },
});

const publicationTemplate = document.querySelector(
  "#publications__card"
).content;
const publicationsWrapper = document.querySelector(".publications__wrapper");

function createPublication(publicationData) {
  const card = publicationTemplate
    .querySelector(".publications__card")
    .cloneNode(true);
  const cardImg = card.querySelector(".publications__card-img");
  const cardTitle = card.querySelector(".publications__card-title");
  const cardAuthors = card.querySelector(".publications__card-authors");
  const cardArticle = card.querySelector(".publications__card-article");
  const cardLink = card.querySelector(".publications__card-link");
  const cardShareBtn = card.querySelector(".publications__card-share-btn");
  const likely = card.querySelector(".likely");
  cardImg.src = publicationData.img;
  cardImg.alt = publicationData.title;
  cardTitle.textContent = publicationData.title;
  cardAuthors.textContent = publicationData.authors;
  cardArticle.textContent = publicationData.article;
  cardLink.href = publicationData.link;
  cardShareBtn.addEventListener("click", toggleSmPopup);
  likely.setAttribute("data-url", publicationData.link);
  likely.setAttribute("data-title", publicationData.title);
  return card;
}

function renderPublication(publicationData) {
  const card = createPublication(publicationData);
  publicationsWrapper.append(card);
}

publications.forEach((item) => {
  renderPublication(item);
});

function toggleSmPopup(evt) {
  const smPopup = evt.target
    .closest(".publications__card")
    .querySelector(".publications__popup");
  const currentCard = evt.target.closest(".publications__card");

  if (!smPopup.classList.contains("publications__popup_active")) {
    smPopup.classList.add("publications__popup_active");
    smPopup.addEventListener("click", toggleSmPopup);
    currentCard.addEventListener("mouseleave", toggleSmPopup);
  } else {
    smPopup.classList.remove("publications__popup_active");
    smPopup.removeEventListener("click", toggleSmPopup);
    currentCard.removeEventListener("mouseleave", toggleSmPopup);
  }
}
