// Base conversation data - will be extended with uploaded data
   let baseData = [
    ["hello", "Hi there!", ""],
    ["how old is the earth", "The Earth is approximately 4.54 billion years old.", ""],
    ["what is your name", "I'm Lumies AI assistant!", ""],
    ["goodbye", "Goodbye! Have a great day!", ""]
];

// Global variables
let userId = "Guest";
let conversationData = [];
let loadedData = [];
let jsonData = null;

// Emotion and political mappings
const similarityThreshold = 2;
const emotionScores = { happiness: 0, sadness: 0, anger: 0, fear: 0, surprise: 0 };
const populations = { progressive: 0, socialist: 0, idealist: 0, globalist: 0, conservative: 0, economist: 0, realist: 0, nationalist: 0, populist: 0 };
const mainHeading = { explorer: 0, voyager: 0, captain: 0, merchant: 0, shipwright: 0, fisherman: 0, smuggler: 0, arbiter: 0, sailor: 0 };

// Define emotion words and their weights
const emotionWords = {
happiness: {
"ecstasy": 4,
"delight": 4,
"cheerful": 3,
"happy": 3,
"content": 3,
"elated": 4,
"blissful": 5,
"jubilant": 5,
"excited": 4,
"joyful": 5,        
"radiant": 4,       
"gleeful": 4,       
"thrilled": 5,      
"overjoyed": 5,     
"buoyant": 3,       
"playful": 3,       
"gratified": 4,     
"contented": 3,    
"upbeat": 4,        
"cheery": 4,        
"jovial": 5,        
"merry": 3,         
"elation": 5,       
"satisfied": 4,     
"radiance": 5,      
"euphoric": 5,      
"spirited": 4,      
"happy": 4, 
"exultant": 5,      
"exuberant": 5,     
"vivacious": 4      
},
sadness: {
"sorrow": 5,
"grief": 5,
"depressed": 4,
"mournful": 4,
"unhappy": 3,
"melancholy": 4,
"heartbroken": 5,
"desolate": 4,
"dismal": 3,
"gloomy": 3,
"woeful": 5,       
"downcast": 4,     
"distressed": 5,   
"bleak": 4,        
"forlorn": 5,      
"miserable": 5,    
"sullen": 4,       
"pessimistic": 4,  
"troubled": 4,     
"blue": 3,         
"woe": 5,          
"doleful": 4,      
"dejected": 4,     
"crestfallen": 5, 
"heavyhearted": 5, 
"morose": 4,       
"sad": 3,          
"lonely": 5,       
"anguished": 5,    
"painful": 5,      
"saddened": 4      
},
anger: {
"furious": 5,
"angry": 4,
"enraged": 5,
"irritated": 4,
"annoyed": 3,
"frustrated": 4,
"infuriated": 5,
"outraged": 5,
"hostile": 4,
"agitated": 3,
"livid": 5,
"exasperated": 4,
"incensed": 5,
"enraged": 5,
"seething": 5,
"cross": 3,
"fuming": 5,
"irate": 5,
"vexed": 4,
"peeved": 3,
"wrathful": 5,
"boiling": 5,
"inflamed": 5,
"displeased": 4,
"riled": 4,
"mad": 4,
"irritated": 4,
"hot-tempered": 5,
"vehement": 5,
"exasperated": 4,
"outraged": 5,
"infuriating": 5,
"tense": 4,
"wrath": 5,
"resentful": 4,
"choleric": 5,
"worked-up": 5,
"provoked": 4,
"disgruntled": 4,
"belligerent": 5
},
fear: {
"terrified": 5,
"scared": 4,
"frightened": 4,
"nervous": 3,
"anxious": 3,
"panicked": 5,
"apprehensive": 4,
"alarmed": 4,
"worried": 3,
"fearful": 5,
"horrified": 5,
"dismayed": 4,
"spooked": 4,
"shaken": 4,
"jittery": 3,
"nervousness": 4,
"petrified": 5,
"startled": 4,
"uneasy": 4,
"terrorized": 5,
"disturbed": 4,
"afraid": 4,
"apprehension": 4,
"trembling": 4,
"worried": 3,
"freaked": 4,
"shuddering": 4,
"scary": 4,
"panicky": 5,
"horrific": 5,
"shaky": 4,
"dreadful": 5,
"spooky": 4,
"fright": 4,
"trepidation": 4,
"alarmed": 4,
"skittish": 3,
"terrifying": 5,
"fearsome": 5,
"troubled": 4
},    
surprise: {
"amazed": 5,
"astonished": 5,
"shocked": 4,
"startled": 4,
"dumbfounded": 5,
"unexpected": 4,
"bewildered": 4,
"stunned": 5,
"astounded": 5,
"flabbergasted": 5,
"incredulous": 5,
"overwhelmed": 5,
"shaking": 4,
"baffled": 5,
"staggered": 5,
"taken aback": 5,
"confounded": 5,
"surprised": 5,
"disbelieving": 5,
"amazing": 5,
"unexpectedly": 4,
"unexpectedness": 4,
"startling": 4,
"jolted": 4,
"unbelievable": 5,
"stunning": 5,
"marveled": 5,
"speechless": 5,
"disconcerted": 4,
"wonderstruck": 5,
"awed": 5,
"exhilarated": 5,
"in awe": 5,
"flummoxed": 5,
"thrilled": 5,
"surprised": 5,
"shaken up": 4,
"unsettled": 4,
"gobsmacked": 5,
"dazed": 4,
"perplexed": 4,
"shocked": 5
}

};

