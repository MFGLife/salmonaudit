const idleQuestions = [
    "Have you ever wondered how much your data says about you?",
    "How would you design a fair legal system?",
    "Is misinformation more dangerous than censorship?"
  ];
  let idleIndex = 0;
  let idleTimer = null;

  setTimeout(() => {
    const greeting = 'Drag & drop your JSON file or click button to sync';
    const timestamp = new Date().toISOString();
    addSystemMessage(greeting, timestamp);
    
    startIdleCycle();
}, 3000);

let idleInterval = 42000; // Initial interval of 42 seconds

function startIdleCycle() {
    idleTimer = setInterval(() => {
        // Only prompt if user hasn't typed anything
        if (userInput.value.trim() === '') {
            const question = idleQuestions[idleIndex];
            const timestamp = new Date().toISOString();
            addSystemMessage(question, timestamp);

            idleIndex = (idleIndex + 1) % idleQuestions.length; // Loop back
        }

        // Double the time for the next interval
        clearInterval(idleTimer); // Clear the current interval
        idleInterval *= 2; // Double the interval time
        startIdleCycle(); // Restart the cycle with the updated interval
    }, idleInterval);
}



// Stop idle cycle on user activity
if (idleTimer) {
    clearInterval(idleTimer);
    idleTimer = null;
}

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


  