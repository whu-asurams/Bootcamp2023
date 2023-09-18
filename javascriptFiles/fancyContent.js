/*********************************
 * 
 *  Setup manusal carousel
*********************************/
let slideIndex = 0;

//setupListenerDot(myTab1, myTabContent1, myTabArrow1);
//setupListenerArrow(myTab1, myTabContent1, myTabArrow1);


function setupListenerDot(slideshow, slidedot, slidearrow) {
  //let slides = document.querySelectorAll(slideshow);
  let dots   = document.querySelectorAll(slidedot);


  dots.forEach(function(dot, index) {
    dot.addEventListener("click", function(){
      slideListner(index, slideshow, slidedot);
    });
  });
}

function setupListenerArrow(slideshow, slidedot, slidearrow) {
  let slides = document.querySelectorAll(slideshow);
  let arrows = document.querySelectorAll(slidearrow);
  arrows[1].addEventListener("click", function(){
    slideIndex ++;
    if (slideIndex >= slides.length) {slideIndex = 0}
    slideListner(slideIndex, slideshow, slidedot);
  });

  arrows[0].addEventListener("click", function(){
    slideIndex --;
    if (slideIndex < 0) {slideIndex = slides.length-1}
    slideListner(slideIndex, slideshow, slidedot);
  });

}

function slideListner(index, slideshow, slidedot){
  let slides = document.querySelectorAll(slideshow);
  let dots   = document.querySelectorAll(slidedot);
  for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
  }
  
  for (i = 0; i < dots.length; i++) {
        dots[i].classList.replace("bg-gray", "bg-light-gray");
  }
      //slides[slideIndex-1].style.display = "block";
  slides[index].classList.add("active");
  if(dots.length>0)
     dots[index].classList.replace("bg-light-gray", "bg-gray");
}




/**************************************
 * 
 * Setup automatic carousel
 * ************************************/



   let slideIndex2 = 0;
   function showSlides2() {
    let i;
    let slides = document.querySelectorAll(myTab2);
    let dots   = document.querySelectorAll(myTabContent2);

    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");  
    }
    slideIndex2++;
    if (slideIndex2 >= slides.length) {slideIndex2 = 0}    
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.replace("bg-gray", "bg-light-gray");
    }
    //alert(slides.length);
    slides[slideIndex2].classList.add("active");  
    if(dots.length>0)
      dots[slideIndex2].classList.replace("bg-light-gray", "bg-gray");
    setTimeout(showSlides2, 2000); // Change image every 2 seconds
  }
  