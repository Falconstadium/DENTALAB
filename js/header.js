const sunIcon = document.getElementById('light-theme');
const moonIcon = document.getElementById('dark-theme');

const lightMode = () => {
  document.body.classList.remove('dark-theme');
  moonIcon.style.display = 'block';
  sunIcon.style.display = 'none';
  localStorage.setItem('dark', 'false');
};

const darkMode = () => {
  document.body.classList.add('dark-theme');
  moonIcon.style.display = 'none';
  sunIcon.style.display = 'block';
  localStorage.setItem('dark', 'true');
};

const isDarkMode = localStorage.getItem('dark') === 'true';
if (isDarkMode) {
  document.body.classList.add('dark-theme');
  moonIcon.style.display = 'none';
  sunIcon.style.display = 'block';
} else {
  document.body.classList.remove('dark-theme');
  moonIcon.style.display = 'block';
  sunIcon.style.display = 'none';
}

sunIcon.addEventListener('click', lightMode);
moonIcon.addEventListener('click', darkMode);

//menu
const menuIcon = document.getElementById('menu-icon');
const cancelBtn = document.getElementById('clear-icon');
const menuBar = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menuBar.style.right = 0;
});
cancelBtn.addEventListener('click', () => {
  menuBar.style.right = '-50%';
});
