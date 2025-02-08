const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    item.classList.toggle('active');

    const icon = header.querySelector('.icon-container');
    if (item.classList.contains('active')) {
      icon.style.transform = 'rotate(0deg)'; // Стрелка вверх
    } else {
      icon.style.transform = 'rotate(180deg)'; // Стрелка вниз
    }
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
