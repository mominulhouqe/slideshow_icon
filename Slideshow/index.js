

const slideshowElement = document.querySelectorAll(".content");

const SlideShowCout = 1;

setInterval(() => {
    SlideShowCout ++;
    
    let currentElement = document.querySelector(".current");
    currentElement.classList.remove(".current");

    if(SlideShowCout > slideshowElement.length){
        slideshowElement[0].classList.add(".current");
        SlideShowCout = 1;
    }else{
        currentElement.nextElementSibling.classList.add(".current");

    } 
    
}, 3000);

