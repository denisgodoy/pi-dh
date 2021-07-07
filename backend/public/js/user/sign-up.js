function onValidateUserNameInput() {
  const userName = document.getElementById('nome').value;
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
  const userLastName = document.getElementById('sobrenome').value;
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
  const userEmail = document.getElementById('email').value;
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
  const userPassword = document.getElementById('senha').value;
  const userPasswordError = document.getElementById('passwordError');

  userPasswordError.classList.remove('show');
  const errors = [];

  if (!userPassword) {
    errors.push({
      element: userPasswordError,
      message: 'Insira a sua senha',
    });
  }

  if (userPassword.length <= 4) {
    errors.push({
      element: userPasswordError,
      message: 'A senha deve possuir pelo menos 5 caracteres',
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

function onValidatePasswordConfirmationInput() {
  const userPassword = document.getElementById('senha').value;
  const userPasswordConfirmation =
    document.getElementById('confirmacaoSenha').value;
  const userPasswordConfirmationError = document.getElementById(
    'passwordConfirmationError'
  );

  userPasswordConfirmationError.classList.remove('show');
  const errors = [];

  if (!userPasswordConfirmation) {
    errors.push({
      element: userPasswordConfirmationError,
      message: 'Confirme a sua senha',
    });
  }

  if (userPassword != userPasswordConfirmation) {
    errors.push({
      element: userPasswordConfirmationError,
      message: 'As senhas devem ser iguais',
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

async function onSubmitSignUp(event) {
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
  const userName = document.getElementById('nome').value;
  const userLastName = document.getElementById('sobrenome').value;
  const userEmail = document.getElementById('email').value;
  const userPassword = document.getElementById('senha').value;
  const userType = document.querySelector(
    'input[name="tipoUser"]:checked'
  ).value;
  const image = 'image';

  const response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    body: JSON.stringify({
      nome: userName,
      sobrenome: userLastName,
      email: userEmail,
      senha: userPassword,
      avatar: image,
      termos: userAgree,
      tipoUser: userType,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status != 200) {
    const data = await response.json();
    console.log(data.err);
    const signUpError = document.getElementById('signUpError');
    signUpError.classList.add('show');
    signUpError.innerText = data.err;
  } else {
    window.location.href = '/sign-up/sucesso';
  }
}

window.onload = function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', onSubmitSignUp);

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
