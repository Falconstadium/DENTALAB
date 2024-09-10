const submitBtn = document.getElementById('submit-btn');

const userName = document.getElementById('username');
const userEmail = document.getElementById('email');
const msgArea = document.getElementById('msg');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  setTimeout(() => {
    userName.value = userEmail.value = msgArea.value = '';
  }, 1500);
});
