const backdrop = document.querySelector('.backdrop')
const backdropSnapgram = document.querySelector('.backdrop-snapgram')
const backdropPWCC = document.querySelector('.backdrop-pwcc')
const backdropCMS = document.querySelector('.backdrop-cmsapp')
const backdropDevs = document.querySelector('.backdrop-devsForum')


//buttons
const snapgramBtn = document.querySelector('.snapgram-btn')
const pwccBtn = document.querySelector('.pwcc-btn')
const cmsAppBtn = document.querySelector('.cmsApp-btn')
const devsForumBtn = document.querySelector('.devsForumBtn')

window.onload  = () => {
   backdropSnapgram.style.display="none"
   backdropPWCC.style.display="none"
   backdropCMS.style.display="none"
   backdropDevs.style.display="none"
}

//Close Modals
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