// Sidebar responsive with smooth transition
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.transform = 'translateX(0)';
  sidebar.style.opacity = '1';
  sidebar.style.pointerEvents = 'auto'; // Enables interaction
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.transform = 'translateX(-100%)';
  sidebar.style.opacity = '0';
  sidebar.style.pointerEvents = 'none'; // Disables interaction
}

//on touch devices
document.querySelectorAll('.card-content').forEach(card => {
  card.addEventListener('click', () => {
      card.classList.toggle('active');
  });
});
 
 // sticky navgation
 window.onscroll = function() {myFunction()};

 var navbar = document.getElementById("navbar");
 var sticky = navbar.offsetTop;
 
 function myFunction() {
   if (window.pageYOffset >= sticky) {
     navbar.classList.add("sticky")
   } else {
     navbar.classList.remove("sticky");
   }
 }
         // Common reavel animations
         ScrollReveal({ 
             reset: false,
             distance: '60px',
             duration: 2500,
             delay: 400
          });
         //  Traget elements
 
          ScrollReveal().reveal('.intro,.programhead,.exam-head', { delay: 400, origin: 'bottom'});
          ScrollReveal().reveal('.intro-info', { delay: 600, origin: 'bottom'});
          //program
          ScrollReveal().reveal('.card1', { delay: 400, origin: 'top'});
          ScrollReveal().reveal('.card2', { delay: 500, origin: 'top'});
          ScrollReveal().reveal('.card3', { delay: 600, origin: 'top'});
          ScrollReveal().reveal('.pro1', { delay: 400, origin: 'bottom'});
          ScrollReveal().reveal('.pro2', { delay: 500, origin: 'bottom'});
          ScrollReveal().reveal('.pro3', { delay: 600, origin: 'bottom'});
          
          //contact
          ScrollReveal().reveal('.contact-title', { delay: 300, origin: 'top'});
          ScrollReveal().reveal('.sent_message', { delay: 400, origin: 'top'});
          ScrollReveal().reveal('.con1', { delay: 600, origin: 'bottom'});
          ScrollReveal().reveal('.con2', { delay: 700, origin: 'bottom'});
          ScrollReveal().reveal('.con3', { delay: 800, origin: 'bottom'});
          //input
          ScrollReveal().reveal('.map', { delay: 600, origin: 'bottom'});
          // ScrollReveal().reveal('.in2', { delay: 700, origin: 'bottom'});
          // ScrollReveal().reveal('.in3', { delay: 800, origin: 'bottom'});
          // ScrollReveal().reveal('.in4', { delay: 900, origin: 'bottom'});
          // ScrollReveal().reveal('.in5', { delay: 1000, origin: 'bottom'});
          // ScrollReveal().reveal('.in6', { delay: 1100, origin: 'bottom'});
         
          //examniation
          ScrollReveal().reveal('.head-exam1', { delay: 400, origin: 'bottom'});
          ScrollReveal().reveal('.head-exam2', { delay: 500, origin: 'bottom'});
          ScrollReveal().reveal('.exam-img-box', { delay: 500, origin: 'top'});
          //admission
          ScrollReveal().reveal('.head-admission', { delay: 400, origin: 'bottom'});
          ScrollReveal().reveal('.admission-head', { delay: 300, origin: 'top'});
          ScrollReveal().reveal('.line1', { delay: 300, origin: 'bottom'});
          ScrollReveal().reveal('.line2', { delay: 400, origin: 'bottom'});
          ScrollReveal().reveal('.line3', { delay: 500, origin: 'bottom'});
          ScrollReveal().reveal('.line4', { delay: 600, origin: 'bottom'});
          ScrollReveal().reveal('.line5', { delay: 700, origin: 'bottom'});
          ScrollReveal().reveal('.line6', { delay: 800, origin: 'bottom'});
          ScrollReveal().reveal('.line7', { delay: 900, origin: 'bottom'});
          ScrollReveal().reveal('.line8', { delay: 1000, origin: 'bottom'});
          ScrollReveal().reveal('.line9', { delay: 1100, origin: 'bottom'});
          ScrollReveal().reveal('.line10', { delay: 1200, origin: 'bottom'});
          ScrollReveal().reveal('.line11', { delay: 1300, origin: 'bottom'});
          ScrollReveal().reveal('.line12', { delay: 1400, origin: 'bottom'});
        // programs animation
          ScrollReveal().reveal('.program-head', { delay: 400, origin: 'top'});
          ScrollReveal().reveal('.program-img-box img', { delay: 500, origin: 'bottom'});
          ScrollReveal().reveal('.head-program1', { delay: 400, origin: 'top'});
          ScrollReveal().reveal('.head-program2', { delay: 500, origin: 'bottom'});
          // gallery
          ScrollReveal().reveal('.gallery1', { delay: 400, origin: 'right'});
          ScrollReveal().reveal('.gallery2', { delay: 500, origin: 'right'});
          ScrollReveal().reveal('.gallery3', { delay: 600, origin: 'right'});
          