// Political keywords with weighted values
const politicalKeywords = {
progressive: {
"equality": 5,
"social": 4,
"reform": 4,
"inclusivity": 3,
"liberal": 3,
"activism": 5,
"gender": 4,
"Reformer": 250,
"Welfare": 4,
"minority": 4,
"green": 3,
"Reform": 4,
"Justice": 5
},
socialist: {
"collectivism": 5,
"redistribution": 4,
"equality": 4,
"welfare": 3,
"workers": 4,
"Helper": 250,
"public": 5,
"social": 4,
"collective": 4,
"Equality": 5,
"Ownership": 4,
"proletariat": 5,
"universal": 5
},
idealist: {
"utopian": 5,
"dreamer": 4,
"visionary": 4,
"hopeful": 3,
"ideal": 3,
"fix": 2,
"improve": 3,
"change": 4,
"system": 3,
"efficient": 3,
"principles": 2,
"ethics": 4,
"morality": 2,
"right": 3,
"Individualist": 250,
"wrong": 3,
"Potential": 5,
"Vision": 4,
"philanthropy": 4,
"justice": 3,
"future": 4,
"Idealism": 4,
"transformative": 4
},
globalist: {
"international": 5,
"global": 5,
"cooperation": 4,
"integration": 4,
"world": 4,
"trans": 5,
"Border": 4,
"Peacemaker": 250,
"universal": 5,
"global": 4,
"multi": 5,
"Peace": 5,
"Solidarity": 4
},
conservative: {
"tradition": 5,
"stability": 4,
"order": 4,
"authority": 3,
"preservation": 4,
"heritage": 5,
"Loyalist": 250,
"Stability": 4,
"socialOrder": 4,
"cultural": 4,
"Values": 5,
"Preservation": 4,
"familyValues": 4
},
economist: {
"capitalism": 5,
"market": 5,
"freeTrade": 4,
"efficiency": 4,
"investment": 3,
"economic": 5,
"Investigator": 250, 
"Capitalists": 4,
"Capital": 4,
"money": 4,
"cash": 4,
"crypto": 4,
"bitcoin": 4,
"entrepreneur": 4,
"fiscal": 4,
"supply": 5,
"Formation": 4,
"labor": 4
},
realist: {
"pragmatic": 5,
"practical": 4,
"realistic": 5,
"Earth": 4,
"rational": 4,
"feasibility": 5,
"tactical": 4,
"Based": 5,
"Achiever": 250,
"Solutions": 4,
"real": 4,
"Effectiveness": 4,
"risk": 4
},
nationalist: {
"patriotism": 5,
"sovereignty": 5,
"national": 4,
"identity": 4,
"independence": 4,
"nationalUnity": 5,
"Challenger": 250,
"sovereignRights": 5,
"culturalPride": 4,
"nationalDevelopment": 4,
"Priority": 4,
"Integrity": 5,
"patriotic": 4
},
populist: {
"Establishment": 5,
"peoplePower": 4,
"commonMan": 4,
"grassroots": 4,
"revolt": 3,
"direct": 5,
"popular": 4,
"Enthusiast": 250,
"Elite": 4,
"Participation": 4,
"Reform": 4,
"social": 4,
"Centric": 4,
"Accountability": 4
}
};

