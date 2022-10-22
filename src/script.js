// HEADER SECTION (SEARCH & ACCORDION)

const accordionList = document.querySelector('.accordion-list'),
      triangle = document.querySelector('.triangle'),
      accordion =  document.querySelector('.accordion'),
      search = document.querySelector('.search'),
      searchInput = document.querySelector('.search-show');

accordion.addEventListener('click', () => {
    accordionList.classList.toggle('accordion-active');
    triangle.classList.toggle('triangle-active');
    searchInput.classList.remove('search-active');
})

search.addEventListener('click', () => {
    searchInput.classList.toggle('search-active');
    accordionList.classList.remove('accordion-active');
    triangle.classList.remove('triangle-active');
})

// MOBILE MENU SECTION

const menuBtn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.menu');
      body = document.querySelector('.body');
      
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('btn-menu-active');
    menu.classList.toggle('menu-active');
    body.classList.toggle('body-stop');
})

