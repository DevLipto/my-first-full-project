$(document).ready(function () {
    // The hamburger and nav elements
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".header-left nav");
  
    hamburger.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  
  // The slick slider
  $(".banner_slider").slick({
    dots: true, 
    infinite: true, 
    speed: 1600, 
    slidesToShow: 1, 
    autoplay: false, 
    autoplaySpeed: 2000, 
    adaptiveHeight: true,
    drag: true,
    prevArrow: '<div class="slick-arrow prev"><span class="fa fa-arrow-left"></span></div>',
        nextArrow: '<div class="slick-arrow next"><span class="fa fa-arrow-right"></span></div>',

  });


});

  // The magnifican popup

  $(document).ready(function() {
    $('.popup-video').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        }
    });
});

 // The magnifican popup end

 document.addEventListener("DOMContentLoaded", function () {
  // Hide the preloader
  const preloader = document.querySelector(".preloader");
  const content = document.getElementById("content");

  // Simulate a delay for demonstration purposes
  setTimeout(function () {
    preloader.style.display = "none";
    content.style.display = "block";
  }, 900); // You can adjust the delay as needed
});


/** Scroll to top section Start **/


$(document).ready(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $("#scrolltotop").fadeIn();
      } else {
          $("#scrolltotop").fadeOut();
      }
  });
  $("#scrolltotop").click(function() {
      $("html, body").animate({
          scrollTop: 0
      }, 0);
  });
});


/** Scroll to top section End **/

