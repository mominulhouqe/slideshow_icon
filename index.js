

const slideshowElement = document.querySelectorAll(".component");

let countElement = 1;


setInterval(() => {
    countElement ++;

        let currentElement = document.querySelector(".current");

        currentElement.classList.remove("current");

        if(countElement > slideshowElement.length){
            slideshowElement[0].classList.add("current");
            countElement = 1;
        }else{
            currentElement.nextElementSibling.classList.add("current");

        } 

}, 2000);
