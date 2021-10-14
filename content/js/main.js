var swiper = new Swiper(".mySwiper ", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    rtl:true,
    responsiveClass:true,
    navText: ["<i class='fas fa-arrow-right'></i>","<i class='fas fa-arrow-left'></i>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
});

$(document).ready(function () {
    // START SCROLL TO TOP BUTTON
    if (window.matchMedia('(min-width:992px)').matches){
      let span = document.querySelector(".up");
      window.onscroll = () => {
        if (scrollY >= 800) {
          span.classList.add("active");
        } else {
          span.classList.remove("active");
        }
      };
      span.onclick = () => {
        window.scrollTo({
          top:0,
          behavior:"smooth",
        })
      }
    }
    // END SCROLL TO TOP BUTTON
})

var animating = false;

$('.hamburger-box').on('click touch', function() {
  if(!animating) {
    animating = true;
    $(this).toggleClass('open');
    $('.loop-glass-box').toggleClass('disable');
    $('.cp').toggleClass('open open-menu');
    setTimeout(function() {
      animating = false;
    }, 300);
  }
});
$('.loop-glass-box').on('click touch', function() {
  if(!animating) {
    animating = true;
    $(this).toggleClass('open');
    $('.hamburger-box').toggleClass('disable');
    $('.cp').toggleClass('open open-search');
    setTimeout(function() {
      animating = false;
    }, 300);
  }
});
