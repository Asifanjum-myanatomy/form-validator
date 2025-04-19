const form = document.getElementById('form');
const username = document.getElementById('username');
const email    = document.getElementById('email');
const password = document.getElementById('password');
const password2= document.getElementById('password2');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  formControl.querySelector('small').innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(input.value.trim());
}

// Check required fields; returns true if any empty
function checkRequired(inputs) {
  let hasEmpty = false;
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      hasEmpty = true;
    } else {
      showSuccess(input);
    }
  });
  return hasEmpty;
}

// Check input length; returns true if okay
function checkLength(input, min, max) {
  const len = input.value.trim().length;
  if (len < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    return false;
  } else if (len > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    return false;
  } else {
    showSuccess(input);
    return true;
  }
}

// Check passwords match
function checkPasswordsMatch(pw1, pw2) {
  if (pw1.value !== pw2.value) {
    showError(pw2, 'Passwords do not match');
    return false;
  }
  return true;
}

// Get field name with first letter capitalized
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check if all form-controls are in success state
function isFormValid() {
  return Array.from(document.querySelectorAll('.form-control'))
    .every(fc => fc.classList.contains('success'));
}

// Event listener
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // 1. Required check
  const hasEmpty = checkRequired([username, email, password, password2]);

  // 2. If no required errors, run further checks
  if (!hasEmpty) {
    const uOk = checkLength(username, 3, 15);
    const pOk = checkLength(password, 6, 25);
    const eOk = checkEmail(email) ? showSuccess(email) : showError(email, 'Email is not valid');
    const mOk = checkPasswordsMatch(password, password2);

    // 3. If ALL validations pass, go to Thank You page
    if (uOk && pOk && eOk !== false && mOk && isFormValid()) {
      window.location.href = 'thankyou.html';
    }
  }
});
