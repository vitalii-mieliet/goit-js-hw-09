import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getFromLS, removeFromLS, saveInLS } from './local-storage';

const LS_KEY = 'feedback-form-state';
const formData = { email: '', message: '' };
const form = document.querySelector('.js-form');

form.addEventListener('input', onInput);
form.addEventListener('submit', onFormSubmit);

populateForm();

function populateForm() {
  const savedData = getFromLS(LS_KEY);
  if (savedData) {
    const { email, message } = savedData;
    formData.email = email || '';
    formData.message = message || '';
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
}

function onInput() {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  saveInLS(LS_KEY, formData);
}

function onFormSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    iziToast.warning({
      timeout: 5000,
      message: 'Fill please all fields',
      position: 'topRight',
    });
    return;
  }

  console.log(formData);
  form.reset();
  removeFromLS(LS_KEY);
  formData.email = '';
  formData.message = '';
  iziToast.success({
    timeout: 5000,
    position: 'topRight',
    message: 'Message sent! We appreciate your input!',
  });
}
// TODO Оптимізувати для роботи з формою з n-кількістю полей
