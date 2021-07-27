function onValidateEmail() {
  const user = document.getElementById('email').value;
  const userError = document.getElementById('emailError');
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

async function onClickSubmit(event) {
  event.preventDefault();

  if (!onValidateEmail(event)) {
    return;
  }

  const email = document.getElementById('email').value;

  const response = await fetch('http://localhost:3000/sign-in/reset-password', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log(response);

  if (response.status != 200) {
    const data = await response.json();
    console.log(data.err);
    const resetError = document.getElementById('resetError');
    resetError.classList.add('show');
    resetError.innerText = data.err;
  } else {
    const data = await response.json();
    console.log(data);
  }
}

window.onload = function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', onClickSubmit);

  const userInput = document.getElementById('email');
  userInput.addEventListener('blur', onValidateEmail);
};
