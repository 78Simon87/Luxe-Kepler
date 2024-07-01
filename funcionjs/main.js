document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.form-container').classList.toggle('rotate');
    });
  });

  const animate = document.querySelectorAll('.animer');

  function triggerAnimation(entries) {
    entries.forEach(entry => {
      const anim_divs = entry.target.querySelectorAll('.div_ventajas');
      anim_divs.forEach(div => {
        div.classList.toggle('unset', entry.isIntersecting);
      });
    });
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  }

  const observer = new IntersectionObserver(triggerAnimation, options);

  animate.forEach(anim_div => {
    observer.observe(anim_div);
  });
});