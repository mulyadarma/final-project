// DOM
const loginBtn = document.querySelector('.login-btn');
const loginBox = document.querySelector('.login-box');
const loginForm = document.querySelector('.login-form');
const boxs = document.querySelectorAll('.box')
const welcome = document.querySelector('.welcome');


let showForm = false;

loginBtn.addEventListener('click', function () {
   if (!showForm) {
      loginBtn.classList.add('close');
      loginBox.classList.add('show');
      loginForm.classList.add('show');
      boxs.forEach(item => item.classList.add('show'));
      welcome.classList.add('show');

      showForm = true;
   } else {
      loginBtn.classList.remove('close');
      loginBox.classList.remove('show');
      loginForm.classList.remove('show');
      boxs.forEach(item => item.classList.remove('show'));
      welcome.classList.remove('show');

      showForm = false;
   }


});