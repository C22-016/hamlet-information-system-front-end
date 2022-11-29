function Interactive() {
  // Paralax Effect Jumbotron
  const heroTitle = document.querySelector('.jumbotron h1');
  const heroTagline = document.querySelector('.jumbotron p');
  const heroButton = document.querySelector('.jumbotron his-btn');

  window.addEventListener('scroll', () => {
    const wScroll = window.scrollY;

    heroTitle.style.transform = `translate(0px, ${wScroll / 2.8}px` + ')';
    heroTagline.style.transform = `translate(0px, ${wScroll / 3.5}px` + ')';
    heroButton.style.transform = `translate(0px, ${wScroll / 3}px` + ')';
  });

  // Dark Mode
  const iconDark = document.querySelector('.dark-mode .bi bi-moon-fill');
  const iconLight = document.querySelector('.dark-mode .bi-brightness-high');

  iconDark.addEventListener('click', () => {
    iconLight.classList.remove('d-none-dark');
    iconDark.classList.add('d-none-dark');
    localStorage.setItem('theme', 'dark');
    document.body.classList.add('darkMode');
  });

  iconLight.addEventListener('click', () => {
    iconLight.classList.add('d-none-dark');
    iconDark.classList.remove('d-none-dark');
    localStorage.removeItem('theme');
    document.body.classList.remove('darkMode');
  });

  if (localStorage.getItem('theme') === 'dark') {
    iconLight.classList.remove('d-none-dark');
    iconDark.classList.add('d-none-dark');
    localStorage.setItem('theme', 'dark');
    document.body.classList.add('darkMode');
  }
}

export default Interactive;
