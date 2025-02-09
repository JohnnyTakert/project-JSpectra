import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  allowTouchMove: true,
  loop: false,
  on: {
    init: function () {
      updateButtons(this);
    },
    slideChange: function () {
      updateButtons(this);
    },
  },
});

// nextButton.addEventListener('click', function () {
//   swiper.slideNext();
// });

// prevButton.addEventListener('click', function () {
//   swiper.slidePrev();
// });

// Перевірка на початок і кінець слайдера
function updateButtons(swiper) {
  const prevButton = document.querySelector('.swiper-button-prev');
  const nextButton = document.querySelector('.swiper-button-next');
  if (swiper.isBeginning) {
    prevButton.classList.add('swiper-button-disabled');
  } else {
    prevButton.classList.remove('swiper-button-disabled');
  }

  if (swiper.isEnd) {
    nextButton.classList.add('swiper-button-disabled');
  } else {
    nextButton.classList.remove('swiper-button-disabled');
  }
}
