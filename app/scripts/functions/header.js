const menuToggle = document.getElementById('menu_mobile');
  const nav = document.getElementById('menu_nav');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
  });