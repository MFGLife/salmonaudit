

const totalSlides = document.querySelectorAll('.swiper-slide').length;

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: totalSlides > 3, // Only enable loop if more than 3 slides
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    640: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

    // Hide the TikTok blockquote after 5 seconds
    window.onload = function() {
      setTimeout(function() {
        var embed = document.querySelector('.tiktok-embed');
        if (embed) {
          embed.style.display = 'none';
        }
      }, 6000); // 5000 milliseconds = 5 seconds
    };