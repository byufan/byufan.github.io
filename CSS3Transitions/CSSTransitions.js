function myFunction() {
    document.getElementById("myCOUGARS").style.WebkitTransition = "all 2s"; // Code for Safari 3.1 to 6.0
    document.getElementById("myCOUGARS").style.transition = "all 2s";
}


/* Test Code - Remarked out

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
*/