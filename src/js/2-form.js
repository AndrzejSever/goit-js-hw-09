const formData = {
  email: '',
  message: '',
};

const inputClick = document.querySelector('.feedback-form');

const emailInput = document.querySelector('input[name="email"]');

const messageInput = document.querySelector('textarea[name="message"]');


inputClick.addEventListener('input', ev => {
  const currentValue = ev.target.value.trim();

  switch (ev.target.nodeName) {
    case 'INPUT':
      formData.email = currentValue;
      break;

    case 'TEXTAREA':
      formData.message = currentValue;
      break;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});



inputClick.addEventListener('submit', ev => {
  ev.preventDefault(ev);

  if (emailInput.value === '' || messageInput.value === '') {
    alert('Будь ласка, заповніть усі поля');
    return;
  }

  console.log(formData);

  localStorage.clear();
  formData.email = '';
  formData.message = '';
  emailInput.value = '';
  messageInput.value = '';
});


if (emailInput.value === '' || messageInput.value === '') {
  const beforeReboots = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (beforeReboots) {
      emailInput.value = beforeReboots.email;
      messageInput.value = beforeReboots.message;

      formData.email = emailInput.value;
      formData.message = messageInput.value;
  }

}


// console.log('hi');


