  // Define initial base data
  let baseData = [
    ["hello", "Hi there!", ""],
    ["how old is the earth", "The Earth is approximately 4.54 billion years old.", ""]
  ];
  

  
  // Global variables
  let userId = "Guest";
  let state = {
    hair: './hair/hair0.png',
    glasses: './glasses/glasses0.png',
    body: './body/body0.png',
    outer: './outer/outer0.png'
  };

  // Global variables for populations and mainHeading
 let populations = {
  progressive: 10,
  socialist: 10,
  idealist: 10,
  globalist: 10,
  conservative: 10,
  economist: 10,
  realist: 10,
  nationalist: 10,
  populist: 10
};

let mainHeading = {
  explorer: 1,
  voyager: 1,
  captain: 1,
  merchant: 1,
  shipwright: 1,
  fisherman: 1,
  smuggler: 1,
  arbiter: 1,
  sailor: 1
};


  let completedProjects = [];
  let userCompletedProjects = [];
  let conversationData = [];
  let totalPopulation = 0;
  let milestones = [];
  let capacity = [];


  function getTotalPopulation(populations) {
    let total2 = 0;
    
    // Loop through the populations object and sum the values
    for (let key in populations) {
      if (populations.hasOwnProperty(key)) {
        total2 += populations[key];
      }
    }
    
    return total2;
  }



    

  
  // Function to show command list
  function showCommands() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.innerHTML += '<p>Commands:<br><font style="color: lightblue;">[add]</font> Will increase a quantity<br><font style="color: lightblue;">[subtract]</font> Will decrease a quantity<br><font style="color: lightblue;">[set]</font> Will reset value to specified amount<br><font style="color: purple;">[frame]</font> Will create live elements</p>';
    scrollToBottom();
  }
  
  // Function to export data as JSON
  function exportData() {
    updateJSONDisplay(); // Update the JSON editor with the latest data
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(document.getElementById('jsonEditor').value);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", userId + ".json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
  

  // Flag to indicate if we are awaiting the username input
let isAwaitingUsername = false;

// Function to handle user messages
function sendMessage() {
  const inputElem = document.getElementById('userInput');
  const message = inputElem.value;
  inputElem.value = '';

  const chatWindow = document.getElementById('chatWindow');

  // If we're awaiting username input, set the userId to the new username
  if (isAwaitingUsername) {
    // Set new username to the message if it's not empty
    if (message.trim() !== '') {
      userId = message.trim();  // Set the new username
      chatWindow.innerHTML += `<p><font style="color:lightgreen;">Username updated to: ${userId}</font></p>`;
    } else {
      // If the username is empty, remind the user
      chatWindow.innerHTML += `<p><font style="color:red;">Username cannot be empty. Please enter a valid username.</font></p>`;
    }
    isAwaitingUsername = false;  // Reset flag
    scrollToBottom();
  }

  // Regular message processing
  chatWindow.innerHTML += `<p>${userId}: ${message}</p>`;
  scrollToBottom();

  // Preprocess and tokenize the message
  const tokens = preprocessAndTokenize(message);

  // Handle message fallacies
  const detectedFallacies = checkForFallacies(tokens);
  if (detectedFallacies.length > 0) {
    let fallacyMessages = detectedFallacies.map(f => `${f.fallacy}:<br>${f.description} ex. "${f.example}"`).join('<br>');
    let fallacyName = detectedFallacies.map(f => `${f.name}`).join('');
    chatWindow.innerHTML += `<p>${fallacyName}: Possible fallacies detected: <br>${fallacyMessages}</p>`;
    scrollToBottom();
  }



  setTimeout(() => {
    if (currentStep == -1 || currentStep == 4) {
      let response = getResponse(message);

      // Create the typing container with a random emotion
      let typingContainer = createTypingContainer();
      
      // Append response to the text content within the container
      typingContainer.querySelector('#text-content').innerHTML = response;
      
      // Append the container to the chat window
      chatWindow.appendChild(typingContainer);

      scrollToBottom();
    }

    scrollToBottom();

    const timestamp = new Date().toISOString();
    const newEntry = [message, formatResponse(), timestamp];
    conversationData.push(newEntry);

    updateJSONDisplay();

    totalPopulation = getTotalPopulation(populations);
    document.getElementById('mainHeadingAverage').innerHTML = totalPopulation;

  }, 50);
}



  
  // Function to format the response (excluding conversationData)
  function formatResponse() {
    return JSON.stringify({
      id: userId,
          state: state,
          mainHeading: mainHeading,
          populations: populations,
          completedProjects: completedProjects
    }, null, 2);
  }
  
  // Function to escape HTML special characters
  function escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/\n/g, '<br>');
  }
  

  
  // Function to get a response based on message
  function getResponse(message) {
    let response = searchInData(message, baseData);
    if (!response) {
      response = searchInData(message, conversationData);
    }
    return response || "I can't answer that until you provide me with more context.";
  }
  
  // Function to search for a response in data
  function searchInData(message, data) {
    const closestQuestion = getClosestQuestion(message, data);
    return data.find(entry => entry[0] === closestQuestion)?.[1] || null;
  }
  
  // Function to update JSON display
  function updateJSONDisplay() {
    const jsonEditor = document.getElementById('jsonEditor');
    if (jsonEditor) {
      const combinedData = {
        conversationData: conversationData,
        userData: {
          id: userId,
          state: state,
          mainHeading: mainHeading,
          populations: populations,
          completedProjects: completedProjects,
          milestones: milestones,
        capacity: capacity
        }
      };
  
      // Update the JSON editor with the new data
      jsonEditor.value = JSON.stringify(combinedData, null, 2);
  
      // Automatically update the modules when completedProjects is detected
      if (Array.isArray(completedProjects)) {
        completedProjects.forEach(moduleNumber => {
          updateModule(moduleNumber);
        });
      }
  
      checkUsername();
      
    } else {
      console.error("JSON editor element not found.");
    }
  }
  
  // Function to validate data format
  function isValidDataFormat(data) {
    if (!data || !data.conversationData || !Array.isArray(data.conversationData)) {
      return false;
    }
    for (const entry of data.conversationData) {
      if (!Array.isArray(entry) || entry.length !== 3 || typeof entry[0] !== 'string' || typeof entry[1] !== 'string' || typeof entry[2] !== 'string') {
        return false;
      }
    }
    if (!data.userData || typeof data.userData.id !== 'string' || typeof data.userData.state !== 'object' || typeof data.userData.mainHeading !== 'object' || typeof data.userData.populations !== 'object' || !Array.isArray(data.userData.completedProjects)) {
      return false;
    }
    return true;
  }
  
  // Function to post messages to all frames
  function postMessageToAllFrames(win, message) {
    for (let i = 0; i < win.frames.length; i++) {
      win.frames[i].postMessage(message, '*');
      postMessageToAllFrames(win.frames[i], message); // Recursive call for nested iframes
    }
  }
  
