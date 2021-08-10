let darkMode = localStorage.getItem('darkmode')
let moon = document.querySelector('#moon')
let sun = document.querySelector('#sun')

const enableDarkMode = () => {
   document.body.classList.add('darkmode')
   localStorage.setItem('darkmode', 'enabled')
}
const disableDarkMode = () => {
   document.body.classList.remove('darkmode')
   localStorage.setItem('darkmode', null)
}

if(darkMode === 'enabled'){
   enableDarkMode()
}

moon.addEventListener('click', () => {
   darkMode = localStorage.getItem('darkmode')

   if(darkMode !== 'enabled'){
      enableDarkMode()
   }else{
      disableDarkMode()
   }
})
sun.addEventListener('click', () => {
   darkMode = localStorage.getItem('darkmode')

   if(darkMode !== 'enabled'){
      enableDarkMode()
   }else{
      disableDarkMode()
   }
})