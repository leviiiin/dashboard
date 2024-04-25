document.addEventListener('DOMContentLoaded', function () {
  const aside = document.querySelector('.aside');
  const mobile_menu__btn = document.querySelector('.mobile-menu');

  mobile_menu__btn.addEventListener('click', function () {
    mobile_menu__btn.classList.toggle('mobile-menu--open');
    aside.classList.toggle('aside--open');
  });
});