// Smooth scroll handled by CSS scroll-behavior, but we'll add form validation and submission feedback

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation (HTML5 validation already in place)
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      showAlert('Please fill in all fields.', 'danger');
      return;
    }

    // Simulate form submission (replace with real API call if needed)
    showAlert('Sending message...', 'info');

    setTimeout(() => {
      showAlert('Thank you for contacting BetterFuture NGO! We will get back to you soon.', 'success');
      form.reset();
    }, 1500);
  });

  function showAlert(message, type) {
    alertBox.textContent = message;
    alertBox.className = `alert alert-${type} mt-3`;
    alertBox.classList.remove('d-none');
  }
});
