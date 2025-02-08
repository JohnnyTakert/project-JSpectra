import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.faq-list', {
    duration: 300, // час анімації
    showMultiple: true, // відкривається тільки один елемент
    elementClass: 'ac',
    triggerClass: 'ac-trigger',
    panelClass: 'ac-panel',
  });
});
