import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  formEl: document.querySelector('.js-work-together-form'),
  modalEl: document.querySelector('.js-modal-backdrop'),
  closeModalBtn: document.querySelector('.close-modal'),
};

function postData(userEmail, userComment) {
  return axios.post('https://portfolio-js.b.goit.study/api/requests', {
    email: userEmail,
    comment: userComment,
  });
}

async function onFormSubmit(e) {
  e.preventDefault();

  const {
    email: { value: emailVal },
    comment: { value: commentVal },
  } = e.currentTarget.elements;

  try {
    const {
      data: { title, message },
    } = await postData(emailVal, commentVal);

    document.querySelector('.js-modal-title').textContent = title;
    document.querySelector('.js-modal-text').textContent = message;

    openModal();

    refs.formEl.reset();
  } catch (err) {
    iziToast.info({
      title: err.name,
      message: err.message,
      backgroundColor: '#ed3b44',
      theme: 'dark',
    });
  }
}

let position = null;

function openModal() {
  position = window.scrollY;
  refs.modalEl.classList.add('is-open');
  document.body.style.position = 'fixed';
  document.body.style.top = `-${position}px`;
  document.body.style.width = '100%';
}

function closeModal() {
  refs.modalEl.classList.remove('is-open');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';

  window.scrollTo({
    top: position,
    left: 0,
    behavior: 'instant',
  });
}

refs.formEl.addEventListener('submit', onFormSubmit);
refs.closeModalBtn.addEventListener('click', closeModal);
refs.modalEl.addEventListener('click', e => {
  if (e.target === refs.modalEl) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
