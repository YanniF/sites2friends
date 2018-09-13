const nav = document.querySelector('.menu nav');
const fundo = document.querySelector('.menu-fundo');
const items = document.querySelectorAll('.menu-item');

document.querySelector('.menu-botao').addEventListener('click', function() {
  
  nav.classList.toggle("exibir");
  fundo.classList.toggle("fundo");
});


Array.from(items).forEach((item) => {
  item.addEventListener('click', function() {
    nav.classList.remove('exibir');
    fundo.classList.remove('fundo');
  })
});