const emotionToHeading = {
happiness: {
explorer: 150,
voyager: 100,
captain: 90,
merchant: 40,
shipwright: 40,
fisherman: 80,
smuggler: 30,
arbiter: 10,
sailor: 80
},
sadness: {
explorer: 20,
voyager: 150,
captain: 50,
merchant: 90,
shipwright: 20,
fisherman: 60,
smuggler: 60,
arbiter: 100,
sailor: 50
},
anger: {
explorer: 50,
voyager: 90,
captain: 150,
merchant: 50,
shipwright: 30,
fisherman: 10,
smuggler: 80,
arbiter: 100,
sailor: 50
},
fear: {
explorer: 10,
voyager: 80,
captain: 100,
merchant: 150,
shipwright: 60,
fisherman: 90,
smuggler: 10,
arbiter: 10,
sailor: 90
},
surprise: {
explorer: 50,
voyager: 100,
captain: 30,
merchant: 30,
shipwright: 150,
fisherman: 100,
smuggler: 10,
arbiter: 10,
sailor: 50
}
};

// DOM elements
const jsonFileInput = document.getElementById('jsonFileInput');
const uploadBtn = document.getElementById('uploadBtn');
const fileInfo = document.getElementById('fileInfo');
const fileName = document.getElementById('fileName');
const chatWindow = document.getElementById('chatWindow');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const userBadge = document.getElementById('userBadge');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadedData = [...baseData];
    initCharts(); // Initialize charts
    updateJSONDisplay();
});

// File upload handling
uploadBtn.addEventListener('click', () => {
    jsonFileInput.click();
});

jsonFileInput.addEventListener('change', (event) => {
    if (event.target.files.length > 0) {
        const file = event.target.files[0];
        fileName.textContent = file.name;
        fileInfo.classList.remove('hidden');

        // Read the file
        const reader = new FileReader();
        reader.onload = (e) => {
           
                const data = JSON.parse(e.target.result);

                // Validate the data format
                if (isValidDataFormat(data)) {
                    // Update global variables
                    loadedData = [...baseData, ...data.conversationData];
                    conversationData = [...data.conversationData];
                    userId = data.userData?.id || "Guest";
                    jsonData = data; // Store the uploaded JSON data

                    // Process data for charts
                    processConversationData();
                    updateJSONDisplay();
                    updateVisualizations(); // Update charts

                    // Hide upload section
                    document.querySelector('.file-upload').classList.add('hidden');
                    fileInfo.classList.add('hidden');

                    // Update user badge
                    userBadge.textContent = userId;

                    // Change title to "Validated"
                    const titleElement = document.querySelector('.bg-indigo-600 h1');
                    if (titleElement) {
                        titleElement.textContent = "Validated";
                    }

                    // Show success message
                    addSystemMessage(`Loaded ${data.conversationData.length} new conversation pairs from file.`);

                    // Show success message in the upload status
                    const uploadStatus = document.getElementById('uploadStatus');
                    uploadStatus.textContent = 'Profile loaded successfully!';
                    uploadStatus.className = 'text-sm mt-2 text-green-600';
                    uploadStatus.classList.remove('hidden');

                    // Enable the form
                }
            
        };
        reader.readAsText(file);
    }
});

// Send message handling
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    userInput.value = '';

    // Add user message to chat
    const timestamp = new Date().toISOString(); // Generate timestamp
    addUserMessage(message, timestamp);

    // Add to conversation data
    const newEntry = [message, "", timestamp];
    conversationData.push(newEntry);

    // Update jsonData with the new conversationData
    if (jsonData) {
        jsonData.conversationData = [...conversationData];
    }

    // Update JSON display
    updateJSONDisplay();

    // Get and display response after a short delay
    setTimeout(() => {
        const response = getResponse(message);
        newEntry[1] = response;

        // Update jsonData with the updated conversationData
        if (jsonData) {
            jsonData.conversationData = [...conversationData];
        }

        processConversationData();
        updateJSONDisplay();
        addSystemMessage(response, timestamp); // Pass timestamp to system message
    }, 500);
}

