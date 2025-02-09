import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.accordion-container', {
    duration: 450,
    showFirstItem: true,
    showMultiple: true,
    elementClass: 'accordion-item',
    triggerClass: 'accordion-header',
    panelClass: 'accordion-content',
  });
});

// Swiper
import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper-container', {
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.skills-but',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: false,
  },
  touchEventsTarget: 'container',
  breakpoints: {
    320: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1440: { slidesPerView: 6 },
  },
});

document.querySelectorAll('.swiper-slide').forEach((slide, index) => {
  slide.classList.toggle('active', index === swiper.activeIndex);
});

swiper.on('slideChange', () => {
  document.querySelectorAll('.swiper-slide').forEach((slide, index) => {
    slide.classList.toggle('active', index === swiper.activeIndex);
  });
});

document.querySelector('.skills-but').addEventListener('click', () => {
  swiper.slideNext();
});
