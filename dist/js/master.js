const backdrop = document.querySelector('.backdrop')
const backdropSnapgram = document.querySelector('.backdrop-snapgram')
const backdropPWCC = document.querySelector('.backdrop-pwcc')
const backdropCMS = document.querySelector('.backdrop-cmsapp')
const backdropDevs = document.querySelector('.backdrop-devsForum')
const closeMenuModal = document.querySelectorAll('#closeMenuModal')

//hamburger menu animation
const ham = document.querySelector('.ham')
const closeMenu = document.querySelector('#closeMenu')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.nav-links li')

ham.addEventListener('click', () => {
   navLinks.classList.toggle("open")
   ham.style.opacity = 0
   ham.style.pointerEvents = "none"
   closeMenu.style.display="block"
   links.forEach(link => {
      link.classList.toggle('fade')
   })
})
closeMenu.addEventListener('click', () => {
   navLinks.classList.toggle("open")
   setTimeout(() => {
      ham.style.opacity = 1
      ham.style.pointerEvents = "all"
      closeMenu.style.display="none"
   }, 1000)
   links.forEach(link => {
      link.classList.toggle('fade')
   })
})

//buttons
const snapgramBtn = document.querySelector('.snapgram-btn')
const pwccBtn = document.querySelector('.pwcc-btn')
const cmsAppBtn = document.querySelector('.cmsApp-btn')
const devsForumBtn = document.querySelector('.devsForumBtn')

window.onload  = () => {
   showSlides(slideIndex)
}

//Close Modals
closeMenuModal.forEach(menu => {
   menu.addEventListener('click', (e) => {
      backdropSnapgram.style.display="none"
      backdropPWCC.style.display="none"
      backdropCMS.style.display="none"
      backdropDevs.style.display="none"
   })
})


backdropSnapgram.addEventListener('click', (e) => {
   if(e.target.classList.contains("backdrop")){
      backdropSnapgram.style.display="none"
   }
})
backdropPWCC.addEventListener('click', (e) => {
   if(e.target.classList.contains("backdrop")){
      backdropPWCC.style.display="none"
   }
})
backdropCMS.addEventListener('click', (e) => {
   if(e.target.classList.contains("backdrop")){
      backdropCMS.style.display="none"
   }
})
backdropDevs.addEventListener('click', (e) => {
   if(e.target.classList.contains("backdrop")){
      backdropDevs.style.display="none"
   }
})

//Open Modals
snapgramBtn.addEventListener('click', (e) => {
   backdropSnapgram.style.display = "flex"
})
pwccBtn.addEventListener('click', (e) => {
   backdropPWCC.style.display = "flex"
})
cmsAppBtn.addEventListener('click', (e) => {
   backdropCMS.style.display = "flex"
})
devsForumBtn.addEventListener('click', (e) => {
   backdropDevs.style.display = "flex"
})

//Slideshow

const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const dot1Btn = document.querySelector('.dot-1')
const dot2Btn = document.querySelector('.dot-2')

let slideIndex = 1 

prevBtn.addEventListener('click', () => {
   showSlides(slideIndex += -1)
})
nextBtn.addEventListener('click', () => {
   showSlides(slideIndex += 1)
})
dot1Btn.addEventListener('click', () => {
   showSlides(slideIndex = 1)
})
dot2Btn.addEventListener('click', () => {
   showSlides(slideIndex = 2)
})

const showSlides = (n) => {
   let i 
   let slides = document.querySelectorAll('.mySlides')
   let dots = document.querySelectorAll('.dot')

   if(n > slides.length){
      slideIndex = 1
   }
   if(n < 1){
      slideIndex = slides.length
   }
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   } 
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
}