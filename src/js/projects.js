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

// Перевірка на початок і кінець слайдера

function updateButtons(swiper) {
  const prevButton = document.querySelector('.swiper-button-prev');
  const nextButton = document.querySelector('.swiper-button-next');
  if (swiper.isBeginning) {
    prevButton.setAttribute('disabled', true);
  } else {
    prevButton.removeAttribute('disabled');
  }

  if (swiper.isEnd) {
    nextButton.setAttribute('disabled', true);
  } else {
    nextButton.removeAttribute('disabled');
  }
}
