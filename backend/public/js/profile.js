function onValidateName(event) {}

function onClickSubmit(event) {
  event.preventDefault();

  if (!onValidateName(event) || !onValidateSobrenome(event)) {
    return;
  }
  console.log('backend');
  // chamada backend
}

window.onload = function () {
  const form = document.getElementById('profileForm');
  form.addEventListener('submit', onClickSubmit);
};
