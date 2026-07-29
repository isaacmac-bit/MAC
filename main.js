// Mobile nav toggle
(function () {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
})();

// Apply form: submit via fetch so the user gets an inline confirmation
// instead of being redirected to Formspree's own page.
(function () {
  const form = document.getElementById('applyForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.style.display = 'none';
        success.style.display = 'grid';
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        alert('Something went wrong sending your application. Please try again, or email directly.');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    } catch (err) {
      alert('Something went wrong sending your application. Please try again, or email directly.');
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
})();
