document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.form-container').classList.toggle('rotate');
  });
});
