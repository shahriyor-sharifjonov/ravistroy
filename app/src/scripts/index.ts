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