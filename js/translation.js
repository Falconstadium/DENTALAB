import translations from './languages.js';

const languageSelector = document.querySelector('select');

languageSelector.addEventListener('change', (e) => {
  setLanguage(e.target.value);
  localStorage.setItem('lang', e.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
  const language = localStorage.getItem('lang') || 'en';
  setLanguage(language);
  const options = languageSelector.querySelectorAll('option');
  options.forEach((option) => {
    option.value === language
      ? option.setAttribute('selected', '')
      : option.removeAttribute('selected');
  });
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll('[data-i18]');
  elements.forEach((element) => {
    const translationKey = element.getAttribute('data-i18');
    element.textContent = translations[language][translationKey];
  });
};
