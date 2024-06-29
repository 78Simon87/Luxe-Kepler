document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.form-container').classList.toggle('rotate');
  });
});

// Verificar si el usuario ya ha completado el formulario
if (localStorage.getItem('formSubmitted') === 'true') {
  window.location.href = 'banner.html'; // Redirige automáticamente si ya ha completado el formulario
}

// Manejar el envío del formulario de inicio de sesión
document.querySelector('.login-form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

  const form = event.target;
  const formData = new FormData(form);

  // Enviar el formulario usando fetch
  fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });

  // Guardar en localStorage que el formulario ha sido enviado
  localStorage.setItem('formSubmitted', 'true');

  // Redirigir inmediatamente
  window.location.href = 'banner.html'; // Redirige a paginas_venta.html
});

// Manejar el envío del formulario de registro
document.querySelector('.register-form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

  const form = event.target;
  const formData = new FormData(form);

  // Enviar el formulario usando fetch
  fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });

  // Guardar en localStorage que el formulario ha sido enviado
  localStorage.setItem('formSubmitted', 'true');

  // Redirigir inmediatamente
  window.location.href = 'banner.html'; // Redirige a paginas_venta.html
});