var slideIndex = 1; // Beginning index of carousel slide
displaySlide(slideIndex); // Display first carousel slide

// Function to move the slide forward and backward
function moveSlide(n) {
  slideIndex += n; // Update slide index
  displaySlide(slideIndex); // Display the new slide
}

function displaySlide(n) {
  var slides = document.getElementsByClassName("carousel-slide"); // Get list of slides 
  if (n > slides.length) { // If index goes above range, reset index to 1
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length; // If index goes below range, reset index to last slide
  }
  for (var i = 0; i < slides.length; i++) { // Iterate through all slides
      slides[i].style.display = "none"; // Set display to none for all slides
  }
  slides[slideIndex - 1].style.display = "block"; // Display the active slide
}