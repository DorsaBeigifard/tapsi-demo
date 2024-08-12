document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.ham-menu');
  const navList = document.querySelector('.navbar');

  hamburger.addEventListener('click', function () {
      navList.classList.toggle('expanded');
  });
});
