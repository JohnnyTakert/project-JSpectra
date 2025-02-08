import pathSprite from '../img/sprite.svg';

const accordionItems = document.querySelectorAll('.accordion-item');

const toggleAccordionContent = item => {
  const content = item.querySelector('.accordion-content');
  if (item.classList.contains('active')) {
    content.style.maxHeight = content.scrollHeight + 'px';
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';
  } else {
    content.style.maxHeight = '0';
    content.style.opacity = '0';
    content.style.transform = 'translateY(-10px)';
  }
};

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    item.classList.toggle('active');
    toggleAccordionContent(item);

    const icon = header.querySelector('svg use');
    icon.setAttribute(
      'href',
      item.classList.contains('active')
        ? `${pathSprite}#icon-arrow-up`
        : `${pathSprite}#icon-arrow-down`
    );
  });

  toggleAccordionContent(item);
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