// Function to import base data set from a file
function importBaseDataSet(event) {
  const files = event.target.files;
  if (files.length === 0) {
    return; // No file selected
  }

  const reader = new FileReader();

  reader.onload = function (event) {
    try {
      const data = JSON.parse(event.target.result);

      if (isValidDataFormat(data)) { 
        // Update global variables
        conversationData = data.conversationData;
        userId = data.userData.id;
        state = data.userData.state;
        mainHeading = data.userData.mainHeading;
        populations = data.userData.populations;
        completedProjects = data.userData.completedProjects || [];
        milestones = data.userData.milestones || [];
        capacity = data.userData.capacity || {};

        // Apply completed projects
        applyCompletedProjects(completedProjects);


        // Update the JSON display (assuming it updates the JSON editor or visualizes the data)
        updateJSONDisplay();

        // Notify the parent window to open home (specific to your integration)
        parent.postMessage({ action: 'openHome', value: 'openHome' }, '*');

        // Hide login section if present
        const loginPlace = document.getElementById('loginPlace');
        if (loginPlace) {
          loginPlace.style.display = 'none';
        } else {
          console.warn("Element with ID 'loginPlace' not found.");
        }

        // Log the user in and notify in the chat window
        const chatWindow = document.getElementById('chatWindow');
        if (chatWindow) {
          chatWindow.innerHTML += `<font style="color:lightgreen;">${userId} is logged in.</font><br>`;

          // Make the 'scheButton' visible and update its functionality
document.getElementById('scheButton').style.display = "block";
document.getElementById('scheButton').onclick = function() {
  window.open(`tools/school/${userId}.html`, '_blank');
};

// Make the 'mileButton' visible and set its functionality
document.getElementById('mileButton').style.display = "block";
document.getElementById('mileButton').onclick = function() {
  window.open('tools/school/milestones.html', '_blank');
};

// Make the 'Button' visible and set its functionality
document.getElementById('updateButton').style.display = "block";



scanForEmotionWords();
testData();

        } else {
          console.error("Element with ID 'chatWindow' not found.");
        }
      } else {
        alert("Invalid data format.");
      }
    } catch (error) {
      alert("Error reading the file: " + error.message);
    }
  };

  // Read the selected file as text
  reader.readAsText(files[0]);
}

  
  // Function to scroll the chat window to the bottom
  function scrollToBottom() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
  
  // Function to post a message to the parent window
  function postMessageToParent(value, category) {
    const message = {};
    message[category] = value;
    window.parent.postMessage(message, '*');
  }
  

  

  
  // Function to handle user input
  function handleUserInput() {
    const userInputField = document.getElementById('userInput');
    const message = userInputField.value;
    if (message) {
      userInputField.value = '';  // Clear the input field
      response = "Lumie: " + getResponse(message);
    }
  }
  

  
lowerCaseMessage
  
// Function to check and change the username
function checkUsername() {
  if (userId === "Guest") {
    const chatWindow = document.getElementById('chatWindow');
    
    // Display a message in the chat window asking the user to provide a new username
    chatWindow.innerHTML += `<p><font style="color:lightred;">Your current username is 'Guest'. Please enter a new username:</font></p>`;
    scrollToBottom();
    
    // Flag to capture the next input as the new username
    isAwaitingUsername = true;
  }
}
