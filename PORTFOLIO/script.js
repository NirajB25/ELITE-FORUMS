$(document).ready(function () {
  //  Typing Text Animation  //

  var typed = new Typed(".typing", {
    strings: [
      "Frontend Developer"
     
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Frontend Developer"
     
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  //  Owl Carousel  //

  $(".carousel").owlCarousel({
    margin: 20,
    
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});