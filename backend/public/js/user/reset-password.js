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

async function onSubmitResetPassword(event) {
  event.preventDefault();
  if (
    !onValidatePasswordInput(event) ||
    !onValidatePasswordConfirmationInput(event)
  ) {
    return;
  }
  const userPassword = document.getElementById('senha').value;

  const params = new URLSearchParams(window.location.search);
  let email = params.get('email');

  const response = await fetch('http://localhost:3000/sign-in/reset-password', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      senha: userPassword,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status != 200) {
    const data = await response.json();
    const resetPasswordError = document.getElementById('resetPasswordError');
    resetPasswordError.classList.add('show');
    resetPasswordError.innerText = data.err;
  } else {
    const data = await response.json();
    console.log(data);
    window.location.href = '/sign-in/reset-password-success';
  }
}

window.onload = function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', onSubmitResetPassword);

  const passwordInput = document.getElementById('senha');
  passwordInput.addEventListener('blur', onValidatePasswordInput);

  const passwordConfirmationInput = document.getElementById('confirmacaoSenha');
  passwordConfirmationInput.addEventListener(
    'blur',
    onValidatePasswordConfirmationInput
  );
};
