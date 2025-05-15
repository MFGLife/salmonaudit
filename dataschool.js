const chatWindow2 = document.getElementById('chatWindow');

// Function to display selected school resources
function displayDataSchool(schoolKey) {
    const school = dataSchoolWebResources.schools[schoolKey];
    if (!school) {
        console.error(`School with key "${schoolKey}" not found.`);
        return;
    }

    // Set the school title
    const contentTitle = `${school.name} Resources`;

    // Build the content HTML
    let content = `<h3>${school.name}</h3>
                   <p>${school.description}</p>
                   <h4>Web Resources:</h4>`;

    // Add each resource to the content
    school.resources.forEach(resource => {
        content += `
        <div class="resource-item">
            <a href="${resource.url}" class="resource-url" target="_blank">${resource.url}</a>
            <div class="resource-description">${resource.description}</div>
            <div class="focus-sections">Focus areas: ${resource.focusSections.join(", ")}</div>
            <div class="resource-meta">
                <span>Priority: ${resource.priority}</span>
                <span>Last verified: ${resource.lastVerified}</span>
            </div>
        </div>`;
    });

    // Add the "Copy to Clipboard" button
    content += `
        <button onclick="copyDataschool()" class="text-gray-800 text-base sm:text-lg rounded bg-gradient-to-br from-white via-primary-50 to-primary-100 p-2 border-l-8 border-secondary-600 hover:border-blue-600 transition duration-300 overflow-hidden mt-4">
            Copy to Clipboard
        </button>`;

    // Display the content in the chat window
    chatWindow2.innerHTML = content;
    chatContent.classList.remove('hidden');
    chatContent.classList.add('block');
}

// Attach event listeners to the copycat divs
document.querySelectorAll('#copycat').forEach(copycatDiv => {
    copycatDiv.addEventListener('click', function (event) {
        // Prevent the event from propagating to parent elements
        event.stopPropagation();

        // Extract the school key from the closest parent with the class 'card-hover'
        const schoolKey = this.closest('.card-hover').querySelector('span').textContent.toLowerCase();

        // Call the function to display the selected Data School
        displayDataSchool(schoolKey);
         // Expand to full height
      chatBot.classList.remove('h-[10vh]');
      chatBot.classList.remove('bottom-20');
      chatBot.classList.add('h-full');
    });
});

