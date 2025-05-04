const formData = { email: '', message: '' };
const LS_KEY = 'feedback-form-state';
const form = document.querySelector('.js-form');

function getFromLS(key) {
  const savedData = localStorage.getItem(key);
  if (savedData) {
    return JSON.parse(savedData);
  }
  return null;
}

if (getFromLS(LS_KEY)) {
  const { email, message } = getFromLS(LS_KEY);
  formData.email = email || '';
  formData.message = message || '';
  form.elements.email.value = email;
  form.elements.message.value = message;
}

form.addEventListener('input', onInput);

function onInput() {
  const emailValue = form.elements.email.value.trim();
  const messageValue = form.elements.message.value.trim();
  formData.email = emailValue;
  formData.message = messageValue;

  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  form.reset();
  localStorage.removeItem(LS_KEY);
  console.log(formData);
}
