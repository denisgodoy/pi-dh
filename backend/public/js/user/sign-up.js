function onValidateUserNameInput() {
  const inputNameUser = document.getElementById('nome');
  const userName = inputNameUser.value;
  const userNameError = document.getElementById('nameError');
  userNameError.classList.remove('show');
  const errors = [];

  if (!userName) {
    errors.push({
      element: userNameError,
      message: 'Digite o seu nome',
    });
  }

  if (userName.length <= 2) {
    errors.push({
      element: userNameError,
      message: 'Insira o seu nome',
    });
  }

  if (userName.indexOf('@') >= 0) {
    errors.push({
      element: userNameError,
      message: 'Insira um nome válido',
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

function onValidateUserLastNameInput() {
  const inputLastNameUser = document.getElementById('sobrenome');
  const userLastName = inputLastNameUser.value;
  const userLastNameError = document.getElementById('lastNameError');
  userLastNameError.classList.remove('show');
  const errors = [];

  if (!userLastName) {
    errors.push({
      element: userLastNameError,
      message: 'Digite o seu sobrenome',
    });
  }

  if (userLastName.length <= 2) {
    errors.push({
      element: userLastNameError,
      message: 'Insira o seu sobrenome',
    });
  }

  if (userLastName.indexOf('@') >= 0) {
    errors.push({
      element: userLastNameError,
      message: 'Insira um sobrenome válido',
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

function onValidateUserEmailInput() {
  const inputUserEmail = document.getElementById('email');
  const userEmail = inputUserEmail.value;
  const userEmailError = document.getElementById('emailError');
  userEmailError.classList.remove('show');
  const errors = [];

  if (!userEmail) {
    errors.push({
      element: userEmailError,
      message: 'O e-mail precisa ser informado',
    });
  }

  if (userEmail.indexOf(' ') >= 0) {
    errors.push({
      element: userEmailError,
      message: 'O e-mail não pode conter espaços em branco',
    });
  }

  if (userEmail.indexOf('@') <= 0) {
    errors.push({
      element: userEmailError,
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

function onValidatePasswordInput() {
  const inputUserPassword = document.getElementById('senha');
  const userPassword = inputUserPassword.value;
  const userPasswordError = document.getElementById('passwordError');

  userPasswordError.classList.remove('show');
  const passwordErrors = [];

  if (!userPassword) {
    passwordErrors.push({
      element: userPasswordError,
      message: 'Insira a sua senha',
    });
  }

  if (userPassword.length <= 4) {
    passwordErrors.push({
      element: userPasswordError,
      message: 'A senha deve possuir pelo menos 5 caracteres',
    });
  }

  if (passwordErrors.length > 0) {
    passwordErrors.forEach((error) => {
      error.element.innerText = error.message;
      error.element.classList.add('show');
    });
  }
}

function onValidatePasswordConfirmationInput() {
  const inputUserPassword = document.getElementById('senha');
  const userPassword = inputUserPassword.value;
  const inputUserPasswordConfirmation =
    document.getElementById('confirmacaoSenha');
  const userPasswordConfirmation = inputUserPasswordConfirmation.value;
  const userPasswordConfirmationError = document.getElementById(
    'passwordConfirmationError'
  );

  userPasswordConfirmationError.classList.remove('show');
  const passwordConfirmationErrors = [];

  if (!userPasswordConfirmation) {
    passwordConfirmationErrors.push({
      element: userPasswordConfirmationError,
      message: 'Confirme a sua senha',
    });
  }

  if (userPassword != userPasswordConfirmation) {
    passwordConfirmationErrors.push({
      element: userPasswordConfirmationError,
      message: 'As senhas devem ser iguais',
    });
  }

  if (passwordConfirmationErrors.length > 0) {
    passwordConfirmationErrors.forEach((error) => {
      error.element.innerText = error.message;
      error.element.classList.add('show');
    });
  }
}

function onClickSubmit(event) {
  event.preventDefault();

  const userAgreeInput = document.getElementById('termos');
  const userAgree = userAgreeInput.checked;
  const userAgreeError = document.getElementById('agreeError');
  userAgreeError.classList.remove('show');
  const errors = [];

  if (!userAgree) {
    errors.push({
      element: userAgreeError,
      message: 'É necessário aceitar os Termos de Uso',
    });

    if (errors.length > 0) {
      errors.forEach((error) => {
        error.element.innerText = error.message;
        error.element.classList.add('show');
        return;
      });
    }
  }

  if (
    !onValidateUserNameInput(event) ||
    !onValidateUserLastNameInput(event) ||
    !onValidateUserEmailInput(event) ||
    !onValidatePasswordInput(event) ||
    !onValidatePasswordConfirmationInput(event)
  ) {
    return;
  }

  //Fazer a chamada do backend
  console.log('backend');
}

window.onload = function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', onClickSubmit);

  const userNameInput = document.getElementById('nome');
  userNameInput.addEventListener('blur', onValidateUserNameInput);

  const userLastNameInput = document.getElementById('sobrenome');
  userLastNameInput.addEventListener('blur', onValidateUserLastNameInput);

  const userEmailInput = document.getElementById('email');
  userEmailInput.addEventListener('blur', onValidateUserEmailInput);

  const passwordInput = document.getElementById('senha');
  passwordInput.addEventListener('blur', onValidatePasswordInput);

  const passwordConfirmationInput = document.getElementById('confirmacaoSenha');
  passwordConfirmationInput.addEventListener(
    'blur',
    onValidatePasswordConfirmationInput
  );
};
