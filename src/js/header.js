const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list');
const menuLinks = document.querySelectorAll('.menu-list a');

menu.addEventListener('click', toggleMenu);
document.addEventListener('click', onDocumentClick);

menuLinks.forEach(link => {
  link.addEventListener('click', handleClicks);
});

function toggleMenu(event) {
  event.preventDefault();
  menuList.classList.toggle('show');
}

function onDocumentClick(event) {
  if (!menuList) return;
  if (!menu.contains(event.target) && !menuList.contains(event.target)) {
    menuList.classList.remove('show');
  }
}

export function handleClicks(event) {
  event.preventDefault();
  const sectionId = event.target.getAttribute('href').substring(1);
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  if (menuList) {
    menuList.classList.remove('show');
  }
}
