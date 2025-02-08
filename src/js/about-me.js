const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    item.classList.toggle('active');
    const content = item.querySelector('.accordion-content');
    content.style.display = item.classList.contains('active') ? 'flex' : 'none';
    const icon = header.querySelector('svg use');
    icon.setAttribute(
      'xlink:href',
      item.classList.contains('active')
        ? '/img/sprite.svg#icon-arrow-up'
        : '/img/sprite.svg#icon-arrow-down'
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

// Инициализация Swiper
const swiper = new Swiper('.swiper-container', {
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 6,
    },
  },
});

// Добавление активного класса при смене слайда
swiper.on('slideChange', () => {
  document
    .querySelectorAll('.swiper-slide')
    .forEach(slide =>
      slide.classList.toggle(
        'active',
        slide === document.querySelectorAll('.swiper-slide')[swiper.activeIndex]
      )
    );
});
