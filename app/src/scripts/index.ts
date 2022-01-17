// Header Menu
const headerButton: HTMLButtonElement =
  document.querySelector(".header__button");
const headerMenu: HTMLUListElement = document.querySelector(".nav__menu");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};
headerButton.onclick = menuToggle;
window.onclick = (e: MouseEvent) => {
  if ( menuOpened && !e.composedPath().includes(headerButton) && !e.composedPath().includes(headerMenu)){
    menuToggle();
  }
  if (e.target.classList.contains('nav__menu-close')){
      menuToggle();
  }
};

var swiper = new Swiper(".intro__slider ", {
  slidesPerView: 1,
  spaceBetween: 100,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".services__slider ", {
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});


var swiper = new Swiper(".works__slider ", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
});


var swiper = new Swiper(".why__slider ", {
  slidesPerView: 1,
  spaceBetween: 15,
  grabCursor: true,
  loop: false,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
});


var swiper = new Swiper(".reviews__slider ", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
});