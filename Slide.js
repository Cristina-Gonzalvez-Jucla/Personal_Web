setTimeout(() => {

let slideIndex = 0;
showSlides();

function showSlides() {
    console.log("asdaf")
    let i;
    let slides = document.getElementsByClassName("mySlides");
    console.log("slides 1", slides);
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
      slides[i].className = slides[i].className.replace(" fade", "");  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    slides[slideIndex-1].className += " fade";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); 
  }
}, 1000);

