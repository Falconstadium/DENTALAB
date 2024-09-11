const lightModeIcon = document.getElementById('light-theme');
const darkModeIcon = document.getElementById('dark-theme');

const lightMode = () => {
  document.body.classList.toggle('dark-theme');
  lightModeIcon.style.display = 'none';
  darkModeIcon.style.display = 'block';
  const isLightMode = document.body.classList.contains('dark-theme');
  localStorage.setItem('mode', isLightMode);
};

const lighmode = localStorage.getItem('mode');
if (lighmode === 'true') {
  document.body.classList.add('dark-theme');
}

const darkMode = () => {
  document.body.classList.toggle('dark-theme');
  lightModeIcon.style.display = 'block';
  darkModeIcon.style.display = 'none';
  const isDarkMode = document.body.classList.contains('dark-theme');
  localStorage.setItem('dark', isDarkMode);
};

const darkmode = localStorage.getItem('dark');
if (darkmode === 'true') {
  document.body.classList.add('dark-theme');
}

lightModeIcon.addEventListener('click', lightMode);
darkModeIcon.addEventListener('click', darkMode);

//menu
const menuIcon = document.getElementById('menu-icon');
const menuList = document.querySelector('.social_menu');

menuIcon.addEventListener('click', () => {
  menuList.classList.toggle('open');
});
