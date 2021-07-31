// Smooth Scrolling
$('.cf a').on('click', function(event) {
   if (this.hash !== '') {
     event.preventDefault();
 
     const hash = this.hash;
 
     $('html, body').animate(
       {
         scrollTop: $(hash).offset().top
       },
       800,
       function() {
         window.location.hash = hash;
       }
     );
   }
 });

 //navbar sticky
 $(window).on("scroll", function () {
   if ($(window).scrollTop()) {
     $("header").addClass("black");
   } else {
     $("header").removeClass("black");
   }
 });

 //responsive navbar
//  const bar = document.querySelector('#bar')
//  const links = document.querySelector('.links')

//  bar.addEventListener('click', (e) => {
//     links.classList.toggle('visibleLink')
//  })
