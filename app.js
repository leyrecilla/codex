const demoBtn = document.getElementById('demoBtn');
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

demoBtn?.addEventListener('click', () => {
  alert('Gracias. Esta es una demo local clonada por características.');
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('nombre');
  status.textContent = `¡Gracias ${name}! Te contactaremos pronto.`;
  form.reset();
});
