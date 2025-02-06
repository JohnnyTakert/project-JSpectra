import axios from 'axios';

const formEl = document.querySelector('.js-work-together-form');

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
  } catch (err) {
    console.log(err);
  }

  const responce = await postData(emailVal, commentVal);
  console.log(responce);
}

formEl.addEventListener('submit', onFormSubmit);
