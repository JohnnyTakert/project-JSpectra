import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
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
    slideChange: function () {
      updateButtons(this);
    },
  },
});

const prevButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');

nextButton.addEventListener('click', function () {
  swiper.slideNext();
});

prevButton.addEventListener('click', function () {
  swiper.slidePrev();
});

// Перевірка на початок і кінець слайдера
function updateButtons(swiper) {
  if (swiper.isBeginning) {
    prevButton.classList.add('disabled');
    prevButton.setAttribute('disabled', 'true');
  } else {
    prevButton.classList.remove('disabled');
    prevButton.removeAttribute('disabled');
  }

  if (swiper.isEnd) {
    nextButton.classList.add('disabled');
    nextButton.setAttribute('disabled', 'true');
  } else {
    nextButton.classList.remove('disabled');
    nextButton.removeAttribute('disabled');
  }
}
