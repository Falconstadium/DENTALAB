const submitBtn = document.getElementById('submit-btn');

const userName = document.getElementById('username');
const userEmail = document.getElementById('email');
const msgArea = document.getElementById('msg');

submitBtn.onclick = function () {
  if (userName.value != '' && userEmail.value != '' && msgArea.value != '') {
    setTimeout(() => {
      this.innerHTML = '<div class="loader"></div>';
    }, 1000);
    setTimeout(() => {
      this.innerHTML = '<button data-i18="sent_msg"><button/>';
      this.style =
        'background-color: #fff; border:1px solid #646cff; color: #646cff; font-weight: 600;';
    }, 3000);
  }

  if (userName.value == '') {
    alert('enter your name');
  } else if (userEmail.value == '') {
    alert('enter your email');
  } else if (msgArea.value == '') {
    alert('enter your message');
  }
};

//form
