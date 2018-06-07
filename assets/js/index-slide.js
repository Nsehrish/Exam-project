// slideIndex = 1 integer
var slideIndex = 1;
// run "showSlides" function
showSlides(slideIndex);

// function run when pressing pointers (value either 1 0r -1)
function plusSlides(n) {
  // "adding" n value to that of slideIndex
  showSlides(slideIndex += n);
}

// function run when pressing a button with either 1, 2, or 3 as a value assigned to it
function currentSlide(n) {
  // reassigning slideIndex the value of n
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  // locating and assigning DIVs, with the class "mySlides" assigned, to array "slides"
  var slides = document.getElementsByClassName("mySlides");
  // locating and assigning DIVs, with the class "dot", to js array "dots"
  var dots = document.getElementsByClassName("dot");
  // if imported js value is higher than the amount of imported "slides" (.mySlides) assign 1 to js value "slideIndex"
  if (n > slides.length) {
    slideIndex = 1}
  // if imported js value is less than 1 assign slideIndex the value equal to the amount of "slides" (.mySlides) imported
  if (n < 1) {
    slideIndex = slides.length}
  // running loop times equal to the amount of "slides"
  for (i = 0; i < slides.length; i++) {
    // assigner style "display none" to slides(1), slides(2), and slide(3) if only 3 slides are used on the site
    slides[i].style.display = "none";
  }
  // assigner style "display block" to 1 slide at (js values start at 0)
  slides[slideIndex-1].style.display = "block";

  // removes the class named "w3-red" from all classes asigned ".dot" (easier to process amount of data than finding the relevant one)
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  // adding the class "w3-red" to the currently shown (.mySlides)
  dots[slideIndex-1].className += " w3-red";
}
