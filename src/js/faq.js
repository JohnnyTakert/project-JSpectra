import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

export function initFAQ() {
  // Ініціалізація Accordion для .faq-list
  const accordion = new Accordion('.faq-list', {
    duration: 400,
    showMultiple: false,
    collapse: true,
  });
}

document.addEventListener('DOMContentLoaded', initFAQ);
