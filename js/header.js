const lightModeIcon = document.getElementById('light-theme');
const darkModeIcon = document.getElementById('dark-theme');

const lightMode = () => {
  document.body.classList.toggle('dark-theme');
  lightModeIcon.style.display = 'none';
  darkModeIcon.style.display = 'block';
};
const theme = localStorage.getItem('darkTheme');
if (theme === true) {
  document.body.classList.add('dark-theme');
}

const darkMode = () => {
  document.body.classList.toggle('dark-theme');
  lightModeIcon.style.display = 'block';
  darkModeIcon.style.display = 'none';
  const isDark = document.body.classList.contains('dark-theme');
  localStorage.setItem('darkTheme', isDark);
};

lightModeIcon.addEventListener('click', lightMode);
darkModeIcon.addEventListener('click', darkMode);

//menu
const menuIcon = document.getElementById('menu-icon');
const menuList = document.querySelector('.social_menu');

menuIcon.addEventListener('click', () => {
  menuList.classList.toggle('open');
});
