function onValidateUser() {
  const inputUser = document.getElementById('email');
  const user = inputUser.value;
  const userError = document.getElementById('userError');
  userError.classList.remove('show');
  const errors = [];

  if (!user) {
    errors.push({
      element: userError,
      message: 'O e-mail precisa ser informado',
    });
  }

  if (user.indexOf(' ') >= 0) {
    errors.push({
      element: userError,
      message: 'O e-mail não pode conter espaços em branco',
    });
  }

  if (user.indexOf('@') <= 0) {
    errors.push({
      element: userError,
      message: 'Insira um e-mail válido',
    });
  }

  if (errors.length > 0) {
    errors.forEach((error) => {
      error.element.innerText = error.message;
      error.element.classList.add('show');
    });
  }

  return errors.length == 0;
}

function onValidatePassword() {
  const inputPassword = document.getElementById('senha');
  const passwordError = document.getElementById('passwordError');
  passwordError.classList.remove('show');
  const password = inputPassword.value;
  const errors = [];

  if (!password) {
    errors.push({
      element: passwordError,
      message: 'Informe a senha',
    });
  }

  if (errors.length > 0) {
    errors.forEach((error) => {
      error.element.innerText = error.message;
      error.element.classList.add('show');
    });
  }

  return errors.length == 0;
}

function onClickSubmit(event) {
  event.preventDefault();

  if (!onValidatePassword(event) || !onValidateUser(event)) {
    return;
  }
  console.log('backend');
}

window.onload = function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', onClickSubmit);

  const userInput = document.getElementById('email');
  userInput.addEventListener('blur', onValidateUser);

  const passwordInput = document.getElementById('senha');
  passwordInput.addEventListener('blur', onValidatePassword);
};