function addUserMessage(message, timestamp) {
    const chatWindow = document.getElementById('chatWindow');

    // Create a container for the user message
    const messageContainer = document.createElement('div');
    messageContainer.className = 'chat-message-container mb-4';

    // Create the chat bubble
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message text-left text-gray-800 bg-gray-200 rounded-lg p-2';
    userMessage.textContent = `${message}`;
    messageContainer.appendChild(userMessage);

    // Add the timestamp below the chat bubble
    const timestampElement = document.createElement('div');
    timestampElement.className = 'text-xs text-gray-500 mt-1';
    timestampElement.textContent = `${new Date(timestamp).toLocaleString()}`;
    messageContainer.appendChild(timestampElement);

    chatWindow.appendChild(messageContainer);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

function addSystemMessage(message, timestamp) {
    const chatWindow = document.getElementById('chatWindow');

    // Create a container for the system message
    const messageContainer = document.createElement('div');
    messageContainer.className = 'chat-message-container mb-4 text-right';

    // Create the chat bubble
    const systemMessage = document.createElement('div');
    systemMessage.className = 'chat-message text-white bg-indigo-600 rounded-lg p-2';
    systemMessage.textContent = `${message}`;
    messageContainer.appendChild(systemMessage);

    // Add the timestamp below the chat bubble
    const timestampElement = document.createElement('div');
    timestampElement.className = 'text-xs text-gray-500 mt-1';
    timestampElement.textContent = `${new Date(timestamp).toLocaleString()}`;
    messageContainer.appendChild(timestampElement);

    chatWindow.appendChild(messageContainer);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

function processConversationData() {
    // Reset emotion scores and populations
    for (const key in emotionScores) emotionScores[key] = 0;
    for (const key in populations) populations[key] = 0;

    // Process each conversation entry
    conversationData.forEach(([message]) => {
        const words = message.toLowerCase().split(/\s+/).map(word => word.replace(/[^\w\s]/g, ''));

        // Calculate emotion scores
        for (const [emotion, wordsMap] of Object.entries(emotionWords)) {
            for (const [word, weight] of Object.entries(wordsMap)) {
                words.forEach(contentWord => {
                    if (distance(word, contentWord) <= similarityThreshold) {
                        emotionScores[emotion] += weight;
                    }
                });
            }
        }

        // Calculate political scores
        for (const [political, keywords] of Object.entries(politicalKeywords)) {
            for (const [keyword, weight] of Object.entries(keywords)) {
                words.forEach(contentWord => {
                    if (distance(keyword, contentWord) <= similarityThreshold) {
                        populations[political] += weight;
                    }
                });
            }
        }
    });

    // Update mainHeading based on emotion scores
    updateHeadingsBasedOnEmotions(emotionScores);

    // Update charts
    updateVisualizations();
}

function updateHeadingsBasedOnEmotions(emotionScores) {
    // Reset headings
    for (const key in mainHeading) mainHeading[key] = 0;

    // Allocate emotions to headings
    for (const [emotion, score] of Object.entries(emotionScores)) {
        if (score > 0) {
            const headings = emotionToHeading[emotion] || {};
            for (const [heading, value] of Object.entries(headings)) {
                mainHeading[heading] += value * score;
            }
        }
    }
}

function updateJSONDisplay() {
    if (!jsonData || !jsonData.userData) {
        console.warn("jsonData or userData is missing. Skipping JSON display update.");
        const jsonViewer = document.getElementById('jsonViewer');
        jsonViewer.innerHTML = '<p class="text-gray-500 italic">No JSON data available. Upload a file to view and edit the structure.</p>';
        return;
    }

    // Update jsonData with live data
    jsonData.userData.mainHeading = { ...mainHeading };
    jsonData.userData.populations = { ...populations };

    const combinedData = {
        conversationData: conversationData,
        userData: jsonData.userData,
    };

    const jsonViewer = document.getElementById('jsonViewer');
    renderJSON(combinedData, jsonViewer);
}

function renderJSON(data, parentElement) {
    parentElement.innerHTML = '';
    if (typeof data === 'object' && data !== null) {
        const collapsible = document.createElement('div');
        const collapser = document.createElement('span');
        collapser.className = 'json-collapser';
        collapser.textContent = '▶';
        collapser.addEventListener('click', function () {
            const content = this.parentNode.querySelector('.json-content');
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
            this.textContent = content.style.display === 'none' ? '▶' : '▼';
        });

        collapsible.appendChild(collapser);

        const type = Array.isArray(data) ? 'array' : 'object';
        const typeSpan = document.createElement('span');
        typeSpan.className = 'json-key';
        typeSpan.textContent = type === 'array' ? '[' : '{';
        collapsible.appendChild(typeSpan);

        const content = document.createElement('div');
        content.className = 'json-content ml-4';
        content.style.display = 'block';

        for (const key in data) {
            const itemDiv = document.createElement('div');
            if (type === 'object') {
                const keySpan = document.createElement('span');
                keySpan.className = 'json-key';
                keySpan.textContent = `"${key}": `;
                itemDiv.appendChild(keySpan);
            }

            if (typeof data[key] === 'object' && data[key] !== null) {
                renderJSON(data[key], itemDiv);
            } else {
                const valueSpan = document.createElement('span');
                valueSpan.className = getTypeClass(data[key]);
                valueSpan.textContent = typeof data[key] === 'string' ? `"${data[key]}"` : data[key];
                valueSpan.classList.add('json-editable');
                valueSpan.setAttribute('contenteditable', 'true');
                valueSpan.addEventListener('blur', function () {
                    try {
                        const newValue = parseValue(this.textContent);
                        data[key] = newValue;
                        updateVisualizations();
                    } catch (e) {
                        this.textContent = data[key];
                        alert('Invalid value');
                    }
                });
                itemDiv.appendChild(valueSpan);
            }

            content.appendChild(itemDiv);
        }

        const closingBracket = document.createElement('span');
        closingBracket.className = 'json-key';
        closingBracket.textContent = type === 'array' ? ']' : '}';
        collapsible.appendChild(content);
        collapsible.appendChild(closingBracket);
        parentElement.appendChild(collapsible);
    }
}

function getTypeClass(value) {
    if (typeof value === 'string') return 'json-string';
    if (typeof value === 'number') return 'json-number';
    if (typeof value === 'boolean') return 'json-boolean';
    if (value === null) return 'json-null';
    return '';
}

function parseValue(value) {
    if (value === 'null') return null;
    if (value === 'true') return true;
    if (value === 'false') return false;
    if (!isNaN(value) && value.trim() !== '') return Number(value);
    return value;
}

function distance(a, b) {
    const aLen = a.length;
    const bLen = b.length;
    const dist = Array(aLen + 1).fill(null).map(() => Array(bLen + 1).fill(null));

    for (let i = 0; i <= aLen; i++) dist[i][0] = i;
    for (let j = 0; j <= bLen; j++) dist[0][j] = j;

    for (let i = 1; i <= aLen; i++) {
        for (let j = 1; j <= bLen; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            dist[i][j] = Math.min(
                dist[i - 1][j] + 1,
                dist[i][j - 1] + 1,
                dist[i - 1][j - 1] + cost
            );
        }
    }
    return dist[aLen][bLen];
}

function getResponse(message) {
    const lowerMsg = message.toLowerCase().trim();
    let bestMatch = null;
    let bestDistance = Infinity;

    for (const [question, answer] of loadedData) {
        const dist = distance(lowerMsg, question.toLowerCase());
        if (dist < bestDistance) {
            bestDistance = dist;
            bestMatch = [question, answer];
        }
    }

    if (bestDistance <= 5 && bestMatch) return bestMatch[1];
    return "I'm not sure how to respond to that. Can you try asking something else?";
}

function initCharts() {
    // Main Headings Chart
    const mainHeadingCtx = document.getElementById('mainHeadingChart').getContext('2d');
    window.mainHeadingChart = new Chart(mainHeadingCtx, {
        type: 'bar',
        data: {
            labels: [], // Empty initially
            datasets: [{
                label: 'Main Headings',
                data: [], // Empty initially
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Populations Chart
    const populationsCtx = document.getElementById('populationsChart').getContext('2d');
    window.populationsChart = new Chart(populationsCtx, {
        type: 'pie',
        data: {
            labels: [], // Empty initially
            datasets: [{
                data: [], // Empty initially
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
}

function updateVisualizations() {
    if (!jsonData || !jsonData.userData) return;

    // Update main headings chart
    if (jsonData.userData.mainHeading && window.mainHeadingChart) {
        const mainHeadings = Object.entries(jsonData.userData.mainHeading);
        if (mainHeadings.length > 0) {
            window.mainHeadingChart.data.labels = mainHeadings.map(([key]) => key);
            window.mainHeadingChart.data.datasets[0].data = mainHeadings.map(([, value]) => value);
        } else {
            window.mainHeadingChart.data.labels = [];
            window.mainHeadingChart.data.datasets[0].data = [];
        }
        window.mainHeadingChart.update();
    }

    // Update populations chart
    if (jsonData.userData.populations && window.populationsChart) {
        const populations = Object.entries(jsonData.userData.populations);
        if (populations.length > 0) {
            window.populationsChart.data.labels = populations.map(([key]) => key);
            window.populationsChart.data.datasets[0].data = populations.map(([, value]) => value);
        } else {
            window.populationsChart.data.labels = [];
            window.populationsChart.data.datasets[0].data = [];
        }
        window.populationsChart.update();
    }

    // Update projects list
    if (jsonData.userData.completedProjects) {
        const projectsList = document.getElementById('projectsList');
        projectsList.innerHTML = ''; // Clear the existing list

        jsonData.userData.completedProjects.forEach((project) => {
            const projectBadge = document.createElement('div');
            projectBadge.className = 'px-3 py-1 bg-purple-600 rounded-full text-sm text-white';
            projectBadge.textContent = `Project ${project}`;
            projectsList.appendChild(projectBadge);
        });
    }
}

function isValidDataFormat(data) {
    if (!data || !data.conversationData || !Array.isArray(data.conversationData)) {
        return false;
    }
    for (const entry of data.conversationData) {
        if (!Array.isArray(entry) || entry.length !== 3 || typeof entry[0] !== 'string' || typeof entry[1] !== 'string' || typeof entry[2] !== 'string') {
            return false;
        }
    }
    if (!data.userData || typeof data.userData.id !== 'string') {
        return false;
    }
    if (!data.userData.mainHeading || typeof data.userData.mainHeading !== 'object') {
        return false;
    }
    if (!data.userData.populations || typeof data.userData.populations !== 'object') {
        return false;
    }
    return true;
}
// Restore timestamps in the chat window
function restoreTimestamps() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.innerHTML = ''; // Clear the chat window

    if (conversationData.length === 0) {
        chatWindow.innerHTML = '<p class="text-gray-500 italic">No conversation data yet. Start typing below.</p>';
        return;
    }

    // Display messages with timestamps
    conversationData.forEach(([message, response, timestamp]) => {
        // Add user message with timestamp
        const userMessage = document.createElement('div');
        userMessage.className = 'chat-message text-left text-gray-800 bg-gray-200 rounded-lg p-2 mb-2';
        userMessage.textContent = `${userId} (${new Date(timestamp).toLocaleString()}): ${message}`;
        chatWindow.appendChild(userMessage);

        // Add system response with timestamp
        if (response) {
            const systemMessage = document.createElement('div');
            systemMessage.className = 'chat-message text-right text-white bg-indigo-600 rounded-lg p-2 mb-2';
            systemMessage.textContent = `System (${new Date(timestamp).toLocaleString()}): ${response}`;
            chatWindow.appendChild(systemMessage);
        }
    });

    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

// Call restoreTimestamps to ensure timestamps are displayed
restoreTimestamps();
function updateChatWindow() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.innerHTML = ''; // Clear the chat window

    if (conversationData.length === 0) {
        chatWindow.innerHTML = '<p class="text-gray-500 italic">No conversation data yet. Start typing below.</p>';
        return;
    }

    // Display messages added during the session
    conversationData.forEach(([message, response, timestamp]) => {
        // Add user message
        const userMessage = document.createElement('div');
        userMessage.className = 'chat-message text-left text-gray-800 bg-gray-200 rounded-lg p-2 mb-2';
        userMessage.textContent = `${userId}: ${message}`; // Ensure userId is used here
        chatWindow.appendChild(userMessage);

        // Add system response
        if (response) {
            const systemMessage = document.createElement('div');
            systemMessage.className = 'chat-message text-right text-white bg-indigo-600 rounded-lg p-2 mb-2';
            systemMessage.textContent = `System: ${response}`;
            chatWindow.appendChild(systemMessage);
        }
    });

    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

document.getElementById('saveBtn').addEventListener('click', () => {
    if (!jsonData) {
        addSystemMessage("No data to save. Please upload a JSON file first.", true);
        return;
    }

    // Serialize the updated JSON data
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsonData, null, 2));
    const exportFileName = `${userId}_${new Date().toISOString().slice(0, 10)}.json`;

    // Create a temporary anchor element to trigger the download
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportFileName);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();

    addSystemMessage(`File saved as ${exportFileName}.`);
});

