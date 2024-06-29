document.addEventListener('DOMContentLoaded', (event) => {
  if (localStorage.getItem('paymentCompleted')) {
    window.location.href = '../pagues/paginas_venta.html';
  }
});

document.querySelectorAll('.select-btn').forEach(button => {
  button.addEventListener('click', () => {
    const plan = button.getAttribute('data-plan');
    document.getElementById('plan-name').textContent = `Plan Seleccionado: ${plan}`;
    document.getElementById('modal').style.display = 'flex';
  });
});

document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none';
  }
});

document.getElementById('payment-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const plan = document.getElementById('plan-name').textContent.split(": ")[1];
  const amount = plan === "Pago Único" ? 500 : 100;

  localStorage.setItem('selectedPlan', plan);
  localStorage.setItem('paymentAmount', amount);

  // Redireccionar a PayPal.Me
  window.location.href = `https://www.paypal.me/jhonatancastrogalviz/${amount}`;
});