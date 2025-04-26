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


const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
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


  const timelineData = [
    {
        "date": "2025-03-24",
        "status": "completed",
        "title": "Case Initiated",
        "description": "Filed 'Motion for Declaratory and Injunctive Relief' with Notice of anticipated class certification following discovery.",
        "link": "https://drive.google.com/drive/folders/1NTo0eqZ6Nai2sBxFzS-bBkOUEGTYDFv8?usp=drive_link"
    },
    {
        "date": "2025-03-25",
        "status": "completed",
        "title": "Initial Service Attempts",
        "description": "Defendants served or in process of being served with summons and initial pleadings.",
        "link": "https://drive.google.com/drive/folders/1NTo0eqZ6Nai2sBxFzS-bBkOUEGTYDFv8?usp=drive_link"
    },
    {
        "date": "2025-04-XX",
        "status": "pending",
        "title": "Response Deadline for Defendants",
        "description": "Defendants are required to file answers or responsive pleadings within court-mandated timelines.",
        "link": ""
    },
    {
        "date": "2025-05-XX",
        "status": "pending",
        "title": "Motion for Class Certification Filing",
        "description": "After initial discovery responses, the motion to certify class action will be formally filed.",
        "link": ""
    }
];

const timelineContainer = document.querySelector('main .space-y-6');

timelineData.forEach(item => {
    const dateObj = new Date(item.date);
    const formattedDate = item.date.includes('XX') 
        ? item.date.replace('XX', '').replace(/-$/, '') + ' (Anticipated)'
        : dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
    const timelineItem = document.createElement('div');
    timelineItem.className = 'bg-white p-6 rounded-lg shadow flex';
    
    const statusDot = document.createElement('div');
    statusDot.className = `mr-4 flex-shrink-0 ${item.status === 'completed' ? 'green' : 'blink-orange'} w-6 h-6 rounded-full ${item.status === 'completed' ? 'bg-green-500' : 'bg-orange-500'}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'flex-grow';
    
    const dateHeader = document.createElement('h3');
    dateHeader.className = 'font-bold text-gray-800';
    dateHeader.textContent = formattedDate;
    
    const titleHeader = document.createElement('h4');
    titleHeader.className = 'text-lg font-semibold text-gray-700 mt-1';
    titleHeader.textContent = `Event: ${item.title}`;
    
    const descriptionPara = document.createElement('p');
    descriptionPara.className = 'text-gray-600 mt-2';
    descriptionPara.textContent = item.description;
    
    
    contentDiv.appendChild(dateHeader);
    contentDiv.appendChild(titleHeader);
    contentDiv.appendChild(descriptionPara);

    if (item.link) {
      const link = document.createElement('a');
      link.href = item.link;
      link.target = '_blank'; // Open in new tab
      link.rel = 'noopener noreferrer'; // Security best practice
      link.className = 'inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition'; 
      link.textContent = 'View Public Document';
      contentDiv.appendChild(link);
    }
    
    timelineItem.appendChild(statusDot);
    timelineItem.appendChild(contentDiv);
    
    timelineContainer.appendChild(timelineItem);
});