// Function to copy the displayed data to the clipboard
function copyDataschool() {
    const textToCopy = chatWindow2.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Restore timestamps in the chat window
function pushDataschool() {
    chatWindow2.innerHTML = ''; // Clear the chat window
    chatContent.classList.remove('hidden');
    chatContent.classList.add('block');
    chatWindow2.innerHTML = `
        <button onclick="copyDataschool()" class="text-gray-800 text-base sm:text-lg rounded bg-gradient-to-br from-white via-primary-50 to-primary-100 p-2 border-l-8 border-secondary-600 hover:border-blue-600 transition duration-300 overflow-hidden">
            Copy to Clipboard
        </button>`;
}

/**
 * DATA SCHOOLS WEB RESOURCES ARRAY
 * Organized website collections for AI scraping by Data School category
 * Created: May 2025
 * 
 * USAGE: When a user selects a Data School category, the corresponding websites
 * are provided to the AI for scraping relevant information during the conversation.
 */

const dataSchoolWebResources = {
  // Configuration settings for AI scraping
  scrapingConfig: {
    depthLevel: 2,               // How many links deep to follow from main URL
    cacheExpiration: 86400,      // Cache validity in seconds (24 hours)
    prioritizeSections: true,    // Whether to look for specific page sections
    extractMetadata: true,       // Extract page metadata (publish date, author, etc.)
    maxTokensPerResource: 2000   // Limit tokens extracted per resource
  },
  
  // Organized by Data School categories
  schools: {
    // 1. LEGAL DATA SCHOOL
    "legal": {
      name: "Legal Data School",
      description: "Court cases, precedents, and legal frameworks",
      resources: [
        {
          url: "https://www.law.cornell.edu/wex",
          priority: 1,
          description: "Legal dictionary and encyclopedia",
          focusSections: ["definitions", "explanations"],
          lastVerified: "2025-04-15"
        },
        {
          url: "https://www.scotusblog.com/case-files/terms/",
          priority: 2,
          description: "Supreme Court case analysis",
          focusSections: ["case summaries", "opinions"],
          lastVerified: "2025-05-01"
        },
        {
          url: "https://www.justice.gov/archives/jm/justice-manual",
          priority: 2,
          description: "Department of Justice manual",
          focusSections: ["guidelines", "procedures"],
          lastVerified: "2025-03-22"
        },
        // ADD MORE LEGAL RESOURCES HERE
      ]
    },
    
    // 2. PSYCHOLOGICAL DATA SCHOOL
    "psychological": {
      name: "Psychological Data School",
      description: "Behavioral patterns and therapeutic frameworks",
      resources: [
        {
          url: "https://www.apa.org/topics",
          priority: 1,
          description: "American Psychological Association topics",
          focusSections: ["research", "guidelines"],
          lastVerified: "2025-04-28"
        },
        {
          url: "https://www.nimh.nih.gov/health/topics",
          priority: 1,
          description: "National Institute of Mental Health resources",
          focusSections: ["disorders", "treatments"],
          lastVerified: "2025-05-10"
        },
        {
          url: "https://psycnet.apa.org/journals/rev/",
          priority: 3,
          description: "Psychological Review journal",
          focusSections: ["abstracts", "findings"],
          lastVerified: "2025-04-02"
        },
        // ADD MORE PSYCHOLOGICAL RESOURCES HERE
      ]
    },
    
    // 3. ENTERTAINMENT DATA SCHOOL
    "entertainment": {
      name: "Entertainment Data School",
      description: "Creative works and narrative structures",
      resources: [
        {
          url: "https://tvtropes.org/pmwiki/pmwiki.php/Main/Tropes",
          priority: 1,
          description: "TV Tropes catalog of narrative devices",
          focusSections: ["definitions", "examples"],
          lastVerified: "2025-05-07"
        },
        {
          url: "https://www.afi.com/afis-100-years-100-movies/",
          priority: 2,
          description: "American Film Institute lists",
          focusSections: ["rankings", "descriptions"],
          lastVerified: "2025-03-15"
        },
        {
          url: "https://www.writersdigest.com/write-better-fiction",
          priority: 2,
          description: "Writers Digest fiction resources",
          focusSections: ["techniques", "structures"],
          lastVerified: "2025-04-22"
        },
        // ADD MORE ENTERTAINMENT RESOURCES HERE
      ]
    },
    
    // 4. SCIENTIFIC DATA SCHOOL
    "scientific": {
      name: "Scientific Data School",
      description: "Research methodologies and findings",
      resources: [
        {
          url: "https://www.nature.com/subjects",
          priority: 1,
          description: "Nature journal subject areas",
          focusSections: ["research highlights", "reviews"],
          lastVerified: "2025-05-12"
        },
        {
          url: "https://www.science.org/topics",
          priority: 1,
          description: "Science journal topic pages",
          focusSections: ["research news", "perspectives"],
          lastVerified: "2025-05-08"
        },
        {
          url: "https://arxiv.org/",
          priority: 2,
          description: "arXiv preprint repository",
          focusSections: ["abstracts", "recent submissions"],
          lastVerified: "2025-05-13"
        },
        // ADD MORE SCIENTIFIC RESOURCES HERE
      ]
    },
    
    // 5. VISION DATA SCHOOL
    "vision": {
      name: "Vision Data School",
      description: "Visual processing and recognition",
      resources: [
        {
          url: "https://paperswithcode.com/area/computer-vision",
          priority: 1,
          description: "Papers with Code - Computer Vision",
          focusSections: ["methods", "datasets"],
          lastVerified: "2025-05-09"
        },
        {
          url: "https://opencv.org/resources/",
          priority: 2,
          description: "OpenCV resources",
          focusSections: ["tutorials", "documentation"],
          lastVerified: "2025-04-12"
        },
        {
          url: "https://www.kaggle.com/datasets?tags=13202-Computer+Vision",
          priority: 2,
          description: "Kaggle Computer Vision datasets",
          focusSections: ["dataset descriptions", "use cases"],
          lastVerified: "2025-05-01"
        },
        // ADD MORE VISION RESOURCES HERE
      ]
    },
    
    // 6. AUDIO DATA SCHOOL
    "audio": {
      name: "Audio Data School",
      description: "Sound processing and patterns",
      resources: [
        {
          url: "https://ccrma.stanford.edu/~jos/pasp/",
          priority: 1,
          description: "Stanford Audio Signal Processing",
          focusSections: ["techniques", "theory"],
          lastVerified: "2025-03-18"
        },
        {
          url: "https://www.aes.org/e-lib/",
          priority: 2,
          description: "Audio Engineering Society E-Library",
          focusSections: ["abstracts", "findings"],
          lastVerified: "2025-04-25"
        },
        {
          url: "https://www.soundonsound.com/techniques",
          priority: 3,
          description: "Sound on Sound technical articles",
          focusSections: ["tutorials", "explanations"],
          lastVerified: "2025-05-03"
        },
        // ADD MORE AUDIO RESOURCES HERE
      ]
    },
    
    // 7. LOGISTICS DATA SCHOOL
    "logistics": {
      name: "Logistics Data School",
      description: "Supply chain and operational processes",
      resources: [
        {
          url: "https://www.supplychainbrain.com/",
          priority: 1,
          description: "Supply Chain Brain resources",
          focusSections: ["case studies", "strategies"],
          lastVerified: "2025-05-06"
        },
        {
          url: "https://cscmp.org/CSCMP/Educate/SCM_Definitions_and_Glossary_of_Terms.aspx",
          priority: 2,
          description: "Council of Supply Chain Management Professionals",
          focusSections: ["definitions", "best practices"],
          lastVerified: "2025-04-11"
        },
        {
          url: "https://www.inboundlogistics.com/articles/",
          priority: 2,
          description: "Inbound Logistics articles",
          focusSections: ["case studies", "trends"],
          lastVerified: "2025-03-28"
        },
        // ADD MORE LOGISTICS RESOURCES HERE
      ]
    },
    
    // 8. ANIMATION DATA SCHOOL
    "animation": {
      name: "Animation Data School",
      description: "Motion techniques and principles",
      resources: [
        {
          url: "https://www.siggraph.org/learn/",
          priority: 1,
          description: "SIGGRAPH education resources",
          focusSections: ["techniques", "research"],
          lastVerified: "2025-04-20"
        },
        {
          url: "https://www.animationmentor.com/blog/",
          priority: 2,
          description: "Animation Mentor guides",
          focusSections: ["tutorials", "principles"],
          lastVerified: "2025-03-25"
        },
        {
          url: "https://www.11secondclub.com/forum/",
          priority: 3,
          description: "11 Second Club community discussions",
          focusSections: ["critiques", "techniques"],
          lastVerified: "2025-05-05"
        },
        // ADD MORE ANIMATION RESOURCES HERE
      ]
    },
    
    // 9. GOVERNANCE DATA SCHOOL
    "governance": {
      name: "Governance Data School",
      description: "Policy and administrative frameworks",
      resources: [
        {
          url: "https://www.oecd.org/governance/",
          priority: 1,
          description: "OECD governance resources",
          focusSections: ["principles", "country studies"],
          lastVerified: "2025-05-11"
        },
        {
          url: "https://www.transparency.org/en/knowledge",
          priority: 1,
          description: "Transparency International knowledge hub",
          focusSections: ["reports", "best practices"],
          lastVerified: "2025-04-18"
        },
        {
          url: "https://openknowledge.worldbank.org/handle/10986/6",
          priority: 2,
          description: "World Bank Governance resources",
          focusSections: ["research", "policy papers"],
          lastVerified: "2025-05-02"
        },
        // ADD MORE GOVERNANCE RESOURCES HERE
      ]
    }
  },
  
  // Function to retrieve resources for a selected Data School
  getResourcesBySchool: function(schoolKey) {
    if (this.schools[schoolKey]) {
      return this.schools[schoolKey].resources;
    } else {
      return null;
    }
  },
  
  // Function to retrieve a combined set of resources for multiple schools
  getCombinedResources: function(schoolKeys) {
    let combined = [];
    schoolKeys.forEach(key => {
      if (this.schools[key]) {
        combined = combined.concat(this.schools[key].resources);
      }
    });
    
    // Sort by priority (lower number = higher priority)
    return combined.sort((a, b) => a.priority - b.priority);
  },
  
  // Function to prepare scraping instructions for AI
  generateScrapingInstructions: function(schoolKey) {
    const resources = this.getResourcesBySchool(schoolKey);
    if (!resources) return null;
    
    return {
      schoolName: this.schools[schoolKey].name,
      resourceCount: resources.length,
      priorityOrder: resources.map(r => r.url),
      focusAreas: resources.map(r => ({
        url: r.url,
        sections: r.focusSections
      })),
      configSettings: this.scrapingConfig
    };
  }
};

// Example usage:
// 1. User clicks on "Legal Data School" button
// 2. System calls: const legalResources = dataSchoolWebResources.getResourcesBySchool("legal");
// 3. AI receives legalResources for scraping
// 4. AI maintains context from these resources throughout conversation

