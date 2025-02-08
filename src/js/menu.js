import { handleClicks } from './header';

const menuBtn = document.querySelector('.menu-button');
const mobMenu = document.querySelector('.mobile-menu');
const mobBtn = document.querySelector('.mobile-button');
const menuLinks = document.querySelectorAll('.mob-menu-list a');
const orderBtn = document.querySelector('.mob-order');

menuBtn.addEventListener('click', onOpen);
mobBtn.addEventListener('click', onClose);

menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    handleClicks(event);
    mobMenu.classList.remove('show');
  });
});

orderBtn.addEventListener('click', onOrder);

function onOrder(event) {
  handleClicks(event);
  mobMenu.classList.remove('show');
}

function onOpen(event) {
  event.preventDefault();
  mobMenu.classList.add('show');
}

function onClose(event) {
  event.preventDefault();
  mobMenu.classList.remove('show');
}
