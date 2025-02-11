import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.projects-section .swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.projects-swiper-button-next',
    prevEl: '.projects-swiper-button-prev',
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
  const prevButton = document.querySelector('.projects-swiper-button-prev');
  const nextButton = document.querySelector('.projects-swiper-button-next');
  if (swiper.isBeginning) {
    prevButton.classList.add('disabled');
    prevButton.setAttribute('disabled', true);
  } else {
    prevButton.classList.remove('disabled');
    prevButton.removeAttribute('disabled');
  }

  if (swiper.isEnd) {
    nextButton.classList.add('disabled');
    nextButton.setAttribute('disabled', true);
  } else {
    nextButton.classList.remove('disabled');
    nextButton.removeAttribute('disabled');
  }
}
