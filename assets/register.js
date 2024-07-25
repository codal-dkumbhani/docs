function checkPassword(password) {
  const requirements = {
    length: password.length >= 8,
    number: /\d/.test(password),
    capital: /[A-Z]/.test(password),
  };

  document.getElementById('char-length').innerHTML = requirements.length
    ? ''
    : '<span class="x-icon"></span> Must be at least 8 characters';

  document.getElementById('number').innerHTML = requirements.number
    ? ''
    : '<span class="x-icon"></span> Must contain 1 number';

  document.getElementById('capital-letter').innerHTML = requirements.capital
    ? ''
    : '<span class="x-icon"></span> Must contain 1 capital letter';

  if (requirements.length && requirements.number && requirements.capital) {
    document.querySelector('.errors-container').style.display = 'none';
  }
}

document.getElementById('createCustomerForm').addEventListener('submit', function (event) {
  const password = document.getElementById('CreatePassword').value;
  const confirmPassword = document.getElementById('ConfirmPassword').value;

  const requirements = {
    length: password.length >= 8,
    number: /\d/.test(password),
    capital: /[A-Z]/.test(password),
  };

  if (!requirements.length || !requirements.number || !requirements.capital) {
    event.preventDefault();
    document.querySelector('.errors-container').style.display = 'block';
  } else {
    document.querySelector('.errors-container').style.display = 'none';
  }

  if (password !== confirmPassword) {
    event.preventDefault();
    alert('Passwords do not match.');
  }
});
