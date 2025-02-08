import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.faq-list', {
    duration: 450,
    showMultiple: true,
    elementClass: 'ac',
    triggerClass: 'ac-trigger',
    panelClass: 'ac-panel',
  });
});
