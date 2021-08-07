const contact = document.querySelector(".contact");
const bubble = document.querySelector(".bubble");
const upBtn = document.querySelector('.up')

const options = {
   threshold: 0.7,
};

let observer = new IntersectionObserver(navcheck, options);

function navcheck(entry) {
   if(entry.isIntersecting){
      upBtn.style.display = "block"
   }else{
      upBtn.style.display = "none"
   }
}

// sections.forEach((section) => {
//    observer.observe(section);
// });
observer.observe(contact)