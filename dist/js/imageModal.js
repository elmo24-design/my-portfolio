window.addEventListener("load", () => {
   const images = document.querySelectorAll('.img')
   const backdrop = document.createElement('div')

   //add the overlay effect
   backdrop.id = "backdrop"
   document.body.appendChild(backdrop)

   images.forEach(image => {
      image.addEventListener('click', (e) => {
         backdrop.classList.add('active')
         
         const img = document.createElement('img')
         img.src = image.src 
         img.className = "images"

         while(backdrop.firstChild){
            backdrop.removeChild(backdrop.firstChild)
         }

         backdrop.appendChild(img)

      })
   })
   backdrop.addEventListener("click", (e) => {
      if(e.target !== e.currentTarget) return;
         backdrop.classList.remove('active')
   })
})