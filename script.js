document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let isValid = true;

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';
  document.getElementById('successMessage').textContent = '';

  // Get values
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();

  // Name validation
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    isValid = false;
  }

  // Email validation using regex
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required';
    isValid = false;
  } else if (!email.match(emailPattern)) {
    document.getElementById('emailError').textContent = 'Enter a valid email';
    isValid = false;
  }

  // Message validation
  if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required';
    isValid = false;
  }

  // Show success message
  if (isValid) {
    document.getElementById('successMessage').textContent = 'Form submitted successfully!';
    document.getElementById('contactForm').reset();
  }
});
