const menuTog = document.querySelector('.menu-toggle input')

const nav = document.querySelector('nav ul')

menuTog.addEventListener('click', function () {
  nav.classList.toggle('slide')
})