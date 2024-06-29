let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () =>{
  menu.classList.toggle('bx-bx');
  navbar.classList.toggle('active');
}
window.onscroll = () =>{
  menu.classList.remove('bx-bx');
  navbar.classList.remove('active');
}

var swiper = new Swiper(".home", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

      });

//JavaScript Pagination concept is applied for moving among the pages with First, Next, Previous and Last buttons or links.
//The querySelector() method returns the first element that matches a CSS selector.
