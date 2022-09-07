const swiper = new Swiper(".projects__slider", {
  breakpoints: {
    320: {
      observer: true,
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
      spaceBetween: 8,
      grid: {
        rows: 2,
      },
    },
    700: {
      observer: true,
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerGroup: 3,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },
    1000: {
      observer: true,
      slidesPerView: 4,
      slidesPerColumn: 2,
      slidesPerGroup: 4,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },
  },
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  loop: false,
  pagination: {
    el: ".projects__pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} projects__pagination_bullet">${
        index + 1
      }</span>`;
    },
  },
  navigation: {
    nextEl: ".projects__next",
    prevEl: ".projects__prev",
  },
});
