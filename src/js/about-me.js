import pathSprite from '../img/sprite.svg';

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    item.classList.toggle('active');
    const content = item.querySelector('.accordion-content');
    content.style.display = item.classList.contains('active') ? 'flex' : 'none';
    const icon = header.querySelector('svg use');
    icon.setAttribute(
      'href',
      item.classList.contains('active')
        ? `${pathSprite}#icon-arrow-up`
        : `${pathSprite}#icon-arrow-down`
    );
  });

  if (item.classList.contains('active')) {
    const content = item.querySelector('.accordion-content');
    content.style.display = 'flex';
  } else {
    const content = item.querySelector('.accordion-content');
    content.style.display = 'none';
  }
});

// Swiper
const swiper = new Swiper('.swiper-container', {
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
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

document.querySelector('.skills-but').addEventListener('click', function () {
  swiper.slideNext();
});
