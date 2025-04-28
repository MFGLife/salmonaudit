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
        "title": "Case Initiated - Serviced",
        "description": "Filed 'Motion for Declaratory and Injunctive Relief' with Notice of anticipated class certification following discovery.",
        "link": "https://drive.google.com/drive/folders/1NTo0eqZ6Nai2sBxFzS-bBkOUEGTYDFv8?usp=drive_link"
    },
    {
      "date": "2025-05-XX",
      "status": "pending",
      "title": "Conducting Initial Discovery: Week 1",
      "descriptionList": [
      { "text": "Olathe Police Department", "status": "pending" },
      { "text": "Carolyn Salmon", "status": "pending" },
      { "text": "United Methodist Church", "status": "pending" },
      { "text": "Kid Centric", "status": "completed" },
      { "text": "Midtown Psychological Services", "status": "pending" }
                        ],
        "link": ""
  },
    {
        "date": "2025-05-XX",
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



const timelineContainer = document.getElementById('timeline-track');

timelineData.forEach(item => {
    const dateObj = new Date(item.date);
    const formattedDate = item.date.includes('XX') 
        ? item.date.replace('XX', '').replace(/-$/, '') + ' (Anticipated)'
        : dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const timelineItem = document.createElement('div');
    timelineItem.className = `
      w-full md:w-[80vw] flex-shrink-0 
      flex flex-col items-center justify-center 
      p-6 rounded-lg shadow 
      transition-all duration-300 ease-in-out
      mx-2
    `;

    const statusDot = document.createElement('span');
    statusDot.className = `mb-4 w-4 h-4 rounded-full ${
        item.status === 'completed' ? 'bg-green-500' : 'blink-orange bg-orange-500'
    }`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'text-center';

    const dateHeader = document.createElement('h3');
    dateHeader.className = 'font-bold text-gray-800';
    dateHeader.textContent = formattedDate;

    const titleHeader = document.createElement('h4');
    titleHeader.className = 'text-lg font-semibold text-gray-700 mt-1';
    titleHeader.textContent = item.title;

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'text-gray-600 mt-2';
    descriptionDiv.textContent = item.description;

    contentDiv.appendChild(dateHeader);
    contentDiv.appendChild(titleHeader);
    contentDiv.appendChild(descriptionDiv);

    // If there's a descriptionList, build a nice <ul>
    if (item.descriptionList && item.descriptionList.length > 0) {
        const ul = document.createElement('ul');
        ul.className = 'mt-2 list-none space-y-1'; // No bullets, add spacing

        item.descriptionList.forEach(listItem => {
            const li = document.createElement('li');
            li.className = 'flex items-center'; // Dot + text

            const smallStatusDot = document.createElement('span');
            smallStatusDot.className = `mr-2 flex-shrink-0 w-3 h-3 rounded-full ${
                listItem.status === 'completed' ? 'bg-green-500' : 'blink-orange bg-orange-500'
            }`;

            const textNode = document.createTextNode(listItem.text);

            li.appendChild(smallStatusDot);
            li.appendChild(textNode);
            ul.appendChild(li);
        });

        contentDiv.appendChild(ul);
    }

    if (item.link) {
        const link = document.createElement('a');
        link.href = item.link;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition'; 
        link.textContent = 'View Public Document';
        contentDiv.appendChild(link);
    }

    timelineItem.appendChild(statusDot);
    timelineItem.appendChild(contentDiv);

    timelineContainer.appendChild(timelineItem);
});
