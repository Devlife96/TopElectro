const toggle = document.querySelectorAll('.toogleMenu');
const menu = document.querySelectorAll('.linkDisplay');
const closeMenu = document.querySelectorAll('.menuClose');

toggle.forEach((toogleBtn, index) => {
  toogleBtn.addEventListener('click', () => {
    menu[index].classList.remove('hidden');
  });   
});

closeMenu.forEach((closeBtn, index) => {
  closeBtn.addEventListener('click', () => {
    menu[index].classList.add('hidden');
    
  });   
});

