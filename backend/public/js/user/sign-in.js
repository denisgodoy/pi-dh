function onValidateUser() {
  const user = document.getElementById('email').value;
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
  const password = document.getElementById('senha').value;
  const passwordError = document.getElementById('passwordError');
  passwordError.classList.remove('show');
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

async function onClickSubmit(event) {
  event.preventDefault();

  if (!onValidatePassword(event) || !onValidateUser(event)) {
    return;
  }

  const email = document.getElementById('email').value;
  const password = document.getElementById('senha').value;

  const response = await fetch('http://localhost:3000/sign-in', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      senha: password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log(response);

  if (response.status != 200) {
    const data = await response.json();
    console.log(data.err);
    const signInError = document.getElementById('signInError');
    signInError.classList.add('show');
    signInError.innerText = data.err;
  } else {
    const data = await response.json();
    console.log(data);
    switch (data.tipoUser) {
      case 'professor':
        window.location.href = '/professor';
      case 'aluno':
        window.location.href = '/aluno';
    }
  }
}

window.onload = function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', onClickSubmit);

  const userInput = document.getElementById('email');
  userInput.addEventListener('blur', onValidateUser);

  const passwordInput = document.getElementById('senha');
  passwordInput.addEventListener('blur', onValidatePassword);
};
