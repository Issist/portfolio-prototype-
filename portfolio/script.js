/* const desc = document.querySelector(".description");
const show = document.querySelector(".show");
const hide = document.querySelector(".hide"); 
const footer = document.querySelector(".footer");

var open = false;
desc.addEventListener("click", () =>{
   if (!open){
        show.style.display = 'none';
        hide.style.display = 'block';
        open = true
   }else {
        hide.style.display = 'none';
        show.style.display = 'block';
        open = false
    }
}); 

window.addEventListener('keydown', e => {
     if (e.key === 'Enter'){
          window.location.replace('./my_skills.html')
     }
})
/* 
onscroll = (e) => {
     window.location.replace('./my_skills.html') 
}
 */ 






const sliderViewport = document.querySelector(
     '.slider__viewport'
);

const sliderContainer = sliderViewport.querySelector(
     '.slider__container'
);

const numberOfSliders = sliderContainer.querySelectorAll('.swiper-slide').length;

let slideOffset = 0;

const moveSlides = offset => {
     const 
}