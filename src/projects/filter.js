const radioButtons = document.querySelectorAll(".projects__radio-btn");
const projectCards = document.querySelectorAll(".projects__card");
const projectsWrapper = document.querySelector(".projects__wrapper");

radioButtons.forEach((radio) => {
  radio.addEventListener("change", filterHandler);
});

let removedSlides = [];

function appendSlides(slides) {
  while (slides.length > 0) {
    projectsWrapper.prepend(slides.pop());
  }
}
function filterHandler(event) {
  appendSlides(removedSlides);

  const filterId = event.target.id;

  projectCards.forEach((card) => {
    const isToHide = !card.classList.contains(`${event.target.id}`);
    const isToShow = filterId == "projects__card_all";

    if (isToHide && !isToShow) {
      removedSlides.push(card);
      card.remove();
    } else {
      removedSlides.push(card);
    }
  });
  swiper.update();
